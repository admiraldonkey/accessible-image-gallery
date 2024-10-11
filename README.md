# Accessible & Responsive Image Gallery

A simple mobile-first image gallery with a focus on responsiveness and accessibility

## Features

- Full screen image display, alternate UI and image sets for portrait and landscape modes, loading automatically upon orientation change.
- Designed to test srcset attribute - each image exists in several resolutions and automatically switches depending on display size.
- Ability to choose between different categories of image galleries.
- Ability to navigate currently selected gallery via keyboard arrow keys or the left and right on-screen arrows. These are clickable or activated via spacebar.
- When in landscape mode, thumbnail gallery traversable via same methods as above in addition to using tab.
- Images in current gallery will loop around when they reach the start or end.
- All interactive sections of the website set to be tabbable and interactive as relevant.
- Appropriate ARIA roles and labels added as required (on non-semantic tags), with some updating dynamically.

## Possible feature additions

- More images/gallery categories
- Increased interactivity via keyboard interaction.
- Possibility to pull images from the web

# User Requirements

### User Stories

    🐿️ As a user, I want the website design to adjust using media queries so that it works well on both small mobile screens and larger desktop screens.
    🐿️ As a user with accessibility needs, I expect accessible considerations like alternative text for images so my screen reader can interpret and convey the content to me effectively.
    🐿️ As a user, I want to easily switch between images in the gallery using buttons so that my experience is smooth and intuitive.

### Requirements

    🎯 Implement responsive design using media queries to ensure the website works well on both small mobile screens and larger desktop screens (e.g., above 800px).
    🎯 Ensure all images have appropriate alt text attributes for accessibility.
    🎯 Correctly use event handlers to switch images based on user interactions.

## Stretch Goals

### Stretch User Stories

    🐿️ As a user, I want the website to use 'srcset' to display appropriately sized images for my device, so that images load quickly and look sharp on any screen.
    🐿️ As a user with accessibility needs, I want ARIA elements, such as aria-label, aria-live, and other relevant attributes, to improve my interaction with the website.
    🐿️ As a user, I want to use keyboard shortcuts, like arrow keys, to switch between images easily.
    🐿️ As a user on various devices, I want the website to adapt to different screen sizes through the use of media queries for an optimal viewing experience.

## Stretch Requirements

    🏹 Use 'srcset' to specify which image will be used based on the size of the screen for optimal viewing experience.
    🏹 Add ARIA elements to improve accessibility, such as aria-label, aria-live, and other relevant attributes.
    🏹 Implement key bindings for buttons to enhance navigation, such as using arrow keys to switch between images.
    🏹 Develop media queries for multiple screen sizes.
