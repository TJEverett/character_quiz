var pointPerrin = 0;
var pointMat = 0;
var pointRand = 0;

var pointCheck = function(toCheck){
  if(toCheck === "p"){
    pointPerrin = pointPerrin + 1;
  }else if(toCheck === "m"){
    pointMat = pointMat + 1;
  }else if(toCheck === "r"){
    pointRand = pointRand + 1;
  };
};

var displayCharacter = function(){
  if(pointPerrin >= pointMat && pointPerrin > pointRand){
    jQuery(".perrin").toggle();
  }else if(pointMat >= pointRand && pointMat > pointPerrin){
    jQuery(".mat").toggle();
  }else if(pointRand >= pointPerrin && pointRand > pointMat){
    jQuery(".rand").toggle();
  };
};

jQuery(document).ready(function(){
  jQuery(".perrin").toggle();
  jQuery(".mat").toggle();
  jQuery(".rand").toggle();

  jQuery("#timeCharacter").submit(function(event){
    event.preventDefault();
    var animal = jQuery("#animal").val();
    var weapon = jQuery("#weapon").val();
    var fate = jQuery("#fate").val();
    var height = jQuery("#height").val();
    var eyes = jQuery("#eyes").val();
    
    if (!(animal == null || weapon == null || fate == null || height == null || eyes == null)){
      pointCheck(animal);
      pointCheck(weapon);
      pointCheck(fate);
      pointCheck(height);
      pointCheck(eyes);

      jQuery(".questions").toggle();
      displayCharacter();
    } else{
      alert("Please select an answer for all fields");
    };    
  });
});