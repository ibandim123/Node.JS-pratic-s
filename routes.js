const http = require('http');
const fs = require('fs');

//Create route's 
const server = http.createServer((req,res)=>{
    //_dirname return a app past 
    fs.readFile(`${__dirname}/artigos.html`,(erro,html)=>{
        res.writeHead(200, {'content-type':'text/html'});
        if(req.url === '/artigo'){
            res.write('artigo')
        } else if (req.url === '/contatos'){
            res.write('contatos')
         
        }else {
            res.write('erro')
        }
        res.write(html);
        res.end()
    });
});
server.listen(3000, () =>{
    console.log('Executando o site')
});
