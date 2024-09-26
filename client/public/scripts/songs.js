const renderSongs = async () => {
    const response = await fetch('/songs')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(song => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${song.image})`

            const title = document.createElement('h3')
            title.textContent = song.title
            bottomContainer.appendChild(title)

            const artist = document.createElement('p')
            artist.textContent = 'Artist: ' + song.artist
            bottomContainer.appendChild(artist)

            const genre = document.createElement('p')
            genre.textContent = 'Genre: ' + song.genre
            bottomContainer.appendChild(genre)

            const link = document.createElement('a')
            link.textContent = 'Read More'
            link.setAttribute('role', 'button')
            link.href = `/songs/${song.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'Waiting to discover more songs...'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
  window.location.href = '../404.html'
}
else {
  renderSongs()
}