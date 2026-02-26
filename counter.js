document.addEventListener("DOMContentLoaded", function(){
    let count = 0;
    const countEl = document.getElementById("count");
    const countMsg = document.getElementById("message");
    const countPlus = document.getElementById("btnPlus");
    const countMinus = document.getElementById("btnMinus");
    const countReset = document.getElementById("btnReset");
    const countSave = document.getElementById("btnSave");
    const countLoad = document.getElementById("btnLoad");

    countPlus.addEventListener("click", increaseCount);
    countMinus.addEventListener("click", decreaseCount);
    countReset.addEventListener("click", resetCount);
    countSave.addEventListener("click", saveCount);
    countLoad.addEventListener("click", loadCount);

    function updateCount(){
        document.getElementById("count").innerHTML = count;
    }

    function showMessage(text){
        countMsg.innerHTML = text;
        setTimeout(function(){{
            countMsg.innerHTML = "";
        }},3000);
    }

    // Function to increase the counter
    function increaseCount() {
    count++;
    updateCount();
    }

    // Function to decrease the counter
    function decreaseCount() {
    count--;
    updateCount();
    }

    // Function to reset the counter
    function resetCount() {
    count = 0;
    updateCount();
    }

    function saveCount(){
        localStorage.setItem("count", count);
        showMessage("Saved!");
    }

    function loadCount(){
       let saved = localStorage.getItem("count");
       if(saved !==null){
        count = Number(saved);
        showMessage("Loaded");
       }
       updateCount()

    }

});


