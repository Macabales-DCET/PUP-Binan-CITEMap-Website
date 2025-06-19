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
    $('map').imageMapResize();

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
const modalImage = document.getElementById("modal-image");

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

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r113Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r114Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r115Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r101Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r103Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r105Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r106Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r107Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function balcony1Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r116Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r117Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r121Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r123Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r119Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r120Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r102Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r104Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function cr1Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function openButton(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function canteenButton(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function parkingButton(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}

// Floor 2
function r221Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r201Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r203Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r205Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r207Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r209Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r211Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r202Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r204Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r206Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r218Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r222Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r208Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r210Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r212Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function cr2Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function balcony2Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}

// Floor 3
function r301Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r303Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r305Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r307Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r309Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function libraryButton(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r302Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r304Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r306Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r315Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r317Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r308Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r310Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r312Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function cr3Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function balcony3Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}

// Floor 4
function r401Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r403Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r405Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function loungeButton(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r402Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r418Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r404Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function r406Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function cr4Button(target) {
    document.getElementById("roomModal").classList.add("active");
    
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function balcony4Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function balcony5Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}
function balcony6Button(target) {
    document.getElementById("roomModal").classList.add("active");

    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;

    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;

    const modalimage = target.getAttribute("data-image");
    document.getElementById("modal-image").innerHTML = modalimage;
}