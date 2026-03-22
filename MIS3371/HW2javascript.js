/* 
 Name: Breanna Phanmaha
 File: HW2javascript.js
 Date Created: 03-09-2026
 Date Updated: 
 Purpose: Validates/checks important fields 
*/

document.getElementById("today").innerHTML = new Date().toLocaleDateString(); 

//Checking First Name
function validateFname()
{
 fname = getDocumentById("fname").value.trim();
 namePattern = /^[a-zA-Z-']+$/;
 
 if (fname == "")
 {
  document.getElementById("fname-error").innerHTML = "Please Enter First Name";
  return false;
 }
 else if(fname != "")
 {
  if(!fname.match(namePattern))
   document.getElementById("fname-error").innerHTML = "Letters, dashes, apostrophes allowed only";
   return false;
 }
 else if(fname.length > 30)
 {
  document.getElementById("fname-error").innerHTML = "Name is too long";
  return false;
 }
 else 
 {
  document.getElementById("fname-error").innerHTML = ""
  return true;
 }
}

//Checking Last Name
function validateLname()
{
 lname = getDocumentById("lname").value();
 namePattern = /^[a-zA-Z'2-5-]+$/;
 
 if (lname == "")
 {
  document.getElementById("lname-error").innerHTML = "Please Enter Last Name";
  return false;
 }
 else if(lname != "")
 {
  if(!lname.match(namePattern))
   document.getElementById("lname-error").innerHTML = "Letters, dashes, apostrophes allowed only";
   return false;
 }
 else if(fname.length > 30)
 {
  document.getElementById("lname-error").innerHTML = "Name is too long";
  return false;
 }
 else 
 {
  document.getElementById("lname-error").innerHTML = ""
  return true;
 }
}

//Checking Middle Initial
function validateMname()
{
 mname = document.getElementById("mname").value;
 namePattern = /^[a-zA-Z]$/;
 
 if (!mname.match(namePattern))
 {
  document.getElementById("mname-error").innerHTML = "Middle Initial can only be one letter";
  return false;
 }
 else 
 {
  document.getElementById("mname-error").innerHTML = "";
  return true;
 }
}

//Checks Birthday of User
function validateDob()
{
 dob = document.getElementById("birthday");
 let date = new Date(dob.value);
 let maxDate = new Date().setMaxYear(new Date().getMaxYear() - 120);

 if (date > new Date())
 {
  document.getElementById("dob-error").innerHTML = "Date of Birth cannot be more than 120 years in the future";
  return false;
 }
 else if (date < new Date())
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
