const express = require('express');
const app = express()
const path = require('path')
const port = 8000;
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', __dirname + '/public/views')
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)

app.get('/', (req, res) => {
    res.render("index.html")
})
app.post('/', (req, res) => {
   
    res.send('i am on post',data)
})

app.listen(port, () =>
    console.log(`Server Running on ${port}`)
);
