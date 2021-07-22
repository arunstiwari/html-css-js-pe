
import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import {StaticRouter as Router} from 'react-router-dom';

import App from '../src/App';

const PORT=8090;
const app = express();

// app.use(express.static("./build"));


app.get('/*', (req, res) => {
    const context = {};
    const app1 = ReactDOMServer.renderToString(
        <App />
    );

    console.log('---app1---',app1);

    // const app = ReactDOMServer.renderToString(<Router location={req.url} context={context}><App /></Router>);

    const indexFile = path.resolve('./build/index.html');

    fs.readFile(indexFile, 'utf8', (err,data)=>{
        if (err) {
            console.error('Something went wrong: ',err);
            return res.status(500).send('--Better luck next time---');
        }
        data = data.replace('<div id="root"></div>', `<div id="root">${app1}</div>`);
        return res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server-side Rendered application running on port ${PORT}`);
})
