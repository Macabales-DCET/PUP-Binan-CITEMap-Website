//Elevator Buttons
function floor(floorNumber) {
    // Hide inactive maps
    const maps = document.querySelectorAll('.map');
    maps.forEach(map => map.classList.remove('active'));

    // Remove highlight from unselected button
    const buttons = document.querySelectorAll('.floorbutton');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show the map and highlight selected button
    document.querySelector(`.map${floorNumber}`).classList.add('active');
    document.querySelector(`#floor${floorNumber}id`).classList.add('active');
}

// Makes Floor 1 selected by default
window.onload = () => {
    floor(1);
  };