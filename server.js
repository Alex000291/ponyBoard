const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.set('view engine', 'ejs');


const homeRouter = require('./routes/home');
const boardRouter = require('./routes/board');
const postsRouter = require('./routes/posts');


app.use('/', homeRouter);
app.use('/board', boardRouter);
app.use('/posts', postsRouter);



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});