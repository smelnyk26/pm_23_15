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

$(document).ready(function () {
  const tabContainers = $('.tabs-container > div');
  tabContainers.hide().filter(':first').show();

  $('ul.tabs-navigation li a').click(function () {
    tabContainers.hide();
    tabContainers.filter(this.hash).show();
    $('ul.tabs-navigation a').parent('li').removeClass('selected');
    $(this).parent('li').addClass('selected');
    return false;
  }).filter(':first').click();

  const tabContainers2 = $('.tabs-container-2 > div');
  tabContainers2.hide().filter(':first').show();

  $('ul.tabs-navigation-2 li a').click(function () {
    tabContainers2.hide();
    tabContainers2.filter(this.hash).show();
    $('ul.tabs-navigation-2 a').parent('li').removeClass('selected');
    $(this).parent('li').addClass('selected');
    return false;
  }).filter(':first').click();

  const tabContainers3 = $('.tabs-container-3 > div');
  tabContainers3.hide().filter(':first').show();

  $('ul.tabs-navigation-3 li a').click(function () {
    tabContainers3.hide();
    tabContainers3.filter(this.hash).show();
    $('ul.tabs-navigation-3 a').parent('li').removeClass('selected');
    $(this).parent('li').addClass('selected');
    return false;
  }).filter(':first').click();

});

/*для 2 вкладення*/
function activateTab(tab) {
  var tabs = tab.parentNode.getElementsByTagName('p');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }
  tab.classList.add('active');
}

 /*для show more*/
/*function toggleContent(id) {
  var element = document.getElementById(id);
  element.classList.toggle("active");
}

function showMore() {
  var content = document.getElementById("tab-5");
  content.classList.toggle("show-more");
}*/

function changeColor(tab) {
  var tabs = tab.parentNode.getElementsByTagName('div');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }
  tab.classList.add('active');
}