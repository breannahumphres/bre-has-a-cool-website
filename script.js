var radios = document.querySelectorAll("input");
radios.forEach((e) => e.addEventListener("click", respond));

function respond(evt) {
  evt.target.parentElement.parentElement.lastElementChild.innerText = evt.target.dataset.response;
}