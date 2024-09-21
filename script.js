const dialContainer = document.getElementById('dial-container');
const numPathsInput = document.getElementById('numPaths');
const generateArrowsButton = document.getElementById('generateArrows');
const choosePathButton = document.getElementById('choosePath');

let arrows = [];

function createArrow(angle) {
    const arrow = document.createElement('div');
    arrow.className = 'arrow';
    arrow.style.transform = `rotate(${angle}deg)`;
    arrow.angle = angle;  // Store the initial angle
    dialContainer.appendChild(arrow);

    // Make the arrow draggable/adjustable
    arrow.addEventListener('click', () => {
        arrow.angle = (arrow.angle + 45) % 360;  // Rotate by 45 degrees
        arrow.style.transform = `rotate(${arrow.angle}deg)`;
    });
    
    return arrow;
}

function generateArrows() {
    dialContainer.innerHTML = '';  // Clear existing arrows
    arrows = [];  // Clear existing arrow array

    const numPaths = parseInt(numPathsInput.value);
    if (isNaN(numPaths) || numPaths < 2) return;

    const angleStep = 360 / numPaths;

    for (let i = 0; i < numPaths; i++) {
        const angle = i * angleStep;
        const arrow = createArrow(angle);
        arrows.push(arrow);
    }
}

function choosePath() {
    if (arrows.length === 0) return;
    const chosenArrow = arrows[Math.floor(Math.random() * arrows.length)];
    alert(`Chosen path is at angle: ${chosenArrow.angle}°`);
}

generateArrowsButton.addEventListener('click', generateArrows);
choosePathButton.addEventListener('click', choosePath);
