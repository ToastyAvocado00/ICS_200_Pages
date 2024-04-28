window.addEventListener('scroll', function() {
  var links = document.querySelector('.fixed-links');
  if (window.scrollY > 100) { 
    links.classList.add('show');
  } else {
    links.classList.remove('show');
  } 
});