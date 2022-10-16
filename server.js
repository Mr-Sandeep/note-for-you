const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.static(__dirname + '/dist/notesforyou'));
app.get('/*', function(req,res)

{res.sendFile(path.join(__dirname+'/dist/notesforyou/index.html'));});

app.listen(process.env.PORT || 5000);