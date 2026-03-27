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
  lnamePattern = /^[a-zA-Z'2-5- ]+$/;
    
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
   else if (currentYear < new Date(maxYear))
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

//Checking SSN
function checkssn()
{
 x = document.getElementById("SSN").value;
 sPattern = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

 if (x == "")
 {
  document.getElementById("ssn-error").innerHTML = "Please enter your SSN";
  return false;
 }
   else if (!x.match(sPattern))
   {
    document.getElementById("ssn-error").innerHTML = "Invalid SSN";
    return false;
   }
     else
     {
      document.getElementById("ssn-error").innerHTML = "";
      return true;
     }
}

//Check Email
function checkemail()
{
 x = document.getElementById("email").value;
 emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

 if (x == "")
 {
  document.getElementById("email-error").innerHTML = "Please enter an email";
  return false;
 }
   else if (!x.match(emailPattern))
   {
    document.getElementById("email-error").innerHTML = "Email is invalid";
    return false;
   }
     else
     {
      document.getElementById("email-error").innerHTML = "";
      return true;
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
  return false;
 }
   else if (!x.match(cityPattern))
   {
    document.getElementById("city-error").innerHTML = "Letters allowed only";
    return false;
   }
     else if (x.length < 2)
     {
      document.getElementById("city-error").innerHTML = "City name is too short";
      return false;
     }
       else if (x.length > 30)
       {
        document.getElementById("city-error").innerHTML = "City name is too long";
        return false;
       }
         else
         {
          document.getElementById("city-error").innerHTML = ""
          return true;
         }
}

//Check State
function checkstate()
{
 x = document.getElementById("state").value;

 if (x == "")
 {
  document.getElementById("state-error").innerHTML = "Please choose a state";
  return false;
 }
  else 
  {
   document.getElementById("state-error").innerHTML = ""
   return true;
  }
}

//Check Zip Code
function checkzip()
{
  x = document.getElementById("zip");
  zipEdit = x.value.replace(/\D/g, "");

  if (zipEdit.length == 5)
  {
   document.getElementById("zip-error").innerHTML = "";
   return true;
  }
    else if (!zipEdit) 
    {
     document.getElementById("zip-error").innerHTML = "Please enter zip code with only numbers";
     return false;
    }
      else if (zipEdit.length < 5 || zipEdit.length < 9)
      {
       document.getElementById("zip-error").innerHTML = "Zip code needs to be exactly 5 or 9 numbers";
       return false;
      }
        else if (zipEdit.length > 5) 
        {
         zipEdit = zipEdit.slice(0, 5) + "-" + zipEdit.slice(5, 9);
        }
          else 
          {
           zipEdit = zipEdit.slice(0, 5);
          }
         
       x.value = zipEdit;
       document.getElementById("zip-error").innerHTML = "";
       return true;
}

//Check Address 1
function checkaddress1()
{
 x = document.getElementById("address1").value.trim();
 addressPattern = /^[a-zA-Z0-9 ]+$/;

 if (x == "")
 {
  document.getElementById("address1-error").innerHTML = "Please enter an address";
  return false;
 }
   else if (!x.match(addressPattern))
   {
    document.getElementById("address1-error").innerHTML = "Only letters and numbers allowed";
    return false;
   }
     else if (x.length < 2)
     {
      document.getElementById("address1-error").innerHTML = "Address is too short";
      return false;
     }
       else if (x.length > 30)
       {
        document.getElementById("address1-error").innerHTML = "Address is too long";
        return false;
       }
         else 
         {
          document.getElementById("address1-error").innerHTML = "";
          return true;
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
  return false;
 }
   else if (x.length < 2)
   {
    document.getElementById("address2-error").innerHTML = "Address is too short";
    return false;
   }
     else if (x.length > 30)
     {
      document.getElementById("address2-error").innerHTML = "Address is too long";
      return false;
     }
       else 
       {
        document.getElementById("address2-error").innerHTML = "";
        return true;
       }
}

