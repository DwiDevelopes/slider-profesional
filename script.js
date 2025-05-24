    document.addEventListener('DOMContentLoaded', function() {
      const slides = document.querySelectorAll(".slide");
      const sliderWrapper = document.querySelector(".slider-wrapper");
      const dotsContainer = document.querySelector(".dots");
      const slideNumber = document.querySelector(".slide-number");
      const progressBar = document.querySelector(".progress-bar");
      const slideInfo = document.querySelector(".slide-info");
      let current = 0;
      let interval;
      const slideDuration = 5000; // 5 seconds per slide

      // Create dots dynamically
      slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
      });

      const dots = document.querySelectorAll(".dot");

      // Update slide info (you can customize this with your own data)
      const slideTitles = [
        "Beautiful Landscape",
        "Mountain View",
        "City Skyline",
        "Ocean Waves",
        "Forest Trail",
        "Sunset Beach",
        "Winter Wonderland",
        "Autumn Colors",
        "Spring Blossoms",
        "Summer Vibes",
        "Desert Oasis",
        "Waterfall Majesty",
        "Northern Lights",
        "Wildlife Encounter",
        "Architectural Marvel",
        "Urban Exploration",
        "Cultural Heritage",
        "Historic Landmark",
        "Night Photography",
        "Macro Details",
        "Aerial Perspective",
        "Street Scenes",
        "Food Photography",
        "Portrait Session",
        "Adventure Sports",
        "Travel Destination",
        "Hidden Gem"
      ];

      function updateSlideInfo() {
        slideInfo.querySelector("h3").textContent = slideTitles[current] || "Image Title";
        slideInfo.querySelector("p").textContent = `Slide ${current + 1} of ${slides.length}`;
        slideNumber.textContent = `${current + 1} / ${slides.length}`;
      }

      function goToSlide(index) {
        // Reset progress bar animation
        progressBar.style.width = '0%';
        progressBar.style.transition = 'none';
        void progressBar.offsetWidth; // Trigger reflow
        progressBar.style.transition = `width ${slideDuration/1000}s linear`;

        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        
        current = (index + slides.length) % slides.length;
        slides[current].classList.add("active");
        dots[current].classList.add("active");
        
        updateSlideInfo();
        
        // Start progress bar animation
        progressBar.style.width = '100%';
        
        // Reset the auto-advance interval
        resetInterval();
      }

      function nextSlide() {
        goToSlide(current + 1);
      }

      function prevSlide() {
        goToSlide(current - 1);
      }

      function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, slideDuration);
      }

      // Initialize
      updateSlideInfo();
      progressBar.style.width = '100%';
      resetInterval();

      // Event listeners
      document.querySelector(".next").addEventListener("click", nextSlide);
      document.querySelector(".prev").addEventListener("click", prevSlide);

      // Keyboard navigation
      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
      });

      // Pause on hover
      sliderWrapper.addEventListener("mouseenter", () => {
        clearInterval(interval);
        progressBar.style.animationPlayState = 'paused';
      });

      sliderWrapper.addEventListener("mouseleave", () => {
        resetInterval();
        progressBar.style.animationPlayState = 'running';
      });

      // Touch events for mobile
      let touchStartX = 0;
      let touchEndX = 0;

      sliderWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, {passive: true});

      sliderWrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, {passive: true});

      function handleSwipe() {
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
      }
    });