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

// For testonomials
const testimonials = [
  {
    rating: 5,
    text: "Laiba is a true GEM in E-Commerce Management! Her professionalism and insightful data interpretation exceeded all expectations, delivering top-notch quality 🌟. With proactive communication and seamless cooperation, working with her was a pleasure—she's fluent and full of initiative!",
    name: "Leslie Alexander",
    city: "Mexico",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    nameColor: "#2d4a30",
    cityColor: "lightgray"
  },
  {
    rating: 5,
    text: "Outstanding work by Laiba. After over six months of collaboration, it is evident that greatness is achieved together.",
    name: "Albert Flores",
    city: "Saudi Arabia",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    nameColor: "#2d4a30",
    cityColor: "lightgray"
  },
  {
    rating: 5,
    text: "Real professional, always on time, perfect delivery great contributor trustworthy person a pleasure to work with her",
    name: "Jenny Wilson",
    city: "France",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    nameColor: "#2d4a30",
    cityColor: "lightgray"
  },
  {
    rating: 5,
    text: "Laiba is AMAZING to work with! Her strategic business planning is spot on, and her proactive communication and polite approach makes the process seamless. communication is great always attentive to requests and goals. She goes above and beyond—highly recommended!",
    name: "Darlene Robertson",
    city: "United State of Emirates",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    nameColor: "#2d4a30",
    cityColor: "lightgray"
  },
  {
    rating: 5,
    text: "Working with Laiba was a remarkable experience—she truly EXCEEDED all expectations with her professionalism and strategic insights in e-commerce management. Her proactive communication and commitment to going ABOVE AND BEYOND made the collaboration seamless and productive. A trustworthy and attentive professional, I only wish I could afford to hire her full-time. 🙌 ",
    name: "Bessie Cooper",
    city: "United States",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    nameColor: "#2d4a30",
    cityColor: "lightgray"
  },
  {
    rating: 5,
    text: "An exceptional experience from start to finish. Always responsive and delivered on time.",
    name: "breadlly_caleb",
    city: "United State of Emirates",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    nameColor: "#2d4a30",
    cityColor: "lightgray"
  },
  {
    rating: 5,
    text: "Amazon girl delivered great results in a short time. Her communication was great, and she helped us with guidance. She is attentive to detail, and working with she was smooth.",
    name: "Kristin Watson",
    city: "United States",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    nameColor: "#2d4a30",
    cityColor: "lightgray"
  },
  {
    rating: 5,
    text: "This is my 2nd time hiring the Amazon girl and she does exactly what she says. She fixed me up good.",
    name: "Ronald Richards",
    city: "United States",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    nameColor: "#2d4a30",
    cityColor: "lightgray"
  },
  {
    rating: 5,
    text: "Very professional, she understood what I wanted and worked quickly to accomplish it. Communication went very well. Thank you very much. I highly recommend",
    name: "Cody Fisher",
    city: "United Kingdom",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    nameColor: "#2d4a30",
    cityColor: "lightgray"
  },
  {
    rating: 5,
    text: "Laiba really knows her stuff when it comes to Amazon Wholesale. She was easy to work with, super responsive, and delivered solid results without any hand-holding. You can tell she has real experience. Definitely someone I’ll trust for future Amazon work.",
    name: "Savannah Nguyen",
    city: "Australia",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    nameColor: "#2d4a30",
    cityColor: "lightgray"
  }
];

let currentIndex = 0;

function renderTestimonial(index, animationOut = '', animationIn = '') {
  const wrapper = document.getElementById('testimonialWrapper');
  const data = testimonials[index];

  const cardHTML = `
    <div class="testimonial-card ${animationIn} active">
      <div class="stars mb-2">
        ${'<i class="bi bi-star-fill"></i>'.repeat(data.rating)} <strong>${data.rating}.0</strong>
      </div>
      <p style="color: #2d4a30;">${data.text}</p>
      <div class="reviewer">
        <img src="${data.image}" alt="${data.name}">
        <div class="info">
          <strong style="color: ${data.nameColor};">${data.name}</strong>
          <small style="color: ${data.cityColor};">${data.city}</small>
        </div>
      </div>
    </div>
  `;

  if (animationOut) {
    const oldCard = wrapper.querySelector('.testimonial-card');
    if (oldCard) {
      oldCard.classList.add(animationOut);
      oldCard.classList.remove('active');
      setTimeout(() => {
        wrapper.innerHTML = cardHTML;
      }, 400);
    }
  } else {
    wrapper.innerHTML = cardHTML;
  }
}

function nextTestimonial() {
  const nextIndex = (currentIndex + 1) % testimonials.length;
  renderTestimonial(nextIndex, 'tumble-out', 'tumble-in');
  currentIndex = nextIndex;
}

function prevTestimonial() {
  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonial(prevIndex, 'tumble-out', 'tumble-in');
  currentIndex = prevIndex;
}

window.onload = () => renderTestimonial(currentIndex);
