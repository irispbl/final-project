
async function fetchProyectos(uuid) {
    const response = await fetch(api_url);
    const data = await response.json();
    const filteredProjects = data.filter(function(project){
      return project.uuid === uuid;
    });console.log(filteredProjects);

    if(filteredProjects.length === 0){
        alert("Page not found");
        return;
        // PAGE 404
    }
    const project = filteredProjects[0];

    const sectionSimplify = document.getElementById("simplify-sec");
        sectionSimplify.querySelector("h2").innerHTML = project.name;
        sectionSimplify.querySelector(".p1").innerHTML = project.description;
        sectionSimplify.querySelector(".p2").innerHTML = project.completed_on;
        sectionSimplify.querySelector("#header").style.backgroundImage = `url(${project.image})`;
        sectionSimplify.querySelector(".header").innerHTML = project.content;


        /*.querySelector("img")
        .setAttribute("src", project.image);*/
     
}
function printedProjects(projects){}


window.addEventListener("load", async()=> {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("uuid");
    console.log(id);

    const project = await fetchProyectos(id);
    await fetchProjects(id); 
});


