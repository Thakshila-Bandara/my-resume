function btnTogEdu(event){
    event.preventDefault();
    var eduBtn = document.getElementById("edu-topic");
    console.log(eduBtn.classList);
    eduBtn.style.display = (eduBtn.style.display === "none") ? "block" : "none";
    
}

function btnTogSkill(event){
    event.preventDefault();
    var skillBtn = document.getElementById("skills-topic");
    console.log(skillBtn.classList);
    skillBtn.style.display = (skillBtn.style.display === "none") ? "block" : "none";
    
}