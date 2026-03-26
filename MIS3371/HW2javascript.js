/* 
 Name: Breanna Phanmaha
 File: HW2javascript.js
 Date Created: 03-09-2026
 Date Updated: 
 Purpose: Validates/checks important fields 
*/

//Checking First Name
function checkfirstname()
{
 x = document.getElementById("fname").value.trim();
 fnamePattern = /^[a-zA-Z'-]+$/;
    
    if (x == "")
    {
      document.getElementById("fname-error").innerHTML = "Please enter first name"
      return false;
    }
    	 else if (!x.match(fnamePattern))
      {
       document.getElementById("fname-error").innerHTML = "Letters, apostrophes and dashes only";
       return false;
      }
        	else if (x.length > 30)
         {
          document.getElementById("fname-error").innerHTML = "First name is too long";
          return false;
         }
           else if (x.length < 2)
           {
            document.getElementById("fname-error").innerHTML = "First name is too short";
            return false;
           }
             else
             {
              document.getElementById("fname-error").innerHTML = ""
              return true;
             }
 }

//Checking Last name
function checklastname()
 {
  x = document.getElementById("lname").value.trim();
  lnamePattern = /^[a-zA-Z'2-5-]+$/;
    
if (x == "")
  {
   document.getElementById("lname-error").innerHTML = "Last name cannot be empty"
   return false;
  }
    else if (!x.match(lnamePattern))
    {
     document.getElementById("lname-error").innerHTML = "Letters, apostrophes, numbers 2 to 5, ie, the 3rd, and dashes only";
     return false;
    }
      else if (x.length > 30)
      {
       document.getElementById("lname-error").innerHTML = "Last name is too long";
       return false;
      }
         else if (x.length < 2)
         {
           document.getElementById("lname-error").innerHTML = "Last name is too short";
           return false;
         }
            else
            {
             document.getElementById("lname-error").innerHTML = ""
              return true;
            }
 }

//Check Middle Initial 
function checkmiddle()
{
 x = document.getElementById("middleinit").value.trim();
 mnamePattern = /[a-zA-Z]/;

 if (!x.match(mnamePattern))
 {
  document.getElementById("middle-error").innerHTML = "Middle initial can only be letters";
  return false;
 }
   else if (x.length > 1)
   {
    document.getElementById("middle-error").innerHTML = "Only 1 letter is allowed";
    return false;
   }
     else 
     {
      document.getElementById("middle-error").innerHTML = "";
      return true;
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
  return false;
 }
   else if (currentYear < new Date())
   {
    document.getElementById("dob-error").innerHTML = "Date of Birth cannot be more than 120 years in the past";
    return false;
   }
     else
     {
      document.getElementById("dob-error").innerHTML = "";
      return true;
     }
}


