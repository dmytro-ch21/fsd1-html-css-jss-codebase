const timeoutID = setTimeout(changeText, 4000);

console.log(timeoutID);

console.log('Hello from Global Scope!');

function changeText(){
    document.querySelector('h1').textContent = 'Hello from Callback!';
}

document.querySelector('#clear-btn').addEventListener('click', function(){
    console.log(`Removing timeout with ID: ${timeoutID}`);
    clearTimeout(timeoutID);
    console.log('Timeout Cancelled!');
});

Lets create a digital clock that shows hh:mm:ss

const date = new Date();
const formattedDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
document.querySelector('h1').textContent = formattedDate;


let intervalID;

function startClock() {
  const date = new Date();
  const formattedDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  document.querySelector("h1").textContent = formattedDate;
}

function startClockInterval(){
    intervalID = setInterval(startClock, 1000);
    console.log('ID: ' + intervalID);
}

function stopClock() {
    clearInterval(intervalID);
    console.log('Clock Stopped!');
}

document.getElementById('start-btn').addEventListener('click', startClockInterval);
document.getElementById('stop-btn').addEventListener('click', stopClock);





