const colors = [
    "#90DCEE",
    "#5BABDE",
    "#9ABDD4",
    "#7FA1F3",
    "#D2D8FC",
    "#E0B6F9",
    "#F9B6E1",
    "#FCD2DB"
];


const len = colors.length;

function randomColor() {
    const firstColor = colors[Math.floor(Math.random() * len)];
    const secondColor = colors[Math.floor(Math.random() * len)];

    const bg = document.querySelector("body");
    bg.style.background = `linear-gradient(to top, ${firstColor}, ${secondColor}) no-repeat`
    bg.classList.add("bodystyle");
}

randomColor();
const button = document.querySelector("#mood");
button.addEventListener("click", randomColor);