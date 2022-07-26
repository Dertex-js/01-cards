const Slides = document.querySelectorAll(".slide")

for (const slide of Slides) {
    slide.addEventListener("click", () => {
        clearActiveClasses()

        slide.classList.add("active")
    })
}

function clearActiveClasses() {
    Slides.forEach((slide) => {
        slide.classList.remove("active")
    })
}