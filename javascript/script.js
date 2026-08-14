document.documentElement.classList.add("js-ready");

const menuButton = document.querySelector(".menub");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

const filterButtons = document.querySelectorAll(".filters button");
const productCards = document.querySelectorAll(".products article");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const selected = button.dataset.filter;
    productCards.forEach((card) => {
      const show = selected === "All" || card.dataset.category === selected;
      card.style.display = show ? "" : "none";
    });
  });
});

const reviews = [
  {
    text: "Excellent products at very reasonable prices. You get imported as well as Indian favourites, and the dry fruits are excellent quality.",
    name: "Zubair Dandekar",
    meta: "Google Local Guide"
  },
  {
    text: "A premium store in Nerul. The service is very good and the collection feels thoughtfully selected.",
    name: "Ganesh Chaudhari",
    meta: "Google Reviewer"
  },
  {
    text: "Loved the experience. Amazing service and a genuinely helpful team — choosing gifts became effortless.",
    name: "Nitika Sharma",
    meta: "Google Reviewer"
  },
  {
    text: "Fresh dry fruits, an excellent variety of dates and a beautiful selection of chocolates. Everything was neatly presented.",
    name: "FLORA Customer",
    meta: "Customer Feedback"
  },
  {
    text: "A wonderful place for festive shopping. The hamper selection looked premium and the team helped us choose within our budget.",
    name: "FLORA Customer",
    meta: "Customer Feedback"
  },
  {
    text: "The imported chocolate range is impressive, and the store is organised so well that discovering something new is easy.",
    name: "FLORA Customer",
    meta: "Customer Feedback"
  },
  {
    text: "Consistently good quality and freshness. It has become our preferred neighbourhood store for dry fruits and gifting.",
    name: "FLORA Customer",
    meta: "Customer Feedback"
  },
  {
    text: "Beautiful products, thoughtful packaging and a warm shopping experience. The gift was appreciated by everyone.",
    name: "FLORA Customer",
    meta: "Customer Feedback"
  },
  {
    text: "A generous variety under one roof, from everyday dry fruits to special chocolates. The service was quick and helpful.",
    name: "FLORA Customer",
    meta: "Customer Feedback"
  },
  {
    text: "Premium quality with plenty of choice. The dates were fresh, the chocolates were well stocked and the presentation felt special.",
    name: "FLORA Customer",
    meta: "Customer Feedback"
  }
];

let currentReview = 0;
const reviewText = document.getElementById("reviewText");
const reviewName = document.getElementById("reviewName");
const reviewMeta = document.getElementById("reviewMeta");
const reviewCount = document.getElementById("reviewCount");

function showReview() {
  const item = reviews[currentReview];
  reviewText.textContent = item.text;
  reviewName.textContent = item.name;
  reviewMeta.textContent = item.meta;
  reviewCount.textContent = `${String(currentReview + 1).padStart(2, "0")} / ${String(reviews.length).padStart(2, "0")}`;
}

document.getElementById("prevReview").addEventListener("click", () => {
  currentReview = (currentReview - 1 + reviews.length) % reviews.length;
  showReview();
});

document.getElementById("nextReview").addEventListener("click", () => {
  currentReview = (currentReview + 1) % reviews.length;
  showReview();
});

document.getElementById("year").textContent = new Date().getFullYear();
showReview();

const revealSections = document.querySelectorAll(
  ".section, .gifting, .reviews, .reveal-section"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealSections.forEach((section) => revealObserver.observe(section));
} else {
  revealSections.forEach((section) => section.classList.add("is-visible"));
}

document.querySelectorAll(".window").forEach((windowPanel) => {
  const toggleWindow = () => {
    const isOpen = windowPanel.classList.toggle("is-open");
    windowPanel.setAttribute("aria-expanded", String(isOpen));
  };

  windowPanel.addEventListener("click", toggleWindow);
  windowPanel.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleWindow();
    }
  });
});

const backToTop = document.getElementById("backToTop");
const updateBackToTop = () => backToTop.classList.toggle("show", window.scrollY > 520);
window.addEventListener("scroll", updateBackToTop, { passive: true });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
updateBackToTop();
