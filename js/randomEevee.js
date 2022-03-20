const eevees = ["샤미드",
                "부스터",
                "쥬피썬더",
                "글레이시아",
                "리피아",
                "님피아",
                "블래키",
                "에브이",
            ];

const chosenEevee = document.createElement("img");
document.querySelector(".randomEevee").appendChild = chosenEevee;

function choseEevee() {
    const randomEevee = eevees[Math.floor(Math.random() * eevees.length)];
    chosenEevee.src = `img/${randomEevee}.webp`;
}

const eeveeBtn = document.querySelector("#eeveeBtn");
eeveeBtn.addEventListener("click", choseEevee);
