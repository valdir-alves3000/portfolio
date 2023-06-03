const trigger = document.querySelector(".acordeon .trigger");

trigger.addEventListener("click", (e) => {
  const acordeon = trigger.parentElement;
  const isOpen = acordeon.classList.contains("open");

  if (isOpen) {
    return acordeon.classList.remove("open");
  }

  acordeon.classList.add("open");
});
