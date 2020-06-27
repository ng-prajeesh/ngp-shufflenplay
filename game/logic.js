let sortedPositions = [];
let maxBoxes = 9;
var classPrefix = "content"

function resetPositions() {
    sortedPositions = [];
}

function updateRandomPositions() {
    for (let i = 1; i <= maxBoxes; i++) {
        let positionTaken = false;
        do {
            let random = Math.floor(Math.random() * maxBoxes) + 1;
            positionTaken = sortedPositions.indexOf(random) !== -1
            if (!positionTaken) {
                sortedPositions.push(random);
            }
        } while (positionTaken)
    }
}
function updateView() {
    sortedPositions.forEach((item, index) => {
        let el = document.getElementById(index + 1);
        el.classList.forEach(clsName => {
            if (clsName.startsWith(classPrefix)) {
                el.classList.remove(clsName);
            }
        });
        el.classList.add(classPrefix + item);
        el.innerHTML = item;
    });
}
function shuffle() {
    resetPositions();
    updateRandomPositions();
    updateView();
}

function sort() {
    for (let i = 1; i <= maxBoxes; i++) {
        let el = document.getElementById(i)
        el.innerHTML = i;
        el.classList.forEach(clsName => {
            if (clsName.startsWith(classPrefix)) {
                el.classList.remove(clsName);
            }
        });
        el.classList.add(classPrefix + i);
    }
}