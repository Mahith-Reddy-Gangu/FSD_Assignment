# Portfolio Website - Assignment 1

## Design Rationale
The design of this personal portfolio website focuses on clean aesthetics, readability, and a seamless user experience across devices. The color palette utilizes CSS custom properties to maintain consistency, featuring a professional blue primary color against a light gray background to ensure sufficient WCAG AA minimum color contrast. The semantic HTML structure ensures that screen readers and search engines can easily parse the content, strictly using semantic tags to establish a clear hierarchy.

## Layout Technique Justification
To build a responsive and flexible layout, I employed a hybrid approach using both CSS Grid and Flexbox. 
Flexbox was selected for one-dimensional layouts, specifically the navigation bar and form elements. It allows the navigation links to easily wrap and stack vertically on smaller viewports. 
CSS Grid was implemented for the overall structural layout and the Projects section. Grid excels at two-dimensional layouts, enabling the project cards to automatically adjust their columns based on the available screen width using `repeat(auto-fit, minmax(300px, 1fr))`. This eliminates the need for excessive media queries while keeping the cards uniform in size.

## Known Limitations
While the website fulfills all structural and styling requirements, there are a few inherent limitations due to the restriction of using only HTML and CSS. The contact form currently lacks backend processing; clicking "Send" will not transmit data to a server. Additionally, without JavaScript, the site lacks advanced interactivity, such as a functional mobile hamburger menu toggle, dynamic content loading, or complex view transitions. These features will be integrated in future assignments to elevate the static pages into a fully functional web application.