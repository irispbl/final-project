const boton = document.querySelector(".submit");
boton.addEventListener("click", (e)=>{
    e.preventDefault();
    validateName();
    validateEmail();
});
function validateName() {
    
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else if (x == "ironhack" || x == "IRONHACK" || x== "Ironhack"){
        alert("You cannot be Ironhack, because I am Ironhack.");
        return false;
    }
    return true;

}
function validateEmail(){
    const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const query = document.querySelector("#correo").value;
if(!regEmail.test(query)){
    alert("Email not valid");
}
}
