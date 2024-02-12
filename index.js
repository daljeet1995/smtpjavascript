const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>First Name: </h1>${fname.value}
    <br>
    <h1>Last Name: </h1>${lname.value}
    `;

    Email.send({
        SecureToken : "41373d94-3577-44ad-adb7-06e09a8d9ee0", //add your token here
        To : 'ds025272@gmail.com', 
        From : "ds025272@gmail.com",
        Subject : "This is the subject",
        Body : ebody
    }).then(
      message => alert(message)
    );
});