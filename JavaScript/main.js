function validate()
{
    var username = document.getElementById("uname");
    var password = document.getElementById("pword");

    if(username.value =="admin" && password.value =="123")
    {
        return true;
    }

    else if(username.value =="admin" && password.value !="123")
    {
        alert("Incorrect Password or Username");
        password.style.border = "1px solid red";
        username.style.border = "1px solid red";
        return false;
    }

    else if(username.value !="admin" && password.value =="123")
    {
        alert("Incorrect Password or Username");
        username.style.border = "1px solid red";
        password.style.border = "1px solid red";
        return false;
    }

    else{
        alert("Please Enter Correct Details");
        username.style.border = "1px solid red";
        password.style.border = "1px solid red";
        return false;
    }
}