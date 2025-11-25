let buttons = document.querySelectorAll(".follow-btn");

buttons.forEach(function(btn){
    btn.addEventListener("click", function(){

        if(btn.innerHTML === "Follow"){
            btn.innerHTML = "Following";
            btn.classList.add("following");
        } else {
            btn.innerHTML = "Follow";
            btn.classList.remove("following");
        }

    });
});
