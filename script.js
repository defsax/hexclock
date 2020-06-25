
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

function hexClock(){
  var date = new Date();
  
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  
  /*
   * http://www.intuitor.com/hex/hexclock.html

    1 hexsecond = 1.3110 (1.5216) seconds
    1 second = 0.75910 (0.C2316) hexseconds
    1 hexminute = 0.35210 (0.5A016) minutes
    1 minute = 2.8410 (2.D816) hexminutes
    1 hexhour = 1.510 (1.816) hours
    1 hour = 0.66710 (0.AAB16) hexhours
   */
  
  let hexH = Math.round(h * 1.5);
  let hexM = Math.round(m * 0.352);
  let hexS = Math.round(s * 1.31);
  
  document.getElementById("dec").innerHTML = "#" + h + m + s;
  
  h = hexH.toString(16);
  m = hexM.toString(16);
  s = hexS.toString(16);
  
  //console.log("h: " + h);
  //console.log("m: " + m);
  //console.log("s: " + s);
  
  if(h.length < 2)
    h = '0' + h;
  
  if(m.length < 2)
    m = '0' + m;
  
  if(s.length < 2)
    s = '0' + s;
  
  //background.style.backgroundColor = "#" + h + m + s
  
  document.getElementById("hex").innerHTML = "#" + h + m + s;
  
  let color = convert();
  background.style.backgroundColor = color;
  
  setInterval('hexClock()', 131);
}

function display(){
  document.getElementById("secs").innerHTML = secsSinceMidnight();
}
function convert(){
  
  const decSecondsRange = { min: 0, max: 86400 };
  const hexSecondsRange = { min: 0, max: 1048575 };
  
  let normalized = normalize(secsSinceMidnight(), decSecondsRange, hexSecondsRange);
  
  document.getElementById("converted").innerHTML = normalized.toString(16);
  //debugger;
  
  let backCol = normalized.toString(16);
  
  if(backCol.length === 3)
    backCol = "#" + 0 + 0 + 0 + backCol;
  else if(backCol.length === 4)
    backCol = "#" + 0 + 0 + backCol;
  else if(backCol.length === 5)
    backCol = "#" + 0 + backCol;
  else
    backCol = "#" + backCol;
  
  return backCol;
}

function secsSinceMidnight(){
  let now = new Date();
  let then = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
  let diff = now.getTime() - then.getTime();
  return diff / 1000; 
}

function normalize(x, inRange, outRange){
  
  let normalized = (outRange.max - outRange.min) * ((x - inRange.min) / (inRange.max - inRange.min)) + outRange.min;
  
  return Math.round(normalized);
}
