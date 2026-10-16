document.addEventListener('DOMContentLoaded', () => {
  // 1. Ensure videos play smoothly without audio
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.muted = true;
    video.play().catch(error => {
      console.log("Autoplay caught:", error);
    });
  });

  // 2. Smooth Scroll for Header Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // 3. Subtle Scroll-Triggered Fade-In Effect
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const cards = document.querySelectorAll('.glass-card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});