function checkAddress() {
    event.preventDefault();
   var value =  email_field.value ;
   if (!value.length || value === "") {
    alert("enter your email")
   }else{
    output.innerHTML = value
   }
}

