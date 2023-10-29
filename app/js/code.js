function showDashboardContent() {
    var contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '<div class="panel_2"> <img src="img/photo_user.png" alt="Фото користувача" class="profile-picture_2"> <div class="info"> <span class="user-name_2">HOANG NGUYEN</span> <span class="user-category">Student</span> <span class="user">8,782 exp</span> </div> </div>';
}

document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо всі елементи меню
    var menuItems = document.querySelectorAll(".menu ul li a");
    
    // Цей об'єкт відображає, який пункт меню є активним за замовчуванням
    var defaultActiveMenuItem = "KNOWLEDGE";
    
    // Шукаємо пункт меню зі значенням "KNOWLEDGE" та робимо його активним
    menuItems.forEach(function(item) {
        if (item.textContent === defaultActiveMenuItem) {
            item.classList.add("active");
        }
    });
});

var menuItems = document.querySelectorAll('.menu ul li a');
var slider = document.querySelector('.menu .slider');

menuItems.forEach(function(item) {
  item.addEventListener('mouseover', function() {
    var rect = item.getBoundingClientRect();
    slider.style.width = rect.width + 'px';
    slider.style.left = rect.left + 'px';
  });
  
  item.addEventListener('mouseout', function() {
    slider.style.width = '0';
  });
});
