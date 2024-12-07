console.log("Exercise High Order Functions");

const songs = [
  {
    name: "Lose Control",
    singer: "Teddy Swims",
    genre: "Soul/Pop",
    yearOfRelease: 2024,
    duration: 201,
    copiesSold: 500000,
    status: {
      favorite: true,
      skipped: false,
      markedForDeletion: false,
    },
  },
  {
    name: "Paint the Town Red",
    singer: "Doja Cat",
    genre: "Hip-Hop/Rap",
    yearOfRelease: 2023,
    duration: 217,
    copiesSold: 800000,
    status: {
      favorite: true,
      skipped: false,
      markedForDeletion: false,
    },
  },
  {
    name: "Blinding Lights",
    singer: "The Weeknd",
    genre: "Synth-Pop",
    yearOfRelease: 2020,
    duration: 200,
    copiesSold: 15000000,
    status: {
      favorite: true,
      skipped: false,
      markedForDeletion: false,
    },
  },
  {
    name: "Someone You Loved",
    singer: "Lewis Capaldi",
    genre: "Pop",
    yearOfRelease: 2019,
    duration: 182,
    copiesSold: 10000000,
    status: {
      favorite: false,
      skipped: true,
      markedForDeletion: false,
    },
  },
  {
    name: "Shape of You",
    singer: "Ed Sheeran",
    genre: "Pop",
    yearOfRelease: 2017,
    duration: 233,
    copiesSold: 26000000,
    status: {
      favorite: true,
      skipped: false,
      markedForDeletion: false,
    },
  },
  {
    name: "Uptown Funk",
    singer: "Mark Ronson ft. Bruno Mars",
    genre: "Funk/Pop",
    yearOfRelease: 2014,
    duration: 269,
    copiesSold: 20000000,
    status: {
      favorite: false,
      skipped: false,
      markedForDeletion: false,
    },
  },
  {
    name: "Take Me to Church",
    singer: "Hozier",
    genre: "Indie Rock",
    yearOfRelease: 2013,
    duration: 241,
    copiesSold: 15000000,
    status: {
      favorite: true,
      skipped: false,
      markedForDeletion: false,
    },
  },
  {
    name: "Billie Jean",
    singer: "Michael Jackson",
    genre: "Pop",
    yearOfRelease: 1983,
    duration: 293,
    copiesSold: 100000000,
    status: {
      favorite: true,
      skipped: false,
      markedForDeletion: false,
    },
  },
  {
    name: "Bohemian Rhapsody",
    singer: "Queen",
    genre: "Rock",
    yearOfRelease: 1975,
    duration: 354,
    copiesSold: 6000000,
    status: {
      favorite: false,
      skipped: true,
      markedForDeletion: false,
    },
  },
  {
    name: "Drivers License",
    singer: "Olivia Rodrigo",
    genre: "Pop",
    yearOfRelease: 2021,
    duration: 242,
    copiesSold: 12000000,
    status: {
      favorite: false,
      skipped: true,
      markedForDeletion: false,
    },
  },
];

// console.log(songs[0]);

// Display only the names, singers and year of songs
// songs.forEach((song, index) => console.log(`${index + 1} - ${song.name} by ${song.singer}: ${song.yearOfRelease}`));

// const song = {
//     name: "Lose Control",
//     singer: "Teddy Swims",
//     genre: "Soul/Rock",
//     yearOfRelease: 2022,
//     duration: 201,
//     copiesSold: 500000,
//     status: {
//       favorite: true,
//       skipped: false,
//       markedForDeletion: false
//     }
//   }

//   // ===
// console.log(song.genre.includes('Rock'));

// Get only Rock genre songs

// const rockSongs = songs.filter(function(song){
//     return song.genre.includes('Rock'); // True
// });

// const rockSongs2 = songs.filter((song) => song.genre.includes('Rock'));

// console.log(rockSongs);

// console.log('Rock Songs:');
// rockSongs.forEach(song => console.log(`   - ${song.name}`));

// // Get only pop songs
// const popSongs = songs.filter((song) => song.genre === 'Pop');
// console.log('Pop Songs:');
// popSongs.forEach(song => console.log(`   - ${song.name}`));

// // Get songs realeased in between 2010 and 2020
// const olderSongs = songs.filter(song => song.yearOfRelease >= 2010 && song.yearOfRelease <= 2020);
// console.log('Songs released in btw 2010 and 2020');
// olderSongs.forEach(song => console.log(`   - ${song.name}`));

// // Get only fav songs
// const favSongs = songs.filter(song => song.status.favorite === true);
// console.log('Favorite Songs:');
// favSongs.forEach(song => console.log(`   - ${song.name}`));

// // Modify the array elemnts
// // Skip all the Pop Songs

// songs.forEach((song) => {
//     if(song.genre === 'Pop'){
//         song.status.skipped = true;
//     } else {
//         song.status.skipped = false;
//     }
// });

// console.log(songs);

// Product list, each product will represent few properties

// {
//   name: "Lose Control",
//   singer: "Teddy Swims",
//   genre: "Soul/Pop",
//   yearOfRelease: 2022,
//   duration: 201,
//   copiesSold: 500000,
//   status: {
//     favorite: true,
//     skipped: false,
//     markedForDeletion: false
//   }
// }

// =========

// {
//   name: "Lose Control",
//   singer: "Teddy Swims"
// }

// // Transformation
// console.log(songs);
// const songNames = songs.map((song) => {return song.name});
// console.log(songNames);

// // chaining functions
// const shortSongs = songs.map((song) => {
//   return {$
//     name: song.name,
//     singer: song.singer,
//     isNew: song.yearOfRelease >= 2023
//   }
// })
// .filter((song) => song.isNew === true);

// const cart = [
//   {id: 101, name: 'Laptop', price: 1299.99},
//   {id: 102, name: 'Phone', price: 999},
//   {id: 103, name: 'Keyboard', price: 99.50},
// ];

// const total = cart.reduce((acc, cur) => acc + cur.price, 0);
// console.log('Total: ', total);

// All permutations

const whose = ["mine", "yours", "ours"];
const things = ["cap", "shirt", "pants", "coat"];
const colors = ["black", "blue", "white"];

// ['cap black', 'cap blue', 'cap white', 'shirt black', 'shirt blue', 'cashirtp white']
const combinations = [];

for (const who of whose) {
  for (const thing of things) {
    for (const color of colors) {
      combinations.push(`${who} ${thing} ${color}`)
    }
  }
}

whoes.forEach((who) => {
  things.forEach((thing) => {
    colors.forEach((color) => {
      console.log(`${who} ${thing} ${color}`);
    });
  });
});
