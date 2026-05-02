const express = require('express')

const app = express()
app.use(express.urlencoded({ extended: false })) // * для парсинга данных из формы, отправленных методом POST, например, для получения значения поля "user" из формы в файле header.ejs при отправке формы на маршрут /check-user

app.set('view engine', 'ejs')
app.use(express.static('public'))// * для подключения статических файлов из папки public, например, для подключения стилей из папки public/css/style.css

app.get('/', (req, res) => {
    res.render('index') // ? рендерит файл index.ejs и отправляет его клиенту
})
app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/user/:user', (req, res) => {
    let data = {
        user: req.params.user,
        hobbies: ['football', 'basketball', 'tennis']
    }
    res.render('user', data) // ? рендерит файл user.ejs и отправляет его клиенту, при этом передавая в него данные из объекта data
})

app.post('/check-user', (req, res) => {
    let username = req.body.user; // * получает значение поля "user" из формы
    if (username == '') 
        return res.redirect('/') // * если поле "user" пустое, то перенаправляет пользователя на главную страницу
    else
        return res.redirect(`/user/${username}`) // * если поле "user" не пустое, то перенаправляет пользователя на страницу /user/имя_пользователя

});

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/templas/index.html')
// })
// app.get('/about', (req, res) => {
//     res.send('ПРО нас')
// })

// app.get('/user/:username/:id', (req, res) => {
//     res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`)
// })








const PORT = 4000;
const HOST = 'localhost';

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу http://${HOST}:${PORT}`)
})

