const path=require('path');
const jsonServer=require('json-server');
const server=jsonServer.create();
const ruter=jsonServer.router(path.join(__dirname,'db.json'));
const middlewares=jsonServer.defaults();

server.user(jsonServer.bodyParser);
server.user(middlewares);

server.post('/login',function (req,res,next) {
    res.header('Access-Control-Expose-Headers','access-token');
    const {account,password}=req.body;
    if(account==='admin'&&password==='123456'){
        res.header('access-token',Date.now());
        res.json(true);
    }else{
        res.json(false);
    }
});

server.user(require('./auth'));
server.user(router);

server.listen(3000,function () {
    console.log('Json Server is running in http://localhost:3000');
})