# Accessible & Responsive Image Gallery

Software Development Bootcamp - Week 1 Project - A simple mobile-first image gallery with a focus on responsiveness and accessibility

# Features

- Full screen image display, alternate UI and image sets for portrait and landscape modes, loading automatically upon orientation change.
- Designed to test srcset attribute - each image exists in several resolutions and automatically switches depending on display size (for a total of 256 images + 32 thumbnails).
- Ability to choose between different categories of image galleries.
- Ability to navigate currently selected gallery via keyboard arrow keys or the left and right on-screen arrows (in portrait mode). These are clickable or activated via spacebar.
- When in landscape mode, thumbnail gallery traversable via same methods as above in addition to using tab.
- Images in current gallery will loop around when they reach the start or end.
- All interactive sections of the website set to be tabbable and interactive as relevant.
- Appropriate ARIA roles and labels added as required (on non-semantic tags), with some updating dynamically.

## Possible later feature additions

- More images/gallery categories.
- Increased interactivity via keyboard interaction.
- Possibility to pull images from the web.
- Perhaps a button to toggle orientation and UI/gallery.

# Reflection

## What requirements did you achieve?

All of them as far as I can tell

## Were there any requirements or goals that you were unable to achieve?

None, although I was having some difficulties making the srcset attribute work well accross devices.

## If so, what was it that you found difficult about these tasks?

When using the dev tools to emulate mobile devices, I found it was difficult to use srcset in a way that worked well for both mobiles and desktop. This was because of mobile devices using Display Pixel Ratio to multiply their resolution in browser so the breakpoints are a lot higher than they should be. But if I put in higher values to compensate then it would also make desktops with x1 DPR display low quality images, so I found it difficult to choose a good middle ground. I'm sure there's a better way to approach it, but I did find it frustrating.

## Requesting feedback about a specific part of your submission

I added a list of features above, so would be great to hear feedback on those points please. Be sure to click/navigate away from the category menu after changing it, otherwise it messes with keyboard navigation (I couldn't find a way to deselect the menu after making a choice unfortunately).

## What errors or bugs did you encounter while completing your assignment? How did you solve them?

A lot of trial and error in trying to get different functionality working as intended. I tried placing the thumbnails via CSS grid and just couldn't get it to work properly, thankfully flex was a good alternative. A lot of console logs and tests involved in trying to properly update images and thumbnails based on user interaction.

## What went really well and what could have gone better?

I'm pretty happy with it overall. It was a lot of work - I underestimated how long it would take just to add all the images and had initially planned on a few more categories. I would have liked a better solution in regards to device DPR messing with my srcset values.

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
