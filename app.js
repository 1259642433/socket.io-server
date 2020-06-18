var http = require('http').createServer();
var io = require('socket.io')(http)
const config = {
    port:9999
}

io.on('connection', function(socket){
    console.log('a user connected')
    socket.emit("serverMsg",{
        type:'notice',
        msg:"欢迎加入"
    })
    socket.on('clientMsg', function(res){
        // socket.emit("serverMsg","我是返回的消息~~~~~~~")
        socket.broadcast.emit('serverMsg',{
            type:'chatMsg',
            userType:'friend',
            name:'John',
            msg: res.msg
        });
    })
});

http.listen(config.port, function(){
    console.log(`listening on :http://localhost:${config.port}`)
})
