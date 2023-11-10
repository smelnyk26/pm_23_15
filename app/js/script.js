function showDashboardContent() {
  var dashboardContent = document.getElementById("dashboardContent");
  dashboardContent.classList.toggle("hidden");
}

const logoutIcon = document.querySelector('logout-icon');

logoutIcon.addEventListener('mouseover', function() {
  const svg = logoutIcon.querySelector('svg');
  svg.style.fill = '#f00'; // Колір при наведенні миші
});

logoutIcon.addEventListener('mouseout', function() {
  const svg = logoutIcon.querySelector('svg');
  svg.style.fill = '#888'; // Колір за замовчуванням
});

logoutIcon.addEventListener('click', function() {
  document.body.style.backgroundColor = '#fff';
  console.log('logout!');
});



function openTab(tabName) {
  var i, tabContent;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

