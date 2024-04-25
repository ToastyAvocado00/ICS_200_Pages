document.addEventListener('DOMContentLoaded', function() {
  const destinationsList = document.querySelector('.destination-list');
  const destinations = ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima', 'Nara'];

  destinations.forEach(destination => {
      const listItem = document.createElement('li');
      listItem.textContent = destination;
      destinationsList.appendChild(listItem);
  });
});
