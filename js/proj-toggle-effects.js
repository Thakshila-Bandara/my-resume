// for accordion effect on resume and project section

const projs = document.querySelectorAll(".projec");

projs.forEach(project => {
    project.addEventListener("click", () => {
     project.classList.toggle("active"); 
      
    })

})