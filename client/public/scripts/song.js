const renderSong = async () => {
    const requestedID = parseInt(window.location.href.split('/songs/').pop())
  
    const response = await fetch('/songs')
    const data = await response.json()
  
    const songContent = document.getElementById('song-content')
  
    let song
  
    song = data.find(song => song.id === requestedID)
  
    if (song) {
        document.getElementById('image').src = song.image
        document.getElementById('title').textContent = song.title
        document.getElementById('artist').textContent = 'Artist: ' + song.artist
        document.getElementById('genre').textContent = 'Genre: ' + song.genre
        document.getElementById('year').textContent = 'Year: ' + song.year
        document.title = `My 2024 Playlist - ${song.title}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'Finding new songs to listen to...'
        songContent.appendChild(message)   
    }
}
  
renderSong()