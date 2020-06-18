
function updateClock(){
  var d = new Date();
  
  let hour = d.getHours();
  let minute = d.getMinutes();
  let second = d.getSeconds();
  let millisecond = Math.round(d.getMilliseconds() / 100);
  //console.log(Math.round(millisecond / 10));
  
  document.getElementById("hour").innerHTML = "Hour: " + hour 
  document.getElementById("hourhex").innerHTML = "Hour in hex: " + hour.toString(16); 
  
  document.getElementById("minute").innerHTML = "Minute: " + minute; 
  document.getElementById("minutehex").innerHTML = "Minute in hex: " + minute.toString(16); 
  
  document.getElementById("second").innerHTML = "Second: " + second; 
  document.getElementById("secondhex").innerHTML = "Second in Hex: " + second.toString(16); 
  
  document.getElementById("millisecond").innerHTML = "Millisecond: " + millisecond; 
  document.getElementById("millisecondhex").innerHTML = "Millisecond in Hex: " + millisecond.toString(16); 
  
  let hexNum;
  
  if(hour > 16){
    hexNum = hour.toString(16) + minute.toString(16) + second.toString(16);
  }
  else
    hexNum = hour.toString(16) + minute.toString(16) + second.toString(16) + millisecond.toString(16);
  
  let hexTime = "#" + hexNum; 
  
  document.getElementById("hextime").innerHTML = hexTime;
  
  background.style.backgroundColor = hexTime;
  
  setInterval('updateClock()', 1000);
}

function decimalClock(){
  var date = new Date();
  
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  
  h = h.toString();
  m = m.toString();
  s = s.toString();
  
  if(h.length < 2)
    h = '0' + h;
  
  if(m.length < 2)
    m = '0' + m;
  
  if(s.length < 2)
    s = '0' + s;
  
  background.style.backgroundColor = "#" + h + m + s
  
  document.getElementById("all").innerHTML = "#" + h + m + s;
  
  setInterval('decimalClock()', 1000);
}
