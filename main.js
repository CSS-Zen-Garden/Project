console.clear();
const sidebar = document.querySelector(".sidebar");
const span = document.createElement("span");
const footer = document.createElement("footer");
sidebar.appendChild(span);
sidebar.insertBefore(span, sidebar.children[0]);

sidebar.onclick = function(){
    this.classList.toggle('active');
}
