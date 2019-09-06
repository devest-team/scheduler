const app = require('../app');
const bodyParser = require('body-parser');
const User = require('..//models/index')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const index = (req,res) => {
    res.render('index', { title: 'programmers 과제 테스트 템플릿 - Node.js' });
};

const login = (req,res) => {
    const id = req.body.userId || req.query.id;;
    const password = req.body.password || req.query.password;
    if(!id){
        console.log("id 받기 실패")
        return res.status(400).end()
    }else{
        if(!password){
            console.log('password 받기 실패');
            return res.status(400).end()
        }else{
            User.find({
                where:{
                    name:id
                }
            });
            res.render(User.userId);
        }
    }
};

const userjoin = (req,res) => {
    res.render('index',{title:'join text'});
};

module.exports = {
    index,
    login,
    userjoin
};