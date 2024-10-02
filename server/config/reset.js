import { pool } from './database.js'
import './dotenv.js'
import songData from '../data/songs.js'

const createSongsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS songs;

        CREATE TABLE IF NOT EXISTS songs (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            artist VARCHAR(40) NOT NULL,
            genre VARCHAR(255) NOT NULL,
            year VARCHAR(4) NOT NULL,
            image VARCHAR(255) NOT NULL
        )`
    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 songs table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating songs table', err)
    }
}

const seedSongsTable = async () => {
    await createSongsTable()
    songData.forEach((song) => {
        const insertQuery = {
            text: 'INSERT INTO songs (title, artist, genre, year, image) VALUES ($1, $2, $3, $4, $5)'
        }

        const values = [
            song.title,
            song.artist,
            song.genre,
            song.year,
            song.image,
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting song', err)
                return
            }

            console.log(`✅ ${song.title} added successfully`)
        })
    })
}

seedSongsTable()