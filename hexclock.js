function clockLoop(){
  if(hexClockEnabled === true){
    document.getElementById("output").innerHTML = "Hex Time Clock Enabled.";
    hexClock();
  }
  else{
    document.getElementById("output").innerHTML = "Standard Clock Enabled.";
    decimalClock();
  }
  setInterval('clockLoop()', loopTime);
}
console.log("Worker.");
