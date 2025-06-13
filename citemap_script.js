//Elevator Buttons
function floor(floorNumber) {
    // Hide inactive floors
    const maps = document.querySelectorAll('.map');
    maps.forEach(map => map.classList.remove('active'));

    // Remove highlight from unselected button
    const buttons = document.querySelectorAll('.floorbutton');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show selected map
    const selectedMap = document.querySelector(`.map${floorNumber}`);
    selectedMap.classList.add('active');
    const selectedImg = selectedMap.querySelector('img');

    // Highlight only if not already highlighted
    if (!selectedImg.classList.contains('highlighted')) {
        $(selectedImg).maphilight();
        selectedImg.classList.add('highlighted');
    }

    // Highlight selected button
    document.querySelector(`#floor${floorNumber}id`).classList.add('active');
}

// Makes Floor 1 selected by default
window.onload = () => {
    floor(1);
    document.querySelectorAll('area').forEach(area => {
        area.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });
};

// Room Modal
const roomModal = document.getElementById("roomModal");
const modalDisplay = document.getElementById("modal-display");

// Close Room Modal
function closeModal() {
    document.getElementById("roomModal").classList.remove("active");
}

// Floor 1
function prayroomButton(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r113Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r114Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r115Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r101Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r103Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r105Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r106Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r107Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function balcony1Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r116Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r117Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r121Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r123Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r119Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r120Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r102Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r104Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function cr1Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function openButton(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function canteenButton(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function parkingButton(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}

// Floor 2
function r221Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r201Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r203Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r205Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r207Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r209Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r211Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r202Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r204Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r206Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r218Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r222Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r208Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r210Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r212Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function cr2Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function balcony2Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}

// Floor 3
function r301Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r303Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r305Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r307Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r309Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function libraryButton(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r302Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r304Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r306Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r315Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r317Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r308Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r310Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r312Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function cr3Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function balcony3Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}

// Floor 4
function r401Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r403Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r405Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function loungeButton(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r402Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r418Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r404Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r406Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function cr4Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function balcony4Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function balcony5Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function balcony6Button(target) {
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}