import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { randomUUID } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { projects } from './data/projects.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 5000;
const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';
const serverDirectory = path.dirname(fileURLToPath(import.meta.url));
const contactsFile = path.resolve(serverDirectory, process.env.CONTACTS_FILE || './data/contacts.json');

app.use(cors({ origin: allowedOrigin }));
app.use(express.json());

async function readContacts() {
  try {
    const contents = await fs.readFile(contactsFile, 'utf8');
    return JSON.parse(contents);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

async function writeContacts(contacts) {
  await fs.mkdir(path.dirname(contactsFile), { recursive: true });
  await fs.writeFile(contactsFile, JSON.stringify(contacts, null, 2));
}

app.get('/', (request, response) => {
  response.status(200).json({ status: 'ok', service: 'portfolio-api' });
});

app.get('/api/projects', (request, response) => {
  response.status(200).json(projects);
});

app.get('/api/projects/:id', (request, response) => {
  const project = projects.find((item) => item.id === request.params.id);
  if (!project) {
    return response.status(404).json({ error: 'Project not found' });
  }
  return response.status(200).json(project);
});

app.post('/api/contact', async (request, response, next) => {
  try {
    const { name, email, message } = request.body || {};
    if (!name || !String(name).trim()) {
      return response.status(400).json({ error: 'Name is required.' });
    }
    if (!email || !String(email).trim()) {
      return response.status(400).json({ error: 'Email is required.' });
    }
    if (!message || !String(message).trim()) {
      return response.status(400).json({ error: 'Message is required.' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) {
      return response.status(400).json({ error: 'Please provide a valid email address.' });
    }

    const contacts = await readContacts();
    const submission = {
      id: randomUUID(),
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim(),
      submittedAt: new Date().toISOString(),
    };
    contacts.push(submission);
    await writeContacts(contacts);
    return response.status(201).json({ message: 'Your message was received.', submission });
  } catch (error) {
    return next(error);
  }
});

app.get('/api/contact', async (request, response, next) => {
  try {
    return response.status(200).json(await readContacts());
  } catch (error) {
    return next(error);
  }
});

app.use((request, response) => {
  response.status(404).json({ error: 'Route not found' });
});

app.use((error, request, response, next) => {
  if (response.headersSent) return next(error);
  if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
    return response.status(400).json({ error: 'Request body contains invalid JSON.' });
  }
  console.error(error);
  return response.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Portfolio API listening on http://localhost:${port}`);
});