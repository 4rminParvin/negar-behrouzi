// Update copyright date
let date = new Date();
document.getElementById("year").innerHTML = date.getFullYear();

// Auto-resizable mail textarea
const textarea = document.getElementsByTagName("textarea");
for (let i = 0; i < textarea.length; i++) {
  textarea[i].setAttribute("style", "height:" + (textarea[i].scrollHeight) + "px;overflow-y:hidden;");
  textarea[i].addEventListener("input", OnInput, false);
}

function OnInput() {  
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}