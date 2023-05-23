var dropdown = document.getElementById("openMenu");
var menuShow = document.getElementById("navbarMenuHeroC");

dropdown.addEventListener("click", function () {
  menuShow.classList.toggle("is-active");
});

//top of the page
window.addEventListener('scroll', function() {
  // get the button element
  const btn = document.querySelector('.back-to-top-btn');
  
  // if the user has scrolled down more than 300 pixels, show the button
  if (window.scrollY > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

// add a click event listener to the button
document.querySelector('.back-to-top-btn').addEventListener('click', function(e) {
  e.preventDefault(); // prevent default behavior
  window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to the top of the page
});

// copy button 
