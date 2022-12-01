



const params = new URLSearchParams(window.location.search);
  const id = params.get("uuid");
  console.log(id);
  fetchProjects();