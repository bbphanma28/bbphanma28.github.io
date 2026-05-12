/* 
 Name: Breanna Phanmaha
 File: HW4.js
 Date Created: 4-28-2026
 Date Updated: 5-4-2026
 Purpose: Validates/checks important fields for HW4
*/

//Date
 document.getElementById("today").innerHTML = new Date().toLocaleDateString();    

//assigning a value to variable error_flag
var error_flag = 0;

//Checking First Name
function checkfirstname()
{
 x = document.getElementById("fname").value.trim();
 fnamePattern = /^[a-zA-Z'-]+$/;
    
  if (x == "")
  {
    document.getElementById("fname-error").innerHTML = "Please enter first name";
    error_flag = 1;
  }
  else if (!x.match(fnamePattern))
  {
    document.getElementById("fname-error").innerHTML = "Letters, apostrophes and dashes only";
    error_flag = 1;
  }
  else if (x.length > 30)
  {
    document.getElementById("fname-error").innerHTML = "First name is too long";
    error_flag = 1;
  }
  else if (x.length < 2)
  {
    document.getElementById("fname-error").innerHTML = "First name is too short";
    error_flag = 1;
  }
  else
  {
    document.getElementById("fname-error").innerHTML = "";
  }
 }

//Checking Last name
function checklastname()
 {
  x = document.getElementById("lname").value.trim();
  lnamePattern = /^[a-zA-Z'2-5- ]+$/;
    
   if (x == "")
   {
    document.getElementById("lname-error").innerHTML = "Please enter last name";
    error_flag = 1;
   }
   else if (!x.match(lnamePattern))
   {
    document.getElementById("lname-error").innerHTML = "Letters, apostrophes, numbers 2 to 5, ie, the 3rd, and dashes only";
    error_flag = 1;
   }
   else if (x.length > 30)
   {
    document.getElementById("lname-error").innerHTML = "Last name is too long";
    error_flag = 1;
   }
   else if (x.length < 2)
   {
    document.getElementById("lname-error").innerHTML = "Last name is too short";
    error_flag = 1;
   }
   else
   {
    document.getElementById("lname-error").innerHTML = ""
   }
 }

//Check Middle Initial 
function checkmiddle()
{
 x = document.getElementById("middleinit").value;
 mnamePattern = /^[a-zA-Z]$/;

  if (x == "")
  {
   document.getElementById("middle-error").innerHTML = "";
   return true;
  }
 
  if (!x.match(mnamePattern))
  {
   document.getElementById("middle-error").innerHTML = "Middle initial can only be letters";
   error_flag = 1;
  }
  else 
  {
   document.getElementById("middle-error").innerHTML = "";
  }
}

// Check Date of Birth
function checkdob()
{
 x = document.getElementById("birthday");
 currentYear = new Date(x.value);
 maxYear = new Date().setFullYear(new Date().getFullYear() - 120);

  if (currentYear > new Date())
  {
   document.getElementById("dob-error").innerHTML = "Date of Birth cannot be more than 120 years in the future";
   error_flag = 1;
  }
  else if (currentYear < new Date(maxYear))
  {
   document.getElementById("dob-error").innerHTML = "Date of Birth cannot be more than 120 years in the past";
   error_flag = 1;
  }
  else
  {
   document.getElementById("dob-error").innerHTML = "";
  }
}

//Checking SSN
function checkssn()
{
 x = document.getElementById("SSN");
 ssnPattern = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
 ssnEdit = x.value.replace(/\D/g, "");

  if (ssnEdit == "")
  {
   document.getElementById("ssn-error").innerHTML = "Please enter your SSN";
   error_flag = 1;
  }
  else if (!ssnEdit.match(ssnPattern))
  {
   document.getElementById("ssn-error").innerHTML = "Invalid SSN";
   error_flag = 1;
  }
  else
  {
   document.getElementById("ssn-error").innerHTML = "";
  }
  //formatting ssn
  formattedSSN = ssnEdit.slice(0, 3) + "-" + ssnEdit.slice(3, 5) + "-" + ssnEdit.slice(5);
  x.value = formattedSSN;
}

//Check Email
function checkemail()
{
 x = document.getElementById("email").value;
 emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (x == "")
  {
    document.getElementById("email-error").innerHTML = "Please enter an email";
    error_flag = 1;
  }
  else if (!x.match(emailPattern))
  {
    document.getElementById("email-error").innerHTML = "Email is invalid";
    error_flag = 1;
  }
  else
  {
    document.getElementById("email-error").innerHTML = "";
  }
}

//Check City
function checkcity()
{
 x = document.getElementById("city").value.trim();
 cityPattern = /^[a-zA-Z ]+$/;

  if (x == "")
  {
    document.getElementById("city-error").innerHTML = "Please enter a City";
    error_flag = 1;
  }
  else if (!x.match(cityPattern))
  {
   document.getElementById("city-error").innerHTML = "Letters allowed only";
   error_flag = 1;
  }
  else if (x.length < 2)
  {
   document.getElementById("city-error").innerHTML = "City name is too short";
   error_flag = 1;
  }
  else if (x.length > 30)
  {
   document.getElementById("city-error").innerHTML = "City name is too long";
   error_flag = 1;
  }
  else
  {
   document.getElementById("city-error").innerHTML = ""
  }
}

//Check State
function checkstate()
{
 x = document.getElementById("state").value;

 if (x == "")
 {
  document.getElementById("state-error").innerHTML = "Please choose a state";
  error_flag = 1;
 }
 else 
 {
  document.getElementById("state-error").innerHTML = ""
 }
}

//Check Zip Code
function checkzip()
{
  x = document.getElementById("zip");
  zipEdit = x.value.replace(/\D/g, "");

  if (!zipEdit) 
  {
   document.getElementById("zip-error").innerHTML = "Please enter zip code with only numbers";
   error_flag = 1;
  }
  else if (zipEdit.length != 5 && zipEdit.length != 9)
  {
   document.getElementById("zip-error").innerHTML = "Zip code needs to be exactly 5 or 9 numbers";
   error_flag = 1;
  }
  else
  {
   document.getElementById("zip-error").innerHTML = "";
  }

 //formatting zip with a dash after 5 digits
  if (zipEdit.length > 5) 
  {
   zipEdit = zipEdit.slice(0, 5) + "-" + zipEdit.slice(5, 9);
  }
  else 
  {
   zipEdit = zipEdit.slice(0, 5);
  }
   x.value = zipEdit;

}

//Check Address 1
function checkaddress1()
{
 x = document.getElementById("address1").value.trim();
 addressPattern = /^[a-zA-Z0-9 ]+$/;

  if (x == "")
  {
   document.getElementById("address1-error").innerHTML = "Please enter an address";
   error_flag = 1;
  }
  else if (!x.match(addressPattern))
  {
   document.getElementById("address1-error").innerHTML = "Only letters and numbers allowed";
   error_flag = 1;
  }
  else if (x.length < 2)
  {
   document.getElementById("address1-error").innerHTML = "Address is too short";
   error_flag = 1;
  }
  else if (x.length > 30)
  {
   document.getElementById("address1-error").innerHTML = "Address is too long";
   error_flag = 1;
  }
  else 
  {
   document.getElementById("address1-error").innerHTML = "";
  }
}

//Check Address 2
function checkaddress2()
{
 x = document.getElementById("address2").value.trim();
 addressPattern = /^[a-zA-Z0-9 ]+$/;

  if (x == "")
  {
   document.getElementById("address2-error").innerHTML = "";
   return true;
  }
  
  if (!x.match(addressPattern))
  {
   document.getElementById("address2-error").innerHTML = "Only letters and numbers allowed";
   error_flag = 1;
  }
  else if (x.length < 2)
  {
   document.getElementById("address2-error").innerHTML = "Address is too short";
   error_flag = 1;
  }
  else if (x.length > 30)
  {
   document.getElementById("address2-error").innerHTML = "Address is too long";
   error_flag = 1;
  }
  else 
  {
   document.getElementById("address2-error").innerHTML = "";
  }
}

//Display Value for slider
 var slider = document.getElementById("healthslider");
 var output = document.getElementById("scale");
 output.innerHTML = slider.value;
 slider.oninput = function() {
   output.innerHTML = this.value; }

//Check Username
function checkusername()
{
 x = document.getElementById("username").value.toLowerCase();
 userPattern = /^[a-zA-Z0-9_-]+$/;

  if (x == "")
  {
   document.getElementById("username-error").innerHTML = "Please enter a username";
   error_flag = 1;
  }
  else if (!isNaN(x.charAt(0)))
  {
   document.getElementById("username-error").innerHTML = "Username cannot be started with a number";
   error_flag = 1;
  }
  else if (!x.match(userPattern))
  {
   document.getElementById("username-error").innerHTML = "Username can only have letters, numbers, underscores, and dashes";
   error_flag = 1;
  }
  else if (x.length < 5)
  {
   document.getElementById("username-error").innerHTML = "Username is too short";
   error_flag = 1;
  }
  else if (x.length > 30)
  {
   document.getElementById("username-error").innerHTML = "Username is too long";
   error_flag = 1;
  }
  else
  {
   document.getElementById("username-error").innerHTML = "";
  }
}

//Check Password 
function checkpassword()
{
 x = document.getElementById("pass").value;
 y = document.getElementById("username").value;

  if (x == "")
  {
   document.getElementById("pass-message1").innerHTML = "Please enter a password";
   error_flag = 1;
  }
   else 
   {
    document.getElementById("pass-message1").innerHTML = "";
   }
 
  if (x.length < 8)
  {
   document.getElementById("pass-message2").innerHTML = "Password is too short";
   error_flag = 1;
  }
   else
   {
    document.getElementById("pass-message2").innerHTML = "";
   }
 
  if (x.search(/[a-z]/) < 0)
  {
   document.getElementById("pass-message3").innerHTML = "Enter at least one lower case letter";
   error_flag = 1;
  }
   else
   {
    document.getElementById("pass-message3").innerHTML = "";
   }

  if (x.search(/[A-Z]/) < 0)
  {
   document.getElementById("pass-message4").innerHTML = "Enter at least one upper case letter";
   error_flag = 1;
  }
   else
   {
    document.getElementById("pass-message4").innerHTML = "";
   }

  if (x.search(/[0-9]/) < 0)
  {
   document.getElementById("pass-message5").innerHTML = "Enter at least 1 number";
   error_flag = 1;
  }
   else
   {
    document.getElementById("pass-message5").innerHTML = "";
   }

  if (x.search(/[!@#$%&*\-_\\.+()]/) < 0)
  {
   document.getElementById("pass-message6").innerHTML = "Enter at least 1 special character excluding quotes";
   error_flag = 1;
  }
   else 
   {
    document.getElementById("pass-message6").innerHTML = "";
   }
 
   if (x.length > 30)
  {
   document.getElementById("pass-message7").innerHTML = "Password is too long";
   error_flag = 1;
  }
   else
   {
    document.getElementById("pass-message7").innerHTML = "";
   }

  if ( x == y || x.includes(y))
  {
  document.getElementById("pass-message8").innerHTML = "Password cannot contain username";
  error_flag = 1;
  }
   else 
   {
   document.getElementById("pass-message8").innerHTML = "";
   }
}

//Confirming password
 function checkpass2()
 {
  x = document.getElementById("pass").value;
  y = document.getElementById("confirmpass").value;

   if (x != y) 
   {
    document.getElementById("confirmpass-error").innerHTML = "Passwords don't match";
    error_flag = 1;
   } 
   else 
   {
    document.getElementById("confirmpass-error").innerHTML = "";
   }
}

function validateFields() 
{
 error_flag = 0;
 checkfirstname();
 checkmiddle();
 checklastname();
 checkdob();
 checkssn();
 checkemail();
 checkcity();
 checkstate();
 checkzip();
 checkaddress1();
 checkaddress2();
 checkusername();
 checkpassword();
 checkpass2();
 
  if (error_flag == 1)
  {
    alert("Please fix the errors before submitting.");
  }
  else 
  {
    alert("You have no errors! You can hit submit now.");
    document.getElementById("submit").disabled = false;
  }
}

//Display review table
function reviewinfo() 
{
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><tr><th colspan='2'>Review Your Information:</th></tr>";
   
    for (var i = 0; i < formcontent.elements.length; i++) 
    {
      var x = formcontent.elements[i];
      var datatype = x.type;
      var name = x.name;
      var value = x.value;
     
      if (!name) continue;
 
      switch (datatype) 
      {
          case "checkbox":
              if (x.checked) 
              {
                  formoutput += "<tr><td align='right'>" + value + "</td>";
                  formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
              }
              break;
 
          case "radio":
              if (x.checked) 
              {
                  formoutput += "<tr><td align='right'>" + name + "</td>";
                  formoutput += "<td class='outputdata'>" + value + "</td></tr>";
              }
              break;
 
          case "range":
              if (value != "0") 
              {
                  formoutput += "<tr><td align='right'>" + name + "</td>";
                  formoutput += "<td class='outputdata'>" + value + "</td></tr>";
              }
              break;
 
          case "button":
          case "submit":
          case "reset":
              break;
 
          default:
              if (value != "") 
              {
                  formoutput += "<tr><td align='right'>" + name + "</td>";
                  formoutput += "<td class='outputdata'>" + value + "</td></tr>";
              }
      }
    }

    formoutput += "</table>";
    document.getElementById("outputformdata").innerHTML = formoutput;
}

fetch("states.html")
  .then(option => option.text())
  .then(data => { document.getElementById("state").innerHTML = data; });

function setCookie(name, cvalue, expiryDays) 
{
        let d = new Date();
        d.setTime(d.getTime() + (expiryDays * 48 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) 
{
  let cookieName = name + "=";
  let cookies = document.cookie.split(';');
 
  for(let i = 0; i < cookies.length; i++) 
  {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName) == 0)
    {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
   return "";
}

var inputs = [
  {id: "fname", cookieName: "firstName"},
  {id: "lname", cookieName: "lastName"},
  {id: "middleinit", cookieName: "middleInitial"},
  {id: "birthday", cookieName: "birthday"},
  {id: "SSN", cookieName: "ssn"},
  {id: "email", cookieName: "email"},
  {id: "city", cookieName: "city"},
  {id: "zip", cookieName: "zipCode"},
  {id: "address1", cookieName: "address1"},
  {id: "username", cookieName: "username"},
];

inputs.forEach(function (input) 
{
    let inputElement = document.getElementById(input.id);

    let cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "")
    {
        inputElement.value = cookieValue;
    }

    inputElement.addEventListener("input", function () 
    {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

let firstName = getCookie("firstName");
if (firstName !== "") 
{
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!<br>";
    document.getElementById("welcome2").innerHTML = "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function ()
    {
        inputs.forEach(function (input)
        {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}

document.getElementById("remember-me").addEventListener("change", function() 
{
    rememberMe = this.checked;

    if (!rememberMe)
    {
        deleteAllCookies();
    } 
     
      else 
      {
          inputs.forEach(function (input) 
          {
              inputElement = document.getElementById(input.id);
              if (inputElement.value.trim() !== "")
              {
                  setCookie(input.cookieName, inputElement.value, 30);
              }
          });
       }
});

function deleteAllCookies() 
{
    document.cookie.split(";").forEach(function (cookie) 
    {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
}

document.addEventListener("DOMContentLoaded", function ()
{
    const rememberMe = document.getElementById("remember-me").checked;

    if (!rememberMe) 
    {
        deleteAllCookies();
    }
});
