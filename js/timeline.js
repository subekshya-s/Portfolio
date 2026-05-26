// ─── Timeline Scroll Animation ────────────────────────────────────
const timelineItems = document.querySelectorAll('.timeline-item');

function showTimeline() {
  const triggerBottom = window.innerHeight * 0.85;
  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showTimeline);
showTimeline(); // run once on load