
// step-1: add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function () {
   //   step-2: get the email address inside the email input field
   // always remember to use .value to get text from an input field
   const emailField = document.getElementById('user-email')
   const email = emailField.value;
   // step-3: get password
   // seep-3.1: set a id on html element
   // seep-3.2: get the element
   // seep-3.3: get the value from the element
   const passwordField = document.getElementById('user-password')
   const password = passwordField.value;
   
   // DANGER: DO NOT VERIFY email and password on client side
   // step- 4: verify email and password and check whether valid user or not
   if(email === 'mayen@taka.com' && password === 'iloveuna'){
      window.location.href = 'bank.html'
   }
   else{
      alert('invalid user')
   }
})