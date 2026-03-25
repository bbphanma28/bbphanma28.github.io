/* 
 Name: Breanna Phanmaha
 File: HW2javascript.js
 Date Created: 03-09-2026
 Date Updated: 
 Purpose: Validates/checks important fields 
*/

//Checking First Name
function checkFname()
{
 	x = document.getElementById("fname").value.trim();
  namePattern = /^[a-zA-Z'-]+$/;
    
    if (x == "")
    {
    document.getElementById("fname-error").innerHTML = "First name cannot be empty"
    return false;
    }
    	else if (!x.match(namePattern))
        {
        	document.getElementById("fname-error").innerHTML = "Invalid characters";
          return false;
        }
        	else if (x.length > 30)
            {
            	document.getElementById("fname-error").innerHTML = "Too long";
              return false;
            }
              else if (x.length < 2)
              {
                document.getElementById("fname-error").innerHTML = "Too Short";
                return false;
              }
              	else
                  {
                  	document.getElementById("fname-error").innerHTML = ""
                    return true;
                  }
 }


