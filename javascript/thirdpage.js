function validateForm() {
    /*let correo = document.forms["myForm"]["fmail"].value;*/
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
