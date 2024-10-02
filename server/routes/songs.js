import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import songData from '../data/songs.js'
import songsController from '../controllers/songs.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// router.get('/', (req, res) => {
//   res.status(200).json(songData)
// })

router.get('/', songsController.getSongs)

router.get('/:songId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../client/public/song.html'))
})

export default router
