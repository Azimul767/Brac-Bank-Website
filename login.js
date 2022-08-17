document.getElementById('submit-button').addEventListener('click', function(){
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;

    const passwordFild = document.getElementById('user-password');
    const userPassword = passwordFild.value;

    if (userEmail==="admin@admin.com" && userPassword === "pass") {
        window.location.href ='bank.html';
    }

    else {
        alert('The Username Or password you have interd is wrong')
    }
    passwordFild.value='';
})