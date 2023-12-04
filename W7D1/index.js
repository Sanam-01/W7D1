const input = document.querySelector("#taskInput");
input.addEventListener(submit, function () {
  const list = document.createElement("li");
  list.textContent = input.value;
});
