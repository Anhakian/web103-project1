import express from 'express';
import dotenv from 'dotenv'
import songsRouter from './routes/songs.js'

const app = express();

app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'))

app.use('/songs', songsRouter)

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Listicle</h1>')
})

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})