// select the input (assumes <input id="favchap">), the first button, and the first ul
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function () {
   console.log("Button was clicked!");
   if (input && input.value.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = input.value;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.addEventListener("click", function () {
         li.remove();
         input.focus()
      });

      li.append(deleteButton);
      if (list) list.append(li);
      input.value = "";
   } else {
      alert("Please enter a chapter name!");
   }
});