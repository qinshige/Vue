//引入http模块
var http = require("http");
//引入request模块
var request = require("request");
// 解析
var queryString = require("querystring")
//创建主机名
var hostname = "127.0.0.1";
var port = 8888;
const imgPort = 8011;
var baseUrl = "http://api.zhuishushenqi.com";
//创建代理服务器
var apiServer = http.createServer(function (req,res) {
    var url = baseUrl + req.url;
    var options = {
        url : url
    };
    request.get(options,function (error,response,body) {
        if(!error && response.statusCode == 200){
            // 设置编码类型，否则中文会显示为乱码
            res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
            // 设置所有域允许跨域
            res.setHeader('Access-Control-Allow-Origin', '*');
//          console.log(body);
            // 返回代理后的内容
            res.end(body);
        }
    })
});
apiServer.listen(port,hostname,function (error) {
    if(!error){
        console.log("接口代理运行在 http://" + hostname + ":" + port);
    }
});
// 创建一个章节内容代理服务
  const imgServer = http.createServer((req, res) => {
    const chapterServer = "http://chapterup.zhuishushenqi.com/chapter"+"/"+"http://vip.zhuishushenqi.com/toc/59ba294c362ed7660b299437"
    console.log(chapterServer);
    const options = {
      url: chapterServer
    };
    function callback (error, response, body) {
      if (!error && response.statusCode === 200) {
        // 设置编码类型，否则中文会显示为乱码
        res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
        // 设置所有域允许跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        // 返回代理后的内容
        res.end(body);

      }
    }
    request.get(options, callback);
});
// 监听 8011 端口
imgServer.listen(imgPort, hostname, () => {
    console.log(`章节内容代理运行在 http://${hostname}:${imgPort}`);
});
