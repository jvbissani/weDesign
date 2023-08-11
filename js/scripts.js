
// Mobile Menu

document.getElementById("hamburguer-icon").onclick = function(){
  document.getElementById("sliding-header-menu-outer").style.right = "0";
}

document.getElementById("sliding-header-menu-close-button").onclick = function(){
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}

// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

var aboutUsTabs = document.getElementsByClassName("single-tab");

//change the text of the information box

for(var i = 0; i < aboutUsTabs.length; i++){
  aboutUsTabs[i].onclick = function(){
    var clickedValue = this.innerHTML;
    document.getElementById("box-text").innerHTML = aboutUs[clickedValue]

    for(var j = 0; j < aboutUsTabs.length; j++){
      aboutUsTabs[j].style["background-color"] = unseletectedColor;
      aboutUsTabs[j].style["font-weight"] = "normal";
    }

    this.style["background-color"] = seletectedColor;
    this.style["font-weight"] = "bold";


  }
}


// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];


  var previousArrow = document.getElementById("service-previous");
  var nextArrow = document.getElementById("service-next");
  var serviceTitleArea = document.getElementById("service-title");
  var serviceTextArea = document.getElementById("service-text");

  var currentService = 0;

  nextArrow.onclick = function(){

    if(currentService == (ourServices.length - 1)){
      currentService = 0;
    }else{
    currentService += 1;
    }
    var title = ourServices[currentService].title;
    var text = ourServices[currentService].text;
    serviceTitleArea.innerHTML = title;
    serviceTextArea.innerHTML = text;
  }

  previousArrow.onclick = function(){

    if(currentService == 0){
      currentService = ourServices.length -1;
    }else{
      currentService -= 1;
    }
    
    var title = ourServices[currentService].title;
    var text = ourServices[currentService].text;
    serviceTitleArea.innerHTML = title;
    serviceTextArea.innerHTML = text;

  }

// Footer

document.getElementById("current_year").innerHTML = new Date().getFullYear();



  
   


   