document.addEventListener('DOMContentLoaded', function() {
  const devObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('dev-animate');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.dev-skill-card').forEach(card => {
    devObserver.observe(card);
    
    const skillLevel = card.getAttribute('data-skill');
    const skillBar = card.querySelector('.dev-skill-level');
    if (skillBar) {
      skillBar.style.width = `${skillLevel}%`;
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const certObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('dev-cert-animate');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.dev-cert-card').forEach(card => {
    certObserver.observe(card);
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('dev-contact-form');
  const inputs = form.querySelectorAll('input, textarea');

  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
    });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Add loading state
    const button = form.querySelector('.dev-submit-btn');
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    button.disabled = true;

    // Simulate form submission (replace with actual form submission)
    setTimeout(() => {
      button.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
      button.style.background = 'var(--contact-success)';
      
      setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
        button.disabled = false;
        form.reset();
      }, 2000);
    }, 1500);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for browsers that don't support scroll-behavior
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navbarHeight =
          document.querySelector(".navbar").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Add animation when sections come into view
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("section-animate");
  });

  // Intersection Observer for section animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "-50px",
  };

  const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    observerOptions
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // Active link highlighting
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });
});