function validateForm() {
    event.preventDefault()
   var name =  document.getElementById('name').value;
   if (name == "") {
       document.getElementById('status').innerHTML = "Ingresa tu nombre.";
       return false;
   }
   var subject =  document.getElementById('subject').value;
   if (subject == "") {
       document.getElementById('status').innerHTML = "Ingresa un asunto.";
       return false;
   }

   var number =  document.getElementById('number').value;
   if (number == "") {
       document.getElementById('status').innerHTML = "Ingresa tu numero celular";
       return false;
   }
   var message =  document.getElementById('message').value;
   if (message == "") {
       document.getElementById('status').innerHTML = "Informanos sobre tu consulta";
       return false;
   }
   
   document.getElementById('status').innerHTML = "";

   document.getElementById('btn-send').setAttribute('href', `mailto:juanygr@hotmail.com?subject=${subject}&body=Hola soy ${name}! %0D%0AMi consulta: "${message}" %0D%0ANumero de telefono: ${number}`);

   document.getElementById('btn-send').click();
   

   };

