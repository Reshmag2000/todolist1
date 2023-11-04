function checkLogin()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username ==="admin" && password === "12345")
    {
        document.getElementById("message").innerHTML = "Login successfully!";
        message.style.color='green';
        window.location.href = "home.html";

    }
    else
    {
        document.getElementById("message").innerHTML = "Login failed.please try again.";
        message.style.color='red';
    }
}



/*const form=document.getElementById('form');
const username=document.getElementById("username");
const password=document.getElementById("password");

form.addEventListener('submit', e => {
    e.preventDefault();

        if(submitForm())
        {
            window.location.href = "welcomepage.html";
        }
});
*/
