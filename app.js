// Get DOM nodes
const selectCategory = document.getElementById("category-btn");
const prevBtn = document.getElementById("view-prev");
const nextBtn = document.getElementById("view-next");
const mainImage = document.getElementById("main-image");
const thumb1 = document.getElementById("1");
const thumb2 = document.getElementById("2");
const thumb3 = document.getElementById("3");
const thumb4 = document.getElementById("4");
const thumb5 = document.getElementById("5");
const thumb6 = document.getElementById("6");
const thumb7 = document.getElementById("7");
const thumb8 = document.getElementById("8");

// Arrays of images, organised by category and split between portrait and landscape orientation  || NATURE DONE, REST TO DO
const nature = {
  portrait: [
    {
      srcset:
        "./assets/portrait/nature/road-sm.jpg 800w, ./assets/portrait/nature/road-sm-md.jpg 1200w, ./assets/portrait/nature/road-md.jpg 1920w, ./assets/portrait/nature/road-lg.jpg 2400w",
      src: "./assets/portrait/nature/road-lg.jpg",
      alt: "A car driving down a dirt road through a forest",
    },
    {
      srcset:
        "./assets/portrait/nature/mountain-sm.jpg 800w, ./assets/portrait/nature/mountain-sm-md.jpg 1200w, ./assets/portrait/nature/mountain-md.jpg 1920w, ./assets/portrait/nature/mountain-lg.jpg 2400w",
      src: "./assets/portrait/nature/mountain-lg.jpg",
      alt: "A large mountain covered in snow and clouds",
    },
    {
      srcset:
        "./assets/portrait/nature/beach-sm.jpg 800w, ./assets/portrait/nature/beach-sm-md.jpg 1200w, ./assets/portrait/nature/beach-md.jpg 1920w, ./assets/portrait/nature/beach-lg.jpg 2400w",
      src: "./assets/portrait/nature/beach-lg.jpg",
      alt: "A sunny beach and coastline",
    },
    {
      srcset:
        "./assets/portrait/nature/aurora-sm.jpg 800w, ./assets/portrait/nature/aurora-sm-md.jpg 1200w, ./assets/portrait/nature/aurora-md.jpg 1920w, ./assets/portrait/nature/aurora-lg.jpg 2400w",
      src: "./assets/portrait/nature/aurora-lg.jpg",
      alt: "A view of the Aurora Borealis",
    },
    {
      srcset:
        "./assets/portrait/nature/lake-sm.jpg 800w, ./assets/portrait/nature/lake-sm-md.jpg 1200w, ./assets/portrait/nature/lake-md.jpg 1920w, ./assets/portrait/nature/lake-lg.jpg 2400w",
      src: "./assets/portrait/nature/lake-lg.jpg",
      alt: "A small tree-covered island int he middle of a lake",
    },
    {
      srcset:
        "./assets/portrait/nature/snowy-mountain-sm.jpg 800w, ./assets/portrait/nature/snowy-mountain-sm-md.jpg 1200w, ./assets/portrait/nature/snowy-mountain-md.jpg 1920w, ./assets/portrait/nature/snowy-mountain-lg.jpg 2400w",
      src: "./assets/portrait/nature/snowy-mountain-lg.jpg",
      alt: "A mountainous landscape covered in snow and trees",
    },
    {
      srcset:
        "./assets/portrait/nature/tree-sm.jpg 800w, ./assets/portrait/nature/tree-sm-md.jpg 1200w, ./assets/portrait/nature/tree-md.jpg 1920w, ./assets/portrait/nature/tree-lg.jpg 2400w",
      src: "./assets/portrait/nature/tree-lg.jpg",
      alt: "An odd looking tree with weird flowers blooming from it",
    },
    {
      srcset:
        "./assets/portrait/nature/waterfall-sm.jpg 800w, ./assets/portrait/nature/waterfall-sm-md.jpg 1200w, ./assets/portrait/nature/waterfall-md.jpg 1920w, ./assets/portrait/nature/waterfall-lg.jpg 2400w",
      src: "./assets/portrait/nature/waterfall-lg.jpg",
      alt: "A waterfall cascading down rocks framed by a forest",
    },
  ],
  landscape: [
    {
      srcset:
        "./assets/landscape/nature/canyon-sm.jpg 800w, ./assets/landscape/nature/canyon-sm-md.jpg 1200w, ./assets/landscape/nature/canyon-md.jpg 1920w, ./assets/landscape/nature/canyon-lg.jpg 2400w",
      src: "./assets/landscape/nature/canyon-lg.jpg",
      alt: "Sunbeam shining through a narrow canyon",
    },
    {
      srcset:
        "./assets/landscape/nature/hillpath-sm.jpg 800w, ./assets/landscape/nature/hillpath-sm-md.jpg 1200w, ./assets/landscape/nature/hillpath-md.jpg 1920w, ./assets/landscape/nature/hillpath-lg.jpg 2400w",
      src: "./assets/landscape/nature/hillpath-lg.jpg",
      alt: "A rocky path leading across a hilly landscape",
    },
    {
      srcset:
        "./assets/landscape/nature/hills-sm.jpg 800w, ./assets/landscape/nature/hills-sm-md.jpg 1200, ./assets/landscape/nature/hills-md.jpg 1920w, ./assets/landscape/nature/hills-lg.jpg 2400w",
      src: "./assets/landscape/nature/hills-lg.jpg",
      alt: "An arial view of undulating hills",
    },
    {
      srcset:
        "./assets/landscape/nature/lake-sm.jpg 800w, ./assets/landscape/nature/lake-sm-md.jpg 1200w, ./assets/landscape/nature/lake-md.jpg 1920w, ./assets/landscape/nature/lake-lg.jpg 2400w",
      src: "./assets/landscape/nature/lake-lg.jpg",
      alt: "View from a lake flanked by large, snow covered mountains",
    },
    {
      srcset:
        "./assets/landscape/nature/misty-sm.jpg 800w, ./assets/landscape/nature/misty-sm-md.jpg 1200w, ./assets/landscape/nature/misty-md.jpg 1920w, ./assets/landscape/nature/misty-lg.jpg 2400w",
      src: "./assets/landscape/nature/misty-lg.jpg",
      alt: "A rocky, mountainous landscape shrouded in mist",
    },
    {
      srcset:
        "./assets/landscape/nature/stream-sm.jpg 800w, ./assets/landscape/nature/stream-sm-md.jpg 1200w, ./assets/landscape/nature/stream-md.jpg 1920w, ./assets/landscape/nature/stream-lg.jpg 2400w",
      src: "./assets/landscape/nature/stream-lg.jpg",
      alt: "An arial view of a small stream meandering through green rice paddies",
    },
    {
      srcset:
        "./assets/landscape/nature/sunset-sm.jpg 800w, ./assets/landscape/nature/sunset-sm-md.jpg 1200w, ./assets/landscape/nature/sunset-md.jpg 1920w, ./assets/landscape/nature/sunset-lg.jpg 2400w",
      src: "./assets/landscape/nature/sunset-lg.jpg",
      alt: "A beautiful sunset over the ocean",
    },
    {
      srcset:
        "./assets/landscape/nature/twilight-coast-sm.jpg 800w, ./assets/landscape/nature/twilight-coast-sm-md.jpg 1200w, ./assets/landscape/nature/twilight-coast-md.jpg 1920w, ./assets/landscape/nature/twilight-coast-lg.jpg 2400w",
      src: "./assets/landscape/nature/twilight-coast-lg.jpg",
      alt: "Coastal view out to sea in twilight",
    },
  ],
};
const animals = [{ srcset: "", src: "", alt: "" }];
const space = [{ srcset: "", src: "", alt: "" }];
const art = [{ srcset: "", src: "", alt: "" }];
const architecture = [{ srcset: "", src: "", alt: "" }];
const people = [{ srcset: "", src: "", alt: "" }];

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

// Switch default image on screen if user is in landscape mode
if (getScreenOrientation() == "landscape") {
  mainImage.src = `${nature.landscape[0].src}`;
  mainImage.srcset = `${nature.landscape[0].srcset}`;
  mainImage.alt = `${nature.landscape[0].alt}`;
}

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
    if (getScreenOrientation() == "landscape") {
      let active = document.getElementById(imgIndex + 1);
      active.focus();
    }
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
    if (getScreenOrientation() == "landscape") {
      let active = document.getElementById(imgIndex + 1);
      active.focus();
    }
  }
});

// Put thumbnail nodes into an array to minimise event listeners
const thumbs = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8];

// Check all thumbs for click event and update main image accordingly.
thumbs.forEach(function (elem) {
  elem.addEventListener("click", (e) => {
    changeImage(elem.id);
  });
  elem.addEventListener("keydown", (e) => {
    if (e.code == "Space") {
      changeImage(elem.id);
    }
  });
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
  mainImage.alt = `${currentCategory[orientation][imgIndex].alt}`;
  console.log("code ran");
}

// Function to switch to next image in same array
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
  mainImage.alt = `${currentCategory[orientation][imgIndex].alt}`;
  console.log("code ran");
}

// Function to change image based on selected thumbnail when in landscape mode
function changeImage(thumb) {
  imgIndex = thumb - 1;
  console.log(thumb);
  mainImage.src = `${nature.landscape[imgIndex].src}`;
  mainImage.srcset = `${nature.landscape[imgIndex].srcset}`;
  mainImage.alt = `${nature.landscape[imgIndex].alt}`;
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
