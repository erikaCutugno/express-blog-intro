const express = require('express')
const app = express()
const port = 3001
const posts = [
    {
        title: "Ciambellone",
        image: `http:localhost:${port}/images/ciambellone.jpeg`,
        content:"Il ciambellone è il dolce ideale per ogni momento della giornata. Facile da preparare, soffice e goloso, rappresenta la dolcezza della cucina casalinga.",
        tags: ["Dolci", "Ciambellone", "Ricetta", "Tradizione", "Colazione"],
    },
    {
        title: "Cracker Barbabietola",
        image: `http:localhost:${port}/images/cracker_barbabietola.jpeg`,
        content:"Preparare i cracker in casa è più facile di quanto sembri! Croccanti, leggeri e perfetti come snack salato, sono un'ottima alternativa ai prodotti industriali.",
        tags: ["Snack", "Cracker", "Ricetta Facile", "Fatto in Casa", "Leggero"],
    },
    {
        title: "Pane Fritto Dolce",
        image: `http:localhost:${port}/images/pane_fritto_dolce.jpeg`,
        content:"Il pane fritto è una preparazione semplice e golosa, ideale per accompagnare un piatto salato o per essere gustato come snack. Un'esplosione di sapore!",
        tags: ["Pane", "Fritto", "Snack", "Ricetta Facile", "Cucina Italiana"],
    },
    {
        title: "Pasta Barbabietola",
        image: `http:localhost:${port}/images/pasta_barbabietola.jpeg`,
        content:"La pasta alla barbabietola è un piatto ricco di sapore e dal colore vivace. Facile da preparare, aggiunge un tocco originale alla tua tavola, perfetta per sorprendere gli ospiti.",
        tags: ["Pasta", "Barbabietola", "Ricetta", "Cucina Italiana", "Vegetariano"],
    },
    {
        title: "Paesana",
        image: `http:localhost:${port}/images/paesana.jpeg`,
        content:"La paesana è una ricetta rustica e gustosa che racconta la tradizione della cucina contadina italiana. Un piatto che unisce sapori semplici ma straordinari.",
        tags: ["Cucina Tradizionale", "Ricetta", "Paesana", "Contadina", "Cucina Italiana"],
    },
]
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})
app.get('/bacheca', (req, res) => {
    res.json(posts)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})