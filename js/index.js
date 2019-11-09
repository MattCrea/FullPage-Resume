var myFullpage = new fullpage('#fullpage', {
    anchors: ['firstPage', 'secondPage', 'thirdPage','4thpage','5thpage','6thpage'],
    sectionsColor: ['#A7F432', '#4BBFC3', '#7BAABE', '#4285F4', '#EA4335','#FBBC05','#34A853'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First page', 'Second page', 'Third Page', 'Fourth Page','Fiveth Page','Sixth Page'],
    responsiveWidth: 900,
    afterResponsive: function(isResponsive){

    },    
    onLeave: function(origin, destination, direction){
      if(destination.index === 1){
         destination.item.classList.add('load-background');
      }
    }
    
});