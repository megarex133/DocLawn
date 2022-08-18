// About slider
let cards = document.querySelectorAll(".card");
let galleryItems = document.querySelectorAll(".gallery__item");
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  if (n > cards.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = cards.length;
  }
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  cards[slideIndex - 1].style.display = "block";
}
// CALCULATOR
const calcButtons = document.querySelectorAll(".inc-wrapper");

calcButtons.forEach((button) => {
  const parent = button.parentElement;
  const productContainer = parent.parentElement;
  const priceInput = productContainer.querySelector("#orderPrice");
  const typeInput = productContainer.querySelector("#orderType");
  const input = parent.querySelector(".amount");
  const price = parent.parentElement.querySelector(".price");
  let defaultPrice = 999;
  if (typeInput.value == "Cartridge") {
    defaultPrice = 899;
  }
  button.addEventListener("click", () => {
    console.log(productContainer);
    price.textContent = `Price: ${input.value * defaultPrice}$`;
    if (button.children[0].className == "plus") {
      input.stepUp();
    } else {
      input.stepDown();
    }
    price.textContent = `Price: ${input.value * defaultPrice}$`;
    priceInput.value = input.value * defaultPrice;
  });
});

const numberInputs = document.querySelectorAll(".amount");

numberInputs.forEach((input) => {
  const parent = input.parentElement;
  const productContainer = parent.parentElement;
  const typeInput = productContainer.querySelector("#orderType");
  const price = parent.parentElement.querySelector(".price");
  let defaultPrice = 999;
  if (typeInput.value == "Cartridge") {
    defaultPrice = 899;
  }
  input.addEventListener("change", () => {
    if (input.value > 1000) {
      input.value = 1000;
    } else if (input.value < 0) {
      input.value = 0;
    }
    price.textContent = `Price: ${input.value * defaultPrice}$`;
  });
});
// Products Form
const orderButton = document.querySelectorAll(".order");
const orderForms = document.querySelectorAll(".order__form");
orderButton.forEach((order, index) => {
  order.addEventListener("click", () => {
    if (order.style.display !== "none") {
      order.style.display = "none";
      orderForms[index].style.display = "flex";
    } else {
      order.style.display = "flex";
      orderForms[index].style.display = "none";
    }
  });
});

// FAQ
const faqHeaders = document.querySelectorAll(".faq__header");

faqHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const arrow = header.querySelector(".faq__arrow");
    const paragraph = header.nextElementSibling;
    if (
      window.getComputedStyle(paragraph, null).getPropertyValue("display") ==
      "none"
    ) {
      arrow.style.transform = "rotate(135deg)";
      paragraph.style.display = "inline";
      item.style.height = "auto";
    } else {
      arrow.style.transform = "rotate(45deg)";
      paragraph.style.display = "none";
      item.style.height = "auto";
    }
  });
});

// FAQ View-Button
const button = document.querySelector(".faq__button");
const par = document.querySelector(".faq__list__hidden");
const button_hide = document.querySelector(".faq__button__hide");
const faq = document.querySelector(".navigation__link__faq");
button.addEventListener("click", () => {
  if (
    window.getComputedStyle(par, null).getPropertyValue("display") == "none"
  ) {
    par.style.display = "inline";
    button.style.display = "none";
    button_hide.style.display = "inline";
  } else {
    par.style.display = "none";
    button.style.display = "inline";
    button_hide.style.display = "none";
  }
});
button_hide.addEventListener("click", () => {
  if (
    window.getComputedStyle(par, null).getPropertyValue("display") == "inline"
  ) {
    par.style.display = "none";
    button.style.display = "inline";
    button_hide.style.display = "none";
    window.location.href = faq; //For staying at this section
  } else {
    par.style.display = "inline";
    button.style.display = "none";
    button_hide.style.display = "inline";
  }
});

// COMMENTS
const feedbackForm = document.querySelector(".feedback__form");
const stars = document.querySelectorAll(".feedback__star");
const inputStars = document.querySelector(".feedback__starts-value");
let numberOfFilledStars = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    numberOfFilledStars = 0;
    for (let i = 0; i < stars.length; i++) {
      stars[i].style.removeProperty("background-image");
    }
    for (let i = 0; i < stars.length; i++) {
      numberOfFilledStars++;
      stars[i].style["background-image"] = "url(./assets/svg/filled_star.svg)";
      if (star == stars[i]) {
        break;
      }
    }
    inputStars.value = numberOfFilledStars;
  });
  star.addEventListener("mouseover", () => {
    for (let i = 0; i < stars.length; i++) {
      stars[i].style["background-image"] = "url(./assets/svg/filled_star.svg)";
      if (star == stars[i]) {
        break;
      }
    }
  });
  star.addEventListener("mouseout", () => {
    for (let i = 0; i < stars.length; i++) {
      stars[i].style.removeProperty("background-image");
    }
    for (let i = 0; i < numberOfFilledStars; i++) {
      stars[i].style["background-image"] = "url(./assets/svg/filled_star.svg)";
    }
  });
});

//burger
const burger = document.querySelector(".burger");
const stick = document.querySelector(".stick");
const menu = document.querySelector(".navigation");
const menuList = document.querySelector(".navigation__list");

menuList.addEventListener("click", () => {
  if (stick.classList.contains("stick-active")) {
    menu.style.display = "none";
    stick.classList.remove("stick-active");
  }
});

burger.addEventListener("click", () => {
  if (stick.classList.contains("stick-active")) {
    stick.classList.remove("stick-active");
    menu.style.display = "none";
  } else {
    stick.classList.add("stick-active");
    menu.style.display = "inline-block";
  }
});

// Window resize event
let index = { value: 1 };

const slider = document.querySelector(".gallery__slider");
const bulletsContainer = document.querySelector(".gallery__bullets");

const twoBulletsHTML = `
  <li class="gallery__bullet gallery__bullet-active"></li>
  <li class="gallery__bullet"></li>
`;

const manyBulletsHTML = `
  <li class="gallery__bullet gallery__bullet-active"></li>
  <li class="gallery__bullet"></li>
  <li class="gallery__bullet"></li>
  <li class="gallery__bullet"></li>
  <li class="gallery__bullet"></li>
  <li class="gallery__bullet"></li>
  <li class="gallery__bullet"></li>
  <li class="gallery__bullet"></li>
`;

let flagLower = false;
let flagUpper = true;

window.addEventListener("resize", () => {
  if (window.screen.availWidth < 625 && !flagLower) {
    slider.innerHTML = onePictureHTML;
    bulletsContainer.innerHTML = manyBulletsHTML;
    index.value = 1;
    setGalleryWithOnePicture();
    flagLower = true;
    flagUpper = false;
  } else if (window.screen.availWidth >= 625 && !flagUpper) {
    slider.innerHTML = manyPicturesHTML;
    bulletsContainer.innerHTML = twoBulletsHTML;
    setGalleryWithManyPictures();
    flagUpper = true;
    flagLower = false;
  }
});

const onePictureHTML = `
  <button class="gallery__left-button"></button>
  <img src="./assets/gallery/gallery_1.png" alt="picture" class="gallery__img">
  <button class="gallery__right-button"></button>
`;

const manyPicturesHTML = `
  <button class="gallery__left-button"></button>
  <ul class="gallery__list-first">
    <li class="gallery__item">
      <img
        src="./assets/gallery/gallery_1.png"
        alt="error"
        class="gallery__img"
      />
    </li>
    <li class="gallery__item">
      <img src="./assets/gallery/gallery_2.png" alt="error" class="gallery__img" />
    </li>
    <li class="gallery__item">
      <img src="./assets/gallery/gallery_3.png" alt="error" class="gallery__img" />
    </li>
    <li class="gallery__item">
      <img src="./assets/gallery/gallery_4.png" alt="" class="gallery__img" />
    </li>
  </ul>
  <ul class="gallery__list-second">
    <li class="gallery__item">
      <img src="./assets/gallery/gallery_5.png" alt="error" class="gallery__img" />
    </li>
    <li class="gallery__item">
      <img src="./assets/gallery/gallery_6.png" alt="error" class="gallery__img" />
    </li>
    <li class="gallery__item">
      <img src="./assets/gallery/gallery_7.png" alt="" class="gallery__img" />
    </li>
    <li class="gallery__item">
      <img src="./assets/gallery/gallery_8.png" alt="" class="gallery__img" />
    </li>
  </ul>
  <button class="gallery__right-button"></button>
`;
if (window.screen.availWidth < 625) {
  slider.innerHTML = onePictureHTML;
  bulletsContainer.innerHTML = manyBulletsHTML;
  setGalleryWithOnePicture();
} else {
  slider.innerHTML = manyPicturesHTML;
  bulletsContainer.innerHTML = twoBulletsHTML;
  setGalleryWithManyPictures();
}

// GALLERY
function setGalleryWithManyPictures() {
  const leftButton = document.querySelector(".gallery__left-button");
  const rightButton = document.querySelector(".gallery__right-button");

  const listFirst = document.querySelector(".gallery__list-first");
  const listSecond = document.querySelector(".gallery__list-second");

  const leftBullet = document.querySelector(
    ".gallery__bullets .gallery__bullet:nth-child(1)"
  );
  const rightBullet = document.querySelector(
    ".gallery__bullets .gallery__bullet:nth-child(2)"
  );

  let isFirst = { value: true };

  listFirst.animate(
    [
      {
        transform: `translateX(0%)`,
      },
    ],
    {
      duration: 1,
      iterations: 1,
      fill: "forwards",
    }
  );

  slider.removeEventListener("click", setButtonsForOnePictureGallery);
  slider.removeEventListener("touchstart", touchStart);
  slider.removeEventListener("touchend", touchEnd);
  slider.addEventListener(
    "click",
    setButtonsForManyPicturesGallery(
      rightBullet,
      leftBullet,
      isFirst,
      listFirst,
      listSecond,
      rightButton,
      leftButton
    )
  );
}

function slide(
  leftClick,
  rightBullet,
  leftBullet,
  isFirst,
  listFirst,
  listSecond
) {
  let list1;
  let list2;
  if (isFirst.value) {
    [list1, list2] = [listFirst, listSecond];
    isFirst.value = false;
    leftBullet.classList.remove("gallery__bullet-active");
    rightBullet.classList.add("gallery__bullet-active");
  } else {
    [list1, list2] = [listSecond, listFirst];
    isFirst.value = true;
    rightBullet.classList.remove("gallery__bullet-active");
    leftBullet.classList.add("gallery__bullet-active");
  }
  if (leftClick) {
    frames(list1, list2);
  } else {
    frames(list1, list2);
  }
}

function setButtonsForManyPicturesGallery(
  leftBullet,
  rightBullet,
  isFirst,
  listFirst,
  listSecond,
  rightButton,
  leftButton
) {
  return (e) => {
    const target = e.target;
    if (target.className == "gallery__left-button") {
      disableButtons(rightButton, leftButton);
      slide(true, leftBullet, rightBullet, isFirst, listFirst, listSecond);
    } else if (target.className == "gallery__right-button") {
      disableButtons(rightButton, leftButton);
      slide(false, leftBullet, rightBullet, isFirst, listFirst, listSecond);
    } else if (target.className == ".gallery__bullet:nth-child(1)") {
      if (!isFirst) {
        disableButtons(rightButton, leftButton);
        slide(true, leftBullet, rightBullet, isFirst, listFirst, listSecond);
      }
    } else if (target.className == ".gallery__bullet:nth-child(2)") {
      if (isFirst) {
        disableButtons(rightButton, leftButton);
        slide(false, leftBullet, rightBullet, isFirst, listFirst, listSecond);
      }
    }
  };
}

function frames(list1, list2) {
  list1.style.opacity = "0";
  list2.style.opacity = "1";
}

function disableButtons(rightButton, leftButton) {
  rightButton.disabled = true;
  leftButton.disabled = true;
  setTimeout(() => {
    rightButton.disabled = false;
    leftButton.disabled = false;
  }, 1000);
}

var startX,
  startY,
  dist,
  threshold = 150, //required min distance traveled to be considered swipe
  allowedTime = 200, // maximum time allowed to travel that distance
  elapsedTime,
  startTime;

function setGalleryWithOnePicture() {
  const image = document.querySelector(".gallery__img");
  slider.removeEventListener("click", setButtonsForManyPicturesGallery);
  slider.addEventListener(
    "click",
    setButtonsForOnePictureGallery(image, index)
  );

  slider.addEventListener("touchstart", touchStart, false);

  slider.addEventListener("touchend", touchEnd);
}

function handleswipe(isrightswipe, isleftswipe) {
  const image = document.querySelector(".gallery__img");
  setBulletsForOnePictureGallery(
    isrightswipe,
    isleftswipe,
    image,
    index,
    bulletsContainer.children
  );
}

function touchStart(e) {
  let touchobj = e.changedTouches[0];
  dist = 0;
  startX = touchobj.pageX;
  startY = touchobj.pageY;
  startTime = new Date().getTime(); // record time when finger first makes contact with surface
  // e.preventDefault();
}

function touchEnd(e) {
  let touchobj = e.changedTouches[0];
  dist = touchobj.pageX - startX; // get total dist traveled by finger while in contact with surface
  elapsedTime = new Date().getTime() - startTime; // get time elapsed
  // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
  let swiperightBol =
    elapsedTime <= allowedTime &&
    dist >= threshold &&
    Math.abs(touchobj.pageY - startY) <= 100;
  let swipeleftBol =
    elapsedTime <= allowedTime &&
    dist < threshold &&
    Math.abs(touchobj.pageY - startY) <= 100;
  handleswipe(swiperightBol, swipeleftBol);
  e.preventDefault();
}

function setBulletsForOnePictureGallery(
  isrightswipe,
  isleftswipe,
  image,
  index,
  bullets
) {
  bullets[index.value - 1].classList.remove("gallery__bullet-active");
  if (isleftswipe) {
    if (index.value == 8) {
      index.value = 1;
    } else {
      index.value += 1;
    }
  } else if (isrightswipe) {
    if (index.value == 1) {
      index.value = 8;
    } else {
      index.value -= 1;
    }
  }
  image.setAttribute("src", `./assets/gallery/gallery_${index.value}.png`);
  bullets[index.value - 1].classList.add("gallery__bullet-active");
}

function setButtonsForOnePictureGallery(image, index) {
  return (e) => {
    const target = e.target;
    if (target.className == "gallery__left-button") {
      if (index.value == 1) {
        index.value = 8;
      } else {
        index.value -= 1;
      }
    } else if (target.className == "gallery__right-button") {
      if (index.value == 8) {
        index.value = 1;
      } else {
        index.value += 1;
      }
    }
    image.setAttribute("src", `./assets/gallery/gallery_${index.value}.png`);
  };
}
