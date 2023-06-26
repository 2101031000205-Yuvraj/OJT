function demoExternalAlert()
{
    alert('External alert.');
}
function demoExternalConfirm()
{
    if (confirm("Are You Sure ??")) 
    {
        alert("Yess");
    }
    else 
    {
        alert("Nooo");
    }
}
function demoExternalPrompt()
{
    var fName=prompt("Enter Firstname here..")
    var lName=prompt("Enter Lastname here..")
    alert(fName+" "+lName);
}