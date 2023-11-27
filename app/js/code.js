document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll('.btn-toggle');
  const pageContents = {
      'btn1': document.getElementById('page-content'),
      'btn2': document.getElementById('page-content2')
  };
  let selectedButton = null;

  btns.forEach(btn => {
      btn.addEventListener('click', function () {
          // Перевірка, чи кнопка вже активна
          const isActive = btn.classList.contains('active1');

          // Приховування контенту попередньої кнопки
          if (selectedButton !== null && !isActive) {
              const previousContent = pageContents[selectedButton.id];
              if (previousContent) {
                  previousContent.style.display = "none";
              }
          }

          // Видалення класу active1 з усіх кнопок
          btns.forEach(otherBtn => {
              otherBtn.classList.remove('active1');
          });

          // Відображення відповідного контенту
          const targetContent = pageContents[btn.id];
          if (targetContent) {
              targetContent.style.display = "block";
          }

          // Додавання/видалення класу active1 на поточній кнопці
          btn.classList.toggle('active1');

          // Оновлення вибраної кнопки
          selectedButton = btn;
      });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll('.btn-toggle-2');
  const pageContents = {
    'btn2_1': document.getElementById('page-content3'),
    'btn2_2': document.getElementById('page-content4'),
    // Додайте інші посилання на ваш контент тут
  };
  let selectedButton = null;

  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      // Перевірка, чи кнопка вже активна
      const isActive = btn.classList.contains('active');

      // Приховування контенту попередньої кнопки
      if (selectedButton !== null && !isActive) {
        const previousContent = pageContents[selectedButton.id];
        if (previousContent) {
          previousContent.style.display = "none";
        }
      }

      // Видалення класу active1 з усіх кнопок
      btns.forEach(otherBtn => {
        otherBtn.classList.remove('active');
      });

      // Відображення відповідного контенту
      const targetContent = pageContents[btn.id];
      if (targetContent) {
        targetContent.style.display = "block";
      }

      // Додавання/видалення класу active1 на поточній кнопці
      btn.classList.toggle('active');

      // Оновлення вибраної кнопки
      selectedButton = btn;
    });
  });
});

$(document).ready(function(){
 
  var tabContainers = $('.tabs-container > div');
  tabContainers.hide().filter(':first').show();

  $('ul.tabs-navigation li a').click(function(){
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('ul.tabs-navigation a').parent('li').removeClass('selected');
      $(this).parent('li').addClass('selected');
      return false;
      }).filter(':first').click();
   
  });