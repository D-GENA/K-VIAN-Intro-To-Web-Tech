let toggledStatus = false;



function footerNavShow() {
  let toggleBtn = document.querySelector('#toggleBtn');
  let getFooter = document.querySelector('footer');
  

 if (toggledStatus == false) {
  
   
   getFooter.style.opacity = '3';
   getFooter.style.visibility = 'visible';
   
   
   toggledStatus = true;
 }else{
   
   getFooter.style.opacity = '0';
   getFooter.style.visibility = 'hidden';
   getFooter.style.transition = '.12s ease-in-out';
   

   
   toggledStatus = false;
 }
};
