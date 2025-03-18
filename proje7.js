const boxes = document.querySelectorAll(".box");
const left = document.querySelectorAll(".left");
const right = document.querySelectorAll(".right");

window.addEventListener("scroll", checkbox);

checkbox();

function checkbox() {
    const triggerBottom = (window.innerHeight / 6) * 4;

    boxes.forEach((box) => {
        const boxtop = box.getBoundingClientRect().top;
        if (boxtop > triggerBottom) {
            if (box.classList.contains("left")) {
                box.style.transform = "translateX(-400%)";
            } else if (box.classList.contains("right")) {
                box.style.transform = "translateX(400%)";
            }
        } else {
            box.style.transform = "translateX(0)";
        }
    });
}
