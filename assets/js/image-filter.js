  const filterButtons = document.querySelectorAll('.filter-btn');
  const caseStudyItems = document.querySelectorAll('.case-study-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;

      caseStudyItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    const defaultBtn = document.querySelector('.filter-btn[data-filter="web"]');
    if (defaultBtn) {
      defaultBtn.click();
    }
  });
