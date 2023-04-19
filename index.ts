import express from 'express'

const app = express()
const port = Number(process.env.PORT) || 3000

app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>')
})

const start = (port: number) => {
    app.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}`)
    })
}

start(port)