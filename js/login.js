document.getElementById('login-submit').addEventListener('click', ()=>{
    const emailId = document.getElementById('user-email');
    const email = emailId.value;
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    emailId.value = '';
    
    if(email == 'sontan@baap.com' && password == "secret"){
        window.location.href = 'banking.html';
    }
    

})