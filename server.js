const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) =>{
    res.send([
        {
          'id': 1,
          'image': 'https://placeimg.com/64/64/1',
          'name': '김찬형',
          'birthday': '961222',
          'gender': '남자',
          'job': '대학생'
        },
        {
          'id': 2,
          'image': 'https://placeimg.com/64/64/2',
          'name': '코기',
          'birthday': '777777',
          'gender': '남자',
          'job': '하하하하'
        },
        {
          'id': 3,
          'image': 'https://placeimg.com/64/64/3',
          'name': '코카',
          'birthday': '888888',
          'gender': '여자',
          'job': '강아지'
        }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));