/* 
 Name: Breanna Phanmaha
 File: HW2javascript.js
 Date Created: 03-09-2026
 Date Updated: 
 Purpose: Validates/checks important fields 
*/

document.getElementById("today").innerHTML = new Date().toLocaleDateString(); 

//Checking First Name
function checkFname()
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
function checkLname()
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
function checkMname()
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
function checkDob()
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

//Check SSN
function checkSsn()
{
 ssn = document.getElementById("SSN").value;
 ssnPattern = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

 if (!ssnPattern.test(ssn)
 {
  document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN number";
  return false;
 }
 else
 {
  document.getElementById("ssn-error").innerHTML = ""
  return true;
 }
}

//Check Email
function checkEmail()
{
 email = document.getElementById("email").value;
 emailPattern = /^[^@\s]+@[^@\s]+.[^@\s]+$/; //DO AGAIN!

 if (email == "")
 {
  document.getElementById("email-error").innerHTML = "Please enter your email";
  return false;
 }
 else if (!email.match(emailPattern))
 {
  document.getElementById("email-error").innerHTML = "Email is invalid"
  return false;
 }
 else 
 {
  document.getElementById("email-error").innerHTML = ""
  return true;
 }
}

//Check Address 1
function checkAddress1()
{
 address1 = document.getElementId("address1").value;

 if (address1 < 2)
 {
  document.getElementId("address1-error").innerHTML = "Address is too short";
  return false
 }
 else if (address1 > 30)
 {
  document.getElementId("address1-error").innerHTML = "Address is too long";
  return false;
 }
 else 
 {
  document.getElementId("address1-error").innerHTML = ""
  return true;
 }
}

//Check City
function checkCity()
{
 city = document.getElementById("city").value.trim();

 if(!city)
 {
  document.getElementById("city-error").innerHTML = "Please enter a city";
  return false;
 }
 else
 {
  document.getElementbyId("city-error").innerHTML = "";
  return true;
 }
}

//Check Zipcode
function checkZip()
{
 zipCode = document.getElementById("zip").value;
 zipPattern = /^[0-9]{5}-?[0-9]{4}$/;

 if (zipCode == "")
 {
  document.getElementById("zip-error").innerHTML = "Please Enter a Zip Code";
  return false;
 }
 if (zip.length > 5)
 {
  zipCode = zipCode.slice(0.5) + "-" zipCode.slice(5,9);
 }
 else
 {
  zipCode = zipCode.slice(0,5);
 }
 if (zipCode != "")
 {
  document.getElementById("zip-error").innerHTML = "";
  return true;
 }
}

//
