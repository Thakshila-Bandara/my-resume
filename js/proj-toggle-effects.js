// for accordion effect on resume and project section

const projs = document.querySelectorAll(".projec");
console.log(projs);
projs.forEach(project => {
    project.addEventListener("click", () => {
     project.classList.toggle("active"); 
     console.log(project.classList);  
    })

})