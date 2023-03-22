console.clear();
const sidebar = document.querySelector(".sidebar");
const span = document.createElement("span");
sidebar.appendChild(span);
sidebar.insertBefore(span, sidebar.children[0]);

sidebar.onclick = function(){
    this.classList.toggle('active');
}
