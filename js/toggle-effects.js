function btnTogEdu(event){
    event.preventDefault();
    var eduBtn = document.getElementById("edu-topic");
    var toggleIcon = document.getElementById("toggle-icon");
    console.log(eduBtn.classList);
    eduBtn.style.display = (eduBtn.style.display === "none") ? "block" : "none";
    toggleIcon.innerHTML = (eduBtn.style.display === "none") ? '<i class="fas fa-plus"></i>' : '<i class="fas fa-minus"></i>';
    
}

function btnTogSkill(event){
    event.preventDefault();
    var skillBtn = document.getElementById("skills-topic");
    console.log(skillBtn.classList);
    skillBtn.style.display = (skillBtn.style.display === "none") ? "block" : "none";
    
}