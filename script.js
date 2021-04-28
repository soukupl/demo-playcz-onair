const onairApi = 'https://onair.play.cz/json/music-dreamer.json'

const fetchOnair = () => {
  fetch(onairApi)
  .then(response => response.json())
  .then(data => {
    if (!data) return false;
    /* console.log({data}); */
    document.getElementById('onairArtist').innerHTML = data.artist;
    document.getElementById('onairSong').innerHTML = data.song;
    document.getElementById('onairCover').src = data.img;
  });
}

setTimeout(()=>{ fetchOnair(); });
setInterval(()=>{ fetchOnair(); }, 15000);