let vbm1=document.getElementById("vbm1")
let box1=document.getElementById("box1")
let fixed =document.getElementById("fixed")
let fixedtop=document.getElementById("na1")
let can=document.getElementById("cvb")



vbm1.onclick=()=>{
box1.classList.add("box7")
fixedtop.classList.add("nox1")





}

can.onclick=()=>{
box1.classList.remove("box7")
fixedtop.classList.remove("nox1")


 
    
    
    }










    


   window.addEventListener("scroll",function(){

if(window.pageYOffset >550){
    fixed.classList.add("fixed")


}else{
    fixed.classList.remove("fixed")
    }




  






   })



  /* let vtb=document.getElementById("vbt")
   let vtb1=document.getElementById("vbt1")
let popup=document.getElementById("popup")



vtb.onclick=()=>{
popup.classList.add("mox")




   }



   vtb1.onclick=()=>{
      popup.classList.remove("mox")
      
      
      
      
         }


*/



$(document).ready(function(){

$(".dh1").waypoint(function() {
   $(".dh1").addClass("animate__animated animate__fadeInRight")
},{offset:"80%"})






$(".gh").waypoint(function() {
   $(".gh").addClass("animate__animated animate__fadeInRight")
},{offset:"80%"})











$(".about").waypoint(function() {
   $(".about").addClass("animate__animated animate__fadeInRight")
},{offset:"80%"})































})

   






   

   



   



