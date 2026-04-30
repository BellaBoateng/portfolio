// Record player spin/audio — only runs on homepage
const record = document.querySelector(".record");
const audio = document.getElementById("vinyl-audio");

if (record && audio) {
  audio.volume = 0.4;

  record.addEventListener("mouseenter", () => {
    audio.currentTime = 0;
    audio.play();
  });

  record.addEventListener("mouseleave", () => {
    audio.pause();
    audio.currentTime = 0;
  });
}

// Community carousel — smooth infinite loop
const communityTrack = document.getElementById("community-track");
const nextCommunity = document.getElementById("next-community");
const prevCommunity = document.getElementById("prev-community");

if (communityTrack && nextCommunity && prevCommunity) {
  const originalItems = Array.from(communityTrack.children);

  // clone images so the carousel can loop smoothly
  originalItems.forEach((item) => {
    const clone = item.cloneNode(true);
    communityTrack.appendChild(clone);
  });

  let communityPosition = 0;
  const slideAmount = 272;
  const totalOriginal = originalItems.length;

  nextCommunity.addEventListener("click", () => {
    communityPosition++;
    communityTrack.style.transition = "transform 0.45s ease";
    communityTrack.style.transform = `translateX(-${communityPosition * slideAmount}px)`;

    if (communityPosition === totalOriginal) {
      setTimeout(() => {
        communityTrack.style.transition = "none";
        communityPosition = 0;
        communityTrack.style.transform = `translateX(0px)`;
      }, 460);
    }
  });

  prevCommunity.addEventListener("click", () => {
    if (communityPosition === 0) {
      communityTrack.style.transition = "none";
      communityPosition = totalOriginal;
      communityTrack.style.transform = `translateX(-${communityPosition * slideAmount}px)`;
    }

    setTimeout(() => {
      communityPosition--;
      communityTrack.style.transition = "transform 0.45s ease";
      communityTrack.style.transform = `translateX(-${communityPosition * slideAmount}px)`;
    }, 20);
  });
}

// Adinkrah selected card
const symbolCards = document.querySelectorAll(".symbol-card");
const symbolTitle = document.getElementById("symbol-title");
const symbolMeaning = document.getElementById("symbol-meaning");

if (symbolCards.length && symbolTitle && symbolMeaning) {
  symbolCards.forEach((card) => {
    card.addEventListener("click", () => {
      symbolCards.forEach((item) => item.classList.remove("active"));
      card.classList.add("active");

      symbolTitle.textContent = card.dataset.name;
      symbolMeaning.textContent = card.dataset.meaning;
    });
  });
}

// PROJECT IMAGES - BOOK-CLUB
const galleryData = {

  /* BOOK-CLUB */
  wireframes: [
    "assets/images/book-club/wireframe/explore-all-books.png",
    "assets/images/book-club/wireframe/explore-genre.png",
    "assets/images/book-club/wireframe/genre-specifc.png"
  ],
  finals: [
    "assets/images/book-club/book5.png",
    "assets/images/book-club/book3.png",
    "assets/images/book-club/book4.png"
  ],

  /* AMOUR SKIN */
  amourBranding: [
    "assets/images/amourskin/set2-1.jpeg",
    "assets/images/amourskin/set2-2.jpeg",
    "assets/images/amourskin/set2-3.jpeg",
    "assets/images/amourskin/set2-4.jpeg",
    "assets/images/amourskin/set2-5.jpeg",
    "assets/images/amourskin/set2-6.jpeg",
    "assets/images/amourskin/set2-7.jpeg",
    "assets/images/amourskin/set2-8.jpeg",
    "assets/images/amourskin/set2-9.jpeg"
  ],

  amourDigital: [
    "assets/images/amourskin/set1-1.png",
    "assets/images/amourskin/set1-2.png",
    "assets/images/amourskin/set1-3.png",
    "assets/images/amourskin/set1-4.png"
  ],

  /* K1NNECT */
  k1nnectResearch: [
    "assets/images/k1nnect/k1nnect2.png",
    "assets/images/k1nnect/k1nnect3.png",
    "assets/images/k1nnect/k1nnect5.png",
    "assets/images/k1nnect/k1nnect6.png",
    "assets/images/k1nnect/k1nnect1.png"
  ],

  k1nnectPrototype: [
    "assets/images/k1nnect/prototype-1.png",
    "assets/images/k1nnect/prototype-2.png",
    "assets/images/k1nnect/prototype-3.png",
    "assets/images/k1nnect/prototype-4.png"
  ],


  /* PROCESSING */
  processingProcess: [
    "assets/images/processing-game/4.png",
    "assets/images/processing-game/8.png",
    "assets/images/processing-game/9.png",
    "assets/images/processing-game/1.png",
    "assets/images/processing-game/2.png",
    "assets/images/processing-game/5.png"

  ],

  processingGameplay: [
    "assets/images/processing-game/gameplay-1.png",
    "assets/images/processing-game/gameplay-2.png",
    "assets/images/processing-game/gameplay-3.png"
  ],

  miniSpotify: [
    "assets/images/mini-spotify/spotify-1.png",
    "assets/images/mini-spotify/spotify-2.png",
    "assets/images/mini-spotify/spotify-3.png"
  ]
};

const folderCards = document.querySelectorAll(".folder-card");
const modal = document.getElementById("gallery-modal");
const modalTitle = document.getElementById("modal-title");
const modalGallery = document.getElementById("modal-gallery");
const modalClose = document.getElementById("modal-close");

if (folderCards.length && modal && modalGallery) {
  folderCards.forEach((card) => {
    card.addEventListener("click", () => {
      const galleryType = card.dataset.gallery;
      const galleryTitles = {
        wireframes: "Wireframes",
        finals: "Final Site Snapshots",
        amourBranding: "Brand Visuals",
        amourDigital: "Digital Experience",
        k1nnectResearch: "Research + Process",
        k1nnectPrototype: "Prototype Screens",
        processingProcess: "Concept + Logic",
        processingGameplay: "Gameplay Screens",
        miniSpotify: "Mini Spotify Gallery"
      };

      modalTitle.textContent = galleryTitles[galleryType] || "Gallery";

      modalGallery.innerHTML = galleryData[galleryType]
        .map((src) => `<img src="${src}" alt="${modalTitle.textContent}">`)
        .join("");

      modal.classList.add("active");
    });
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}

