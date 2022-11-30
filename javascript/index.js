const api_url = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2";

async function fetchProjects(){
    const response = await fetch(api_url);
    const data= await response.json();
    const sortedProjects = data.sort(function(a, b){
        if (a.uuid > b.uuid){
            return -1;
        }
        if (a.uiid < b.uuid){
            return 1;
        }
        return 0;
    });
    const newstr = sortedProjects.slice(0, 3);
    console.log(newstr);
    console.log("hola");
}

/* const myButton = document.getElementById("button-project");
myButton.addEventListener("click", function(event){
    fetchProjects();
});
*/