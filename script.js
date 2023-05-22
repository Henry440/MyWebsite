document.addEventListener('DOMContentLoaded', function() {
  var scrollButton = document.querySelector('.scroll-top');
  var ueberMichSection = document.querySelector('#ueber-mich');

  // Überprüfen, ob sich die Seite bereits unterhalb der Über Mich-Sektion befindet
  // und den Button entsprechend anzeigen oder ausblenden
  function toggleScrollButton() {
    if (window.pageYOffset > ueberMichSection.offsetTop) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  }

  // Beim Klick auf den Button scrollen
  scrollButton.addEventListener('click', function(e) {
    e.preventDefault();
    var targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Beim Scrollen die Anzeige des Buttons aktualisieren
  window.addEventListener('scroll', function() {
    toggleScrollButton();
  });

  // Initial die Anzeige des Buttons überprüfen
  toggleScrollButton();
});
