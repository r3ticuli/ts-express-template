import { Request, Response, Application } from 'express';
import express = require('express');

var app: Application = express();

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World')
});

app.listen(3000);
