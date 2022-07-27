function slidesPlugin(activeSlide) {
    const Slides = document.querySelectorAll(".slide")

    Slides[activeSlide].classList.add("active")

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
}

slidesPlugin(0)