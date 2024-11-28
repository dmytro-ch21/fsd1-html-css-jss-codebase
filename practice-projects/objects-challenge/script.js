console.log("Challenge - Objects");

const playlist = [
  {
    songName: "Segunda",
    artist: "Jeremy Soule",
    duration: 3.12,
    status: {
      favorite: false,
      played: false,
      skipped: false,
    },
  },
  {
    songName: "Vienna",
    artist: "Billy Joel",
    duration: 2.45,
    status: {
      favorite: false,
      played: false,
      skipped: false,
    },
  },
  {
    songName: "Falling",
    artist: "Sunday Scaries",
    duration: 3.0,
    status: {
      favorite: false,
      played: false,
      skipped: false,
    },
  },
  {
    songName: "Single Ladies",
    artist: "Beyonce",
    duration: 3.4,
    status: {
      favorite: false,
      played: false,
      skipped: false,
    },
  },
  {
    songName: "Shape Of You",
    artist: "Ed Sheeran",
    duration: 2.5,
    status: {
      favorite: false,
      played: false,
      skipped: false,
    },
  },
  {
    songName: "Soltera",
    artist: "Shakira",
    duration: 2.9,
    status: {
      favorite: false,
      played: false,
      skipped: false,
    },
  },
];

console.log(playlist.length);

playlist[0].status.played = true;
playlist[1].status.played = true;
playlist[2].status.played = true;
playlist[3].status.played = true;
playlist[4].status.played = true;
playlist[5].status.played = true;

// console.log(playlist);

// fav
playlist[0].status.favorite = true;
//              6 - 1
playlist[playlist.length - 1].status.favorite = true;

// skipped
playlist[2].status.skipped = true;

// destructuring
const { artist: firstArtist, songName: firstSong } = playlist[0];

console.log(firstArtist, firstSong);

playlist.push({
  songName: "Wind Of Change",
  artist: "Scorpions",
  duration: 2.6,
  status: {
    favorite: false,
    played: false,
    skipped: false,
  },
});

playlist.splice(2, 1);

console.log(playlist);

// Convert to a json
const jsonPlaylist = JSON.stringify(playlist);
console.log(jsonPlaylist);

// Convert back to a js object
const parsedPlaylist = JSON.parse(jsonPlaylist);
console.log(parsedPlaylist);
