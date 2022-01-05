var btn = document.getElementById("darkbtn");

function toggleBtn(){
    var element=document.body;
    element.classList.toggle("light-mode");
    btn.classList.toggle("active");

}
function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

   if(username==""||password==""){
       alert("FILL THE DETAILS");
   }
   else{
    alert("YOU HAVE LOGGED IN");
   }
}
function message(){
    console.log("You have forgotten your password");
}