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
    day = req.body.day
    month = req.body.month
    year = req.body.year
    hour = req.body.hour
    min = req.body.min
    lat = req.body.lat
    lon = req.body.lon
    tzone = req.body.tzone
    var data = {
        day: day,
        month: month,
        year: year,
        hour: hour,
        min: min,
        lat: lat,
        lon: lon,
        tzone: tzone,
    };
    res.send('i am on post',data)
})

app.listen(port, () =>
    console.log(`Server Running on ${port}`)
);
