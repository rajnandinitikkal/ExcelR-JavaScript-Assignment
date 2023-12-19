function allowDrop(event){
    event.preventDefault();
    var targetElement = event.target;
    if (targetElement.classList.contains("box")){
        document.querySelectorAll(".box").forEach(function(box){
            box.classList.remove("highlight");
        });
        targetElement.classList.add("highlight");
    }
}
function drag(event){
    event.dataTransfer.setData("text", event.target.id);
}
function drag(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var targetElement = event.target;

    if (targetElement.classList.contains("box")){
        var draggedElement = document.getElementById(data);
        var temp = targetElement.innerText;
        targetElement.innerText = draggedElement.innerText;
        draggedElement.innerText = temp;
    }
    document.querySelectorAll(".box").forEach(function(box){
        box.classList.remove("highlight");
    })
}
var container = document.getElementById("box-container");
container.addEventListener("dragover", allowDrop);
container.addEventListener('drop',drop);