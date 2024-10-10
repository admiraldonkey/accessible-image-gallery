// Get DOM nodes
const selectCategory = document.getElementById("category-btn");
const prevBtn = document.getElementById("view-prev");
const nextBtn = document.getElementById("view-next");
const mainImage = document.getElementById("main-image");

// Arrays of images, organised by category and split between portrait and landscape orientation  || NATURE DONE, REST TO DO
const nature = {
  portrait: [
    {
      srcset:
        "./assets/portrait/nature/road-sm.jpg 640w, ./assets/portrait/nature/road-sm-md.jpg 960w, ./assets/portrait/nature/road-md.jpg 1920w, ./assets/portrait/nature/road-lg.jpg 2400w",
      sizes:
        "(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px",
      src: "./assets/portrait/nature/road-lg.jpg",
      alt: "A car driving down a dirt road through a forest",
    },
    {
      srcset:
        "./assets/portrait/nature/mountain-sm.jpg 640w, ./assets/portrait/nature/mountain-sm-md.jpg 960w, ./assets/portrait/nature/mountain-md.jpg 1920w, ./assets/portrait/nature/mountain-lg.jpg 2400w",
      sizes:
        "(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px",
      src: "./assets/portrait/nature/mountain-lg.jpg",
      alt: "A large mountain covered in snow and clouds",
    },
    {
      srcset:
        "./assets/portrait/nature/beach-sm.jpg 640w, ./assets/portrait/nature/beach-sm-md.jpg 960w, ./assets/portrait/nature/beach-md.jpg 1920w, ./assets/portrait/nature/beach-lg.jpg 2400w",
      sizes:
        "(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px",
      src: "./assets/portrait/nature/beach-lg.jpg",
      alt: "A sunny beach and coastline",
    },
    {
      srcset:
        "./assets/portrait/nature/aurora-sm.jpg 640w, ./assets/portrait/nature/aurora-sm-md.jpg 960w, ./assets/portrait/nature/aurora-md.jpg 1920w, ./assets/portrait/nature/aurora-lg.jpg 2400w",
      sizes:
        "(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px",
      src: "./assets/portrait/nature/aurora-lg.jpg",
      alt: "A view of the Aurora Borealis",
    },
    {
      srcset:
        "./assets/portrait/nature/lake-sm.jpg 640w, ./assets/portrait/nature/lake-sm-md.jpg 960w, ./assets/portrait/nature/lake-md.jpg 1920w, ./assets/portrait/nature/lake-lg.jpg 2400w",
      sizes:
        "(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px",
      src: "./assets/portrait/nature/lake-lg.jpg",
      alt: "A small tree-covered island int he middle of a lake",
    },
    {
      srcset:
        "./assets/portrait/nature/snowy-mountain-sm.jpg 640w, ./assets/portrait/nature/snowy-mountain-sm-md.jpg 960w, ./assets/portrait/nature/snowy-mountain-md.jpg 1920w, ./assets/portrait/nature/snowy-mountain-lg.jpg 2400w",
      sizes:
        "(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px",
      src: "./assets/portrait/nature/snowy-mountain-lg.jpg",
      alt: "A mountainous landscape covered in snow and trees",
    },
    {
      srcset:
        "./assets/portrait/nature/tree-sm.jpg 640w, ./assets/portrait/nature/tree-sm-md.jpg 960w, ./assets/portrait/nature/tree-md.jpg 1920w, ./assets/portrait/nature/tree-lg.jpg 2400w",
      sizes:
        "(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px",
      src: "./assets/portrait/nature/tree-lg.jpg",
      alt: "An odd looking tree with weird flowers blooming from it",
    },
    {
      srcset:
        "./assets/portrait/nature/waterfall-sm.jpg 640w, ./assets/portrait/nature/waterfall-sm-md.jpg 960w, ./assets/portrait/nature/waterfall-md.jpg 1920w, ./assets/portrait/nature/waterfall-lg.jpg 2400w",
      sizes:
        "(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px",
      src: "./assets/portrait/nature/waterfall-lg.jpg",
      alt: "A waterfall cascading down rocks framed by a forest",
    },
  ],
  landscape: [
    {
      srcset:
        "./assets/landscape/nature/canyon-sm.jpg 640w, ./assets/landscape/nature/canyon-sm-md.jpg 960w, ./assets/landscape/nature/canyon-md.jpg 1920w, ./assets/landscape/nature/canyon-lg.jpg 2400w",
      sizes:
        "(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px",
      src: "./assets/landscape/nature/canyon-lg.jpg",
      alt: "Sunbeam shining through a narrow canyon",
    },
    {
      srcset:
        "./assets/landscape/nature/hillpath-sm.jpg 640w, ./assets/landscape/nature/hillpath-sm-md.jpg 960w, ./assets/landscape/nature/hillpath-md.jpg 1920w, ./assets/landscape/nature/hillpath-lg.jpg 2400w",
      sizes:
        "(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px",
      src: "./assets/landscape/nature/hillpath-lg.jpg",
      alt: "A rocky path leading across a hilly landscape",
    },
    {
      srcset:
        "./assets/landscape/nature/hills-sm.jpg 640w, ./assets/landscape/nature/hills-sm-md.jpg 960w, ./assets/landscape/nature/hills-md.jpg 1920w, ./assets/landscape/nature/hills-lg.jpg 2400w",
      sizes:
        "(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px",
      src: "./assets/landscape/nature/hills-lg.jpg",
      alt: "An arial view of undulating hills",
    },
    {
      srcset:
        "./assets/landscape/nature/lake-sm.jpg 640w, ./assets/landscape/nature/lake-sm-md.jpg 960w, ./assets/landscape/nature/lake-md.jpg 1920w, ./assets/landscape/nature/lake-lg.jpg 2400w",
      sizes:
        "(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px",
      src: "./assets/landscape/nature/lake-lg.jpg",
      alt: "View from a lake flanked by large, snow covered mountains",
    },
    {
      srcset:
        "./assets/landscape/nature/misty-sm.jpg 640w, ./assets/landscape/nature/misty-sm-md.jpg 960w, ./assets/landscape/nature/misty-md.jpg 1920w, ./assets/landscape/nature/misty-lg.jpg 2400w",
      sizes:
        "(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px",
      src: "./assets/landscape/nature/misty-lg.jpg",
      alt: "A rocky, mountainous landscape shrouded in mist",
    },
    {
      srcset:
        "./assets/landscape/nature/stream-sm.jpg 640w, ./assets/landscape/nature/stream-sm-md.jpg 960w, ./assets/landscape/nature/stream-md.jpg 1920w, ./assets/landscape/nature/stream-lg.jpg 2400w",
      sizes:
        "(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px",
      src: "./assets/landscape/nature/stream-lg.jpg",
      alt: "An arial view of a small stream meandering through green rice paddies",
    },
    {
      srcset:
        "./assets/landscape/nature/sunset-sm.jpg 640w, ./assets/landscape/nature/sunset-sm-md.jpg 960w, ./assets/landscape/nature/sunset-md.jpg 1920w, ./assets/landscape/nature/sunset-lg.jpg 2400w",
      sizes:
        "(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px",
      src: "./assets/landscape/nature/sunset-lg.jpg",
      alt: "A beautiful sunset over the ocean",
    },
    {
      srcset:
        "./assets/landscape/nature/twilight-coast-sm.jpg 640w, ./assets/landscape/nature/twilight-coast-sm-md.jpg 960w, ./assets/landscape/nature/twilight-coast-md.jpg 1920w, ./assets/landscape/nature/twilight-coast-lg.jpg 2400w",
      sizes:
        "(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px",
      src: "./assets/landscape/nature/twilight-coast-lg.jpg",
      alt: "Coastal view out to sea in twilight",
    },
  ],
};
const animals = [{ srcset: "", sizes: "", src: "", alt: "" }];
const space = [{ srcset: "", sizes: "", src: "", alt: "" }];
const art = [{ srcset: "", sizes: "", src: "", alt: "" }];
const architecture = [{ srcset: "", sizes: "", src: "", alt: "" }];
const people = [{ srcset: "", sizes: "", src: "", alt: "" }];

// Object containing portrait image categories  USECASE TBD
const imageCategoriesPortrait = {
  nature: nature.portrait,
  animals: animals.portrait,
  space: space.portrait,
  art: art.portrait,
  architecture: architecture.portrait,
  people: people.portrait,
};

// Object containing landscape image categories  USECASE TBD
const imageCategoriesLandscape = {
  nature: nature.landscape,
  animals: animals.landscape,
  space: space.landscape,
  art: art.landscape,
  architecture: architecture.landscape,
  people: people.landscape,
};

// Initialise current image selection
let imgIndex = 0;
let currentCategory = nature; // Update this variable to be dynamic & update the relevant functions

// EVENT LISTENERS (CLICK, SPACEBAR, ARROWS)
// Listeners to switch to next image
nextBtn.addEventListener("click", (e) => {
  nextImg();
});
nextBtn.addEventListener("keydown", (e) => {
  if (e.code == "Space") {
    nextImg();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowRight") {
    nextImg();
  }
});

// Listeners to switch to previous image
prevBtn.addEventListener("click", (e) => {
  prevImg();
});
prevBtn.addEventListener("keydown", (e) => {
  if (e.code == "Space") {
    prevImg();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowLeft") {
    prevImg();
  }
});

// Function to switch to previous image in same array
function prevImg() {
  //   let currentCategory = getCategory();
  let orientation = getScreenOrientation();
  if (imgIndex == 0) {
    imgIndex = currentCategory[orientation].length - 1;
  } else {
    imgIndex--;
  }
  console.log(imgIndex);
  mainImage.src = `${currentCategory[orientation][imgIndex].src}`;
  mainImage.srcset = `${currentCategory[orientation][imgIndex].srcset}`;
  mainImage.sizes = `${currentCategory[orientation][imgIndex].sizes}`;
  mainImage.alt = `${currentCategory[orientation][imgIndex].alt}`;
  console.log("code ran");
}

// Function to switch to next image  in same array
function nextImg() {
  let orientation = getScreenOrientation();

  if (imgIndex < currentCategory[orientation].length - 1) {
    imgIndex++;
  } else {
    imgIndex = 0;
  }

  console.log(imgIndex);
  mainImage.src = `${currentCategory[orientation][imgIndex].src}`;
  mainImage.srcset = `${currentCategory[orientation][imgIndex].srcset}`;
  mainImage.sizes = `${currentCategory[orientation][imgIndex].sizes}`;
  mainImage.alt = `${currentCategory[orientation][imgIndex].alt}`;
  console.log("code ran");
}

// Function to get and return the currently selected image category  STILL TO DO
function getCategory() {
  return;
}

// Function to get and return the user's current screen orientation
function getScreenOrientation() {
  let orientation = "";
  if (window.innerHeight > window.innerWidth) {
    orientation = "portrait";
  } else {
    orientation = "landscape";
  }
  return orientation;
}
