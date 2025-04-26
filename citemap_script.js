//Elevator Buttons
function floor(floorNumber) {
    // Hide inactive floors
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

// Room Buttons Testing
function chapelButton() {
    alert("This is the campus' Chapel.")
}
function r115Button() {
    alert("This is room no.115.")
}
function r104Button() {
    alert("This is room no.104. It is currently the office of the ACES PUP Binan Organization.")
}
function openButton() {
    alert("An open area behind the campus. It has a basketball/volleyball court. It is also perfect for hosting crowded activities, like concerts.")
}
function canteenButton() {
    alert("This is the campus' canteen. It sells a variety of food and beverages. It also accepts payment via Gcash.")
}
function parkingButton() {
    alert("This open area at the side of the campus is the parking lot.")
}