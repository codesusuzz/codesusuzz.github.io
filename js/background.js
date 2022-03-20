function paintingImg() {
    const images = [0,1,2,3,4,5,6,7];
    const randomChosen = images[Math.floor(Math.random() * images.length)];
    const bgimg = document.createElement("img");

    bgimg.src = `img/${randomChosen}.jpg`;
    bgimg.classList.add("bgImage");
    document.body.appendChild(bgimg);
    }

// paintingImg();
// setInterval(paintingImg, 3000);
