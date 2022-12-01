const api_url = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2";

async function fetchProjects(){
    const response = await fetch(api_url);
    const data= await response.json();
    const sortedProjects = data.sort(function(a, b){
        if (Math.random() > 0.5){
            return -1;
        }
        else{
            return 1;
        }
        });
        
    
    const newstr = sortedProjects.slice(0, 3);
    const divMarginProject = document.getElementsByClassName("margin-project");
    
    
   newstr.forEach(function(project, i){
    divMarginProject[i].querySelector("img").setAttribute("src", newstr[i].image);
    divMarginProject[i].querySelector("h3").innerHTML = newstr[i].name;
    divMarginProject[i].querySelector("p").innerHTML = newstr[i].description;
    
   });

}
fetchProjects();
window.addEventListener("load",async function(){
    /*const post = await fetchProjects();
    console.log(post);*/



});


/*const myButton = document.getElementById("button-project");
myButton.addEventListener("load", function(event){
    fetchProjects();
});*/
