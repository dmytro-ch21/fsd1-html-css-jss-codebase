console.log("Callbacks JS");

// ----------- Select Elements From Page -------------- //
const header = document.querySelector('h1');
const button = document.getElementById('btn-click');
const items = document.querySelector('.items');

// Callback Example
function onClickHandler(){
  header.classList.toggle('color-red');
}

// Add event listener
button.addEventListener('click', onClickHandler);

console.log('Further code...');

// Implementing our callback function
function logCallback(){
  console.log('Regular log. Callback executed...');
}

function newLogCallback(data){
  console.log('Result: ', data);
}

function mainFunction(callback){
  const x = 100;
  const y = 200;
  const result = x + y;
  callback(result);
}

mainFunction(logCallback);
mainFunction(newLogCallback);
mainFunction(() => {
  console.log('This is the custom logic....');
});

// ============================================= //
const songs = [
  {title: 'Shape of You', duration: '3.20'},
  {title: 'Wind Of Change', duration: '4.15'},
  {title: 'I Miss You', duration: '2.50'},
];

function rederSongs(){
  setTimeout(() => {

    document.querySelectorAll('.item').forEach((song) => song.remove());

    songs.forEach((song) => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `
        <h3>${song.title}</h3>
        <p>Duration: ${song.duration}</p>
      `;
      items.appendChild(div);
    });
  }, 1000);
}

function addSong(song, callback){
  setTimeout(() => {
    songs.push(song);
    console.log('Successfully added a new song to db: ', songs);
    callback();
  }, 2000);
}

addSong({title: 'TNT', duration: '5.10'}, rederSongs);
addSong({title: 'Imagine', duration: '3.50'}, rederSongs);
addSong({title: 'Imagine', duration: '3.50'}, rederSongs);




