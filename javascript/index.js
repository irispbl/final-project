const api_url ="https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2";

async function fetchProjects(uuid) {
  const response = await fetch(api_url);
  const data = await response.json();

  const sortedProjects = data.sort(function (a, b) {
    if (Math.random() > 0.5) {
      return -1;
    } else {
      return 1;
    }
  });

  console.log("SortedProj" + response);
  const newstr = sortedProjects.slice(0, 3);
  const divMarginProject = document.getElementsByClassName("margin-project");

  newstr.forEach(function (project, i) {
    divMarginProject[i]
      .querySelector("img")
      .setAttribute("src", project.image);
    divMarginProject[i].querySelector("h3").innerHTML = project.name;
    divMarginProject[i].querySelector("p").innerHTML = project.description;
    divMarginProject[i].querySelector("a").setAttribute("href",`./secondpage.html/${project.uuid}`);
  });
  
}


window.addEventListener("load", async function () {
  
  fetchProjects();
});

/*const myButton = document.getElementById("button-project");
myButton.addEventListener("load", function(event){
    fetchProjects();
});*/
