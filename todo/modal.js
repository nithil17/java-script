const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

function openModal(){
    modal.classList.add("show");
}

function closeModal(){
    modal.classList.remove("show");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function(event2){
    if(event2.target===modal)
        closeModal();
});

document.addEventListener("keydown", function(event3){
    if(event3.key ==="Escape"){
        closeModal();
    }
});

