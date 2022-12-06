const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const fronEl = document.querySelector(".bar-front");
const stepsEl = document.querySelectorAll(".step");

let num = 0;
nextEl.addEventListener("click", () => {
  num++;
  if (num >= stepsEl.length) {
    num = stepsEl.length - 1;
  }
  updateSteps();
});

function updateSteps() {
  fronEl.style.width = `${num * 25}%`;
  stepsEl[num].classList.add("checked");
  stepsEl[num].innerHTML = `<i class="fas fa-check"></i><small>${
    [num] < 1 ? `start` : `step${num}`
  }</small>`;
  if (num == 4)
    stepsEl[num].innerHTML = `<i class="fas fa-check"></i><small>final</small>`;
}
prevEl.addEventListener("click", () => {
  num--;
  if (num < 0) {
    num = 0;
  }
  lessUpdate();
});

function lessUpdate() {
  stepsEl[num + 1].classList.remove("checked");
  stepsEl[num + 1].innerHTML = `<i class="fas fa-times"></i>`;
  fronEl.style.width = `${num * 25}%`;
}
