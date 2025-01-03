const canvas = document.createElement('canvas');
canvas.id = 'interactive-bg';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

const particles = [];
const particleCount = 100;

function createParticle(x, y) {
  return {
    x: x || Math.random() * canvas.width,
    y: y || Math.random() * canvas.height,
    radius: Math.random() * 2 + 0.5, // Smaller size
    color: `rgba(200, 200, 200, ${Math.random() * 0.3 + 0.1})`, // Softer color and lower opacity
    velocityX: (Math.random() - 0.5) * 0.5, // Slower movement
    velocityY: (Math.random() - 0.5) * 0.5, // Slower movement
  };
}

function initParticles() {
  particles.length = 0;
  for (let i = 0; i < particleCount; i++) {
    particles.push(createParticle());
  }
}

function updateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.x += particle.velocityX;
    particle.y += particle.velocityY;

    if (particle.x < 0 || particle.x > canvas.width) {
      particle.x = Math.random() * canvas.width;
    }
    if (particle.y < 0 || particle.y > canvas.height) {
      particle.y = Math.random() * canvas.height;
    }

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
  });

  requestAnimationFrame(updateParticles);
}

initParticles();
updateParticles();

const faces = [
    "Software Development",
    "Machine Learning",
    "Problem Solving",
    "Cloud Engineering",
    "Team Collaboration",
    "Research"
];

document.querySelectorAll(".face").forEach((face, index) => {
    face.textContent = faces[index];
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeIns = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
          observer.unobserve(entry.target); // Stop observing once it becomes visible
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  fadeIns.forEach(element => {
    observer.observe(element);
  });
});