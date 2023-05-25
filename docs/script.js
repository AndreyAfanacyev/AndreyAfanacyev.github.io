// Получаем все кнопки с классом "section-button"
const buttons = document.querySelectorAll('.section-button');

// Для каждой кнопки добавляем обработчик события "click"
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Получаем значение атрибута "data-section" кнопки
    const sectionId = button.getAttribute('data-section');

    // Получаем соответствующий раздел по его id
    const section = document.getElementById(sectionId);

    // Проверяем, есть ли у раздела класс "active"
    const isActive = section.classList.contains('active');

    // Если раздел уже активен, то скрываем его, иначе отображаем
    if (isActive) {
      section.classList.remove('active');
    } else {
      section.classList.add('active');
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Получаем все кнопки с классом "section-button"
  const buttons = document.querySelectorAll('.section-button');

  // Для каждой кнопки добавляем обработчик события "click"
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Получаем значение атрибута "data-section" кнопки
      const sectionId = button.getAttribute('data-section');

      // Получаем соответствующий раздел по его id
      const section = document.getElementById(sectionId);

      // Проверяем, есть ли у раздела класс "active"
      const isActive = section.classList.contains('active');

      // Если раздел уже активен, то скрываем его, иначе отображаем
      if (isActive) {
        section.classList.remove('active');
      } else {
        section.classList.add('active');
      }
    });
  });
});




