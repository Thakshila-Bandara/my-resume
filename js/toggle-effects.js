function btnTog(event){
    event.preventDefault();
    var eduBtn = document.querySelector(".edu-desc-col2");
    console.log(eduBtn.classList);
    eduBtn.classList.toggle(eduBtn.classList[0]);
    eduBtn.classList.toggle(eduBtn.classList[1]);
    if(eduBtn.style.display == "none"){
        eduBtn.style.display == "block"
    }else if(eduBtn.style.display == "block"){
        eduBtn.style.display == "none"
    }
}