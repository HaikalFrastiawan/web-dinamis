const path = require ('path')
const express = require ('express')
const app = express()

const tagsData = require ('./data.json')


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views')) //bisa mengambil file dari luar folder

app.use(express.static(path.join(__dirname, '/public')))


app.get('/', (req,res) =>{
    res.render('home')
})

app.get('/t/:tag', (req,res) =>{

    const { tag } = req.params

    const data = tagsData[tag]
    if( data ) {
        res.render('tag', {data})
    } else{
        res.render('notfound', {tag})
    }
})

app.get('/cats', (req,res) =>{
    const cats = ['oyen', 'embul', 'black']
    res.render('cats', {cats})
})

app.get('/rand', (req,res) =>{
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', {random: num})
})

app.listen(8080, () =>{
    console.log(`Listening on host http://localhost:8080`)
})


