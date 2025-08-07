function scrollRight() {
      const container = document.getElementById("cardContainer");
      container.scrollBy({ left: 320, behavior: "smooth" });
    }

 // Count-up animation
    const counters = document.querySelectorAll('.tool-percent');
    const options = {
      threshold: 0.5
    };

    const animateCount = (el) => {
      const target = +el.getAttribute('data-target');
      let count = 0;
      const step = Math.ceil(target / 40);

      const update = () => {
        count += step;
        if (count >= target) {
          el.textContent = target + '%';
        } else {
          el.textContent = count + '%';
          requestAnimationFrame(update);
        }
      };

      update();
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    counters.forEach(counter => {
      observer.observe(counter);
    });