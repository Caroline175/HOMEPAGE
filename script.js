let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".slider img");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// -----------------------------
// Approved submissions listing
// -----------------------------
async function loadApprovedSubmissions() {
  const owner = "byui-csedepartmentportfolios";
  const repo = "HOMEPAGE";
  const branch = "main";
  const path = "approved";

  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;

  try {
    const response = await fetch(url, {
      headers: { "Accept": "application/vnd.github+json" }
    });
    if (!response.ok) return;

    const files = await response.json();
    const list = document.getElementById("approvedList");
    if (!list) return;

    files
      .filter(file => file.type === "file")
      .forEach(file => {
        const li = document.createElement("li");
        cons

