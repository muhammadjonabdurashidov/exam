let form = document.querySelector(".form");
var btn = document.querySelector(".inpelbtn");
let wrapperEl = document.querySelector(".wrappertwo");
var btnEl = document.querySelector(".btn__date");
let btnTurnoff = document.querySelector(".btn__turnoff");
let spanEl = document.querySelector(".spn");
let spanoneEl = document.querySelector(".spnthree");
let spntwoEl = document.querySelector(".spnone");
let spnthreeEl = document.querySelector(".spntwo");
let btndeleteEl = document.querySelector(".btn__delete");
let inponeEl = document.querySelector(".inpel");
let inptwoEl = document.querySelector(".inpeltwo");
let inpimgLink = document.querySelector(".inpelthree");
let inpthreeEl = document.querySelector(".inpelfour");
let inpfourEl = document.querySelector(".inpelfive");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  wrapperEl.style.display = "flex";
  
  spanEl.innerText = inponeEl.value;
  spntwoEl.innerText = inptwoEl.value;
  spnthreeEl.innerText = inpthreeEl.value;
  spanoneEl.innerText = inpfourEl.value;

  inponeEl.value = "";
  inptwoEl.value = "";
  inpthreeEl.value = "";
  inpfourEl.value = "";
  inpimgLink.value = "";

  const imgLink = document.createElement("img");
  imgLink.scr = inpimgLink.value;
  wrapperEl.prepend(imgLink);

  const now = new Date();
  const month = now.getMonth();
  const today = now.getDate();
  const year = now.getFullYear();
  btnEl.innerHTML = month + 1 + '/' + today + '/' + year;
});


btnTurnoff.addEventListener("click", () => {
  spanEl.classList.toggle("spnstyle");
  spanoneEl.classList.toggle("spnstyle");
  spntwoEl.classList.toggle("spnstyle");
  spnthreeEl.classList.toggle("spnstyle");
  
});


btndeleteEl.addEventListener("click", () => {
  const deleteEl = confirm("Buni rostanxam ochirishni hohlaysizmi ?");
  if(deleteEl) {
    wrapperEl.remove();
  }
})
