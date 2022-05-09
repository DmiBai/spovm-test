const   http = require('http')
        express = require('express')
        path = require('path');
const worker = require('worker_threads');

const {
        Worker, isMainThread, parentPort, workerData
} = require('worker_threads');

app = express();

app.get('/index', function (request, response){
        response.sendFile(__dirname + '/index.html');
});

app.post('/index', function (request, response){
        let a = 1000000;
        while(1){
                a*= a;
                a*=2;
                a+=1102948120395730592384;
                a-= 10342034859234;
                a=0;
                a =10000;
        }
        response.send('index.html');
});

app.listen(3100);