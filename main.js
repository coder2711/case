function setup() {
    canvas = createCanvas(250, 250);
    canvas.center();
    vide = createCapture(VIDEO);
    vide.hide();
    mobile = ml5.imageClassifier('MobileNet' , loaded);
    lens = ml5.imageClassifier('googleLens' , Isloaded);
  }
  function loaded(){
    console.log("Model is Loaded!!!!!!!!!!!!!!!!!!!!!!!!");
  }
  function Isloaded(){
    console.log("Model is Loaded!!!!!!!!!!!!!!!!!!!!!!!!");
  }
  
  function draw(){
    image(vide , 0 , 0 , 250 , 250);
    mobile.classify(vide , got_results);
    lens.classify(vide , Got_the_results);
  }
  
  function got_results(error , bing){
    if(error){
      console.error(error);
    }
    else{
      console.log(bing);
      document.getElementById("Mobile").innerHTML = bing[0].label;
    }
  }

  function Got_the_results(error , bang){
    if(error){
      console.error(error);
    }
    else{
      console.log(bang);
      document.getElementById("Lens").innerHTML = bing[0].label;
    }
  }
  