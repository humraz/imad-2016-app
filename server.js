var express = require('express');//create webserver
var morgan = require('morgan');//output logs of server
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone ={
    title:" Article on |humraz",
    heading: "article one",
    date:"sep 35",
    content: `<p>
                heloo heleoeoleelle
            </p>
            <p>
                helooo
            </p>`
}
var articletwo ={
    title:" Article on |humraz2",
    heading: "article one2",
    date:"sep 352",
    content: `<p>
                heloo heleoeolee2222lle
            </p>
            <p>
                helooo22222
            </p>`
}
function createtemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

var htmlTemplate =`
<html>
    <head>
        <title>
           ${title}
        </title>
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div> 
            <o href="/">Home</o>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;



}
app.get('/article-one', function (req, res) {
  res.send(createtemplate(articleone));
});

app.get('/article-two', function (req, res) {
  res.send(createtemplate(articletwo));
});
var counter=0;
app.get('/counter', function (req, res) {
  counter=counter+1;
  res.send(counter.toString());
});
app.get('/article-three', function (req, res) {
  res.send("Article three requested is served here");
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
