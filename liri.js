require("dotenv").config();
var request = require("request");
var Spotify = require("node-spotify-api");
var twitter = require("twitter");
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var client = new twitter(keys.twitter);

var command = process.argv[2];

switch (command) {
    case "my-tweets":
        myTweets();
        break;

    case "spotify-this-song":
        spotifyThis();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;

    default:
        console.log("Please select a valid command. Those commands are my-tweets, spotify-this-song, movie-this, and do-what-it-says.")
}

<<<<<<< HEAD
function myTweets() {
    var params = {screen_name: 'maxmaxermax', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (error) {
      throw error
  }
  console.log(tweets[0].text);
  for (var i = 0; i < tweets.length; i++){
      console.log(tweets[i].text + " created at: " + tweets[i].created_at);
  }
});
}

function spotifyThis() { 
    var search = "";
    for (var i = 3; i < process.argv.length; i++) {
        var searchAdd = process.argv[i];
        if (i === 3) {
            search += searchAdd;
        }
        else {
            search += " " + searchAdd
        }
    }
    console.log(search);
    spotify.search({type: "track", query: search}, function(err, data){
        if (err) {
            throw err;
        }
        var songResults = data.tracks.items
   
        for (var i = 0; i < songResults.length; i++){
            console.log("-----------------------------------");
            console.log("Artist: " + songResults[i].artists[0].name);
            console.log("Song Title: " + songResults[i].name);
            console.log("Preview link: " + songResults[i].preview_url);
            console.log("Album Title: " + songResults[i].album.name);
        }
    });
}
=======
function myTweets() { }
function spotifyThis() { }
>>>>>>> parent of 468c10b... added Twitter functionality
function movieThis() { }
function doWhatItSays() { }