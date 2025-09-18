function sendmail (){
    let parms = {
        name : document .getElementById("name").value, 
        email : document.getElementById("email").value, 
        message : document.getElementById("message").value, 
        subject : document.getElementById("subject").value
    }

    emailjs.send("service_67l7qtj","template_48ssmii",parms).then(alert("Email Sent!"))
}