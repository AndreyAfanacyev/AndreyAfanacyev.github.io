const buttons = document.querySelectorAll('.section-button');
const sections = document.querySelectorAll('.section');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const sectionId = button.dataset.section;
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.classList.add('show');
      } else {
        section.classList.remove('show');
      }
    });
  });
});