
DESIGNED BY MATTCREA --

FREE FOR TEMPLATE AND RE USE.

USE https://formspree.io/ FOR THE CONTACT FORM ! 

FOR CHANGE BRACKGROUND : 

-> CSS :

/*FOR THE SECTION NUMBER1*/

#section1.load-background{
    background-image: url(../img/discover.jpeg);
    background-size: 100%;
    background-position-y: top;
    color: #ffff;
}
//////////////////////////

-> JS : 

/*FOR THE SECTION NUMBER 1*/

onLeave: function(origin, destination, direction){
      if(destination.index === 1){ //Change index value by yours
         destination.item.classList.add('load-background');
      }
}

///////////////////////////

Access to the website : https://fullpageresume.netlify.com/
