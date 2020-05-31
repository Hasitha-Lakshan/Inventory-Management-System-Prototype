    var username = document.getElementById("uname");
    var password = document.getElementById("pword");
    var login_form = document.getElementById("login_form");


    function validate()
    {
        this.username = username;
        this.password = password;
        this.login_form = login_form;

        if((username.value =="admin" && password.value =="123") || (username.value =="analyzer" && password.value =="123") || (username.value =="cash collector" && password.value =="123") || (username.value =="sales manager" && password.value =="123") || (username.value =="inventory clerk" && password.value =="123"))
        {
            if(username.value =="admin")
            {
                login_form.action = "#admin_dashboard";
            }

            else if(username.value =="analyzer")
            {
                login_form.action = "#analyzer_dashboard";
            }

            else if(username.value =="cash collector")
            {
                login_form.action = "#cash_collector_dashboard";
            }

            else if(username.value =="sales manager")
            {
                login_form.action = "#sales_manager_dashboard";
            }

            else if(username.value =="inventory clerk")
            {
                login_form.action = "#inventory_cleark_dashboard";
            }

            return true;
        }

        else if((username.value =="admin" && password.value !="123") || (username.value =="analyzer" && password.value !="123") || (username.value =="cash collector" && password.value !="123") || (username.value =="sales manager" && password.value !="123") || (username.value =="inventory clerk" && password.value !="123"))
        {
            alert("Incorrect Password or Username");
            password.style.border = "1px solid red";
            username.style.border = "1px solid red";
            return false;
        }

        else if((username.value !="admin" && password.value =="123") || (username.value !="analyzer" && password.value =="123") || (username.value !="cash collector" && password.value =="123") || (username.value !="sales manager" && password.value =="123") || (username.value !="inventory clerk" && password.value =="123"))
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