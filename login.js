document.getElementById('submit-button').addEventListener('click', function(){
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;

    const passwordFild = document.getElementById('user-password');
    const userPassword = passwordFild.value;

    if (userEmail==="Azim91221@gmail.com" && userPassword === "Azim91221") {
        window.location.href ='bank.html';
    }

    else {
        alert('The Username Or password you have interd is wrong')
    }
    passwordFild.value='';
})