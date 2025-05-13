// ===== DYNAMIC MENU DATA =====
// Give each row its own unique containerId (matching the IDs you put
// on card‐container1, card‐container2, card‐container3 in your HTML)
const menuItems = [
  {
    containerId: "homeKitchenCards1",
    items: [
      {
        image: "Assests/Pizza1.png",
        title: "Home Made Pizza",
        price: "₹190",
        rating: 4.7,
        time: "50-79 min",
        discount: "50%",
      },
      {
        image: "Assests/Pizza2.png",
        title: "Home Made Pizza",
        price: "₹123",
        rating: 4.7,
        time: "50-79 min",
        discount: null,
      },
      {
        image: "Assests/Pizza3.png",
        title: "Home Made Pizza",
        price: "₹190",
        rating: 4.7,
        time: "50-79 min",
        discount: "20%",
      },
      {
        image: "Assests/Pizza4.png",
        title: "Home Made Pizza",
        price: "₹190",
        rating: 4.7,
        time: "50-79 min",
        discount: null,
      },
    ],
  },
  {
    containerId: "homeKitchenCards2",
    items: [
      {
        image: "Assests/Pizza5.png",
        title: "Home Made Pizza",
        price: "$19",
        rating: 4.7,
        time: "50-79 min",
        discount: "50%",
      },
      {
        image: "Assests/Pizza6.png",
        title: "Home Made Pizza",
        price: "₹190",
        rating: 4.7,
        time: "50-79 min",
        discount: null,
      },
      {
        image: "Assests/Pizza7.png",
        title: "Home Made Pizza",
        price: "₹190",
        rating: 4.7,
        time: "50-79 min",
        discount: "20%",
      },
      {
        image: "Assests/Pizza8.png",
        title: "Home Made Pizza",
        price: "₹190",
        rating: 4.7,
        time: "50-79 min",
        discount: "50%",
      },
      // …add more items for row #2…
    ],
  },
  {
    containerId: "homeKitchenCards3",
    items: [
      {
        image: "Assests/Pizza1.png",
        title: "Home Made Pizza",
        price: "$19",
        rating: 4.7,
        time: "50-79 min",
        discount: "50%",
      },
      {
        image: "Assests/Pizza2.png",
        title: "Home Made Pizza",
        price: "₹190",
        rating: 4.7,
        time: "50-79min",
        discount: null,
      },
      {
        image: "Assests/Pizza3.png",
        title: "Home Made Pizza",
        price: "₹190",
        rating: 4.7,
        time: "50-79 min",
        discount: "20%",
      },
      {
        image: "Assests/Pizza4.png",
        title: "Home Made Pizza",
        price: "₹190",
        rating: 4.7,
        time: "50-79 min",
        discount: null,
      },
      // …add more items for row #3…
    ],
  },
];

// ===== RENDERER FUNCTION =====
function renderMenu() {
  menuItems.forEach((group) => {
    const container = document.getElementById(group.containerId);
    if (!container) return; // skip if no such element
    container.innerHTML = ""; // clear out any old cards
    group.items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        ${
          item.discount
            ? `<div class="discount-badge">${item.discount}</div>`
            : ""
        }
        <img src="${item.image}" alt="${item.title}">
        <div class="card-content">
          <div class="card-header">
            <div class="card-title">${item.title}</div>
            <div class="card-price">${item.price}</div>
          </div>
          <div class="card-footer">
            <div class="rating-time-group">
              <span class="rating">★ ${item.rating}</span>
              <span class="time">${item.time}</span>
            </div>
            <div class="add-btn">
              <img src="Assests/Buuton.png" alt="Add to cart">
            </div>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // 3.1 Populate menu cards
  renderMenu();
});

$(document).ready(function () {
  console.log("✅ Slick init script loaded");

  $(".slider").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0",
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
    ],
  });

  $(".slick-prev").on("click", function () {
    $(".slider").slick("slickPrev");
  });

  $(".slick-next").on("click", function () {
    $(".slider").slick("slickNext");
  });
});

// Show play icon when video is paused

// ---- Play Button Logic ----
const video = document.getElementById("promoVideo");
const playButton = document.getElementById("playButton");
let isPlaying = false;

function updatePlayButton() {
  playButton.classList.toggle("show", !isPlaying);
}

function toggleVideo(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  if (isPlaying) {
    video.pause();
  } else {
    video.play();
  }
}

// Initial state
updatePlayButton();

// Update state and button visibility
video.addEventListener("play", () => {
  isPlaying = true;
  updatePlayButton();
});

video.addEventListener("pause", () => {
  isPlaying = false;
  updatePlayButton();
});

video.addEventListener("ended", () => {
  isPlaying = false;
  updatePlayButton();
});

// Single handler for video clicks
video.addEventListener("click", toggleVideo);

// Single handler for play button clicks
playButton.addEventListener("click", toggleVideo);

// ---- Modal Logic ----
document.addEventListener("DOMContentLoaded", function () {
  const modalOverlay = document.getElementById("modalOverlay");
  const requestDishBtn = document.querySelector(".request-dish-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const submitBtn = document.querySelector(".submit-btn");

  if (requestDishBtn && modalOverlay) {
    requestDishBtn.addEventListener("click", function () {
      modalOverlay.style.display = "flex";
      document.body.classList.add("modal-open");
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", function () {
      modalOverlay.style.display = "none";
      document.body.classList.remove("modal-open");
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", function () {
      modalOverlay.style.display = "none";
      document.body.classList.remove("modal-open");
    });
  }
});
