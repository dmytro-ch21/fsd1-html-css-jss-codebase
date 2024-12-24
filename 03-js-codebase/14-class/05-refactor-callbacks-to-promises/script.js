console.log("Callbacks JS");

// ----------- Select Elements From Page -------------- //
const header = document.querySelector('h1');
const button = document.getElementById('btn-click');
const items = document.querySelector('.items');


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

function showError(error){
  const h2 = document.createElement('h2');
  h2.className = 'item';
  h2.textContent = error;
  h2.style.color = 'red';
  items.appendChild(h2);
}

function addSong(song){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;
      if(!error){
        songs.push(song);
        console.log('Successfully added a new song to db: ', songs);
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
}

addSong({title: 'TNT', duration: '5.10'})
  .then(rederSongs)
  .catch(showError);




