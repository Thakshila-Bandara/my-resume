function btnTog(event){
    event.preventDefault();
    var eduBtn = document.querySelector(".edu-topic");
    console.log(eduBtn.classList);
    eduBtn.classList.toggle(eduBtn.classList[1]);
    eduBtn.classList.toggle(eduBtn.classList[2]);
}