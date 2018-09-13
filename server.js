/*let express = require('express');
let bodyParser = require('body-parser');
let app = express(); app.use(bodyParser.json());
let todos = [{id: 'jkhsdjkf', content: 'review this code'}];

app.post('/todos', (req, res) => { 
    todos.push({
    ...req.body,
    id: Math.random().toString(32).slice(2) });

    res.sendStatus(201); 
});

app.put('/todos/:id', (req, res) => { 
    todos[Number(req.params.id)] = req.body; res.sendStatus(200);
});

app.get('/todos/:id', (req, res) => { 
    res.send(todos[id]);
});

app.get('/todos/all', (req, res) => { 
    res.send(todos);
});

app.get('/', (req, res) => { 
    res.send('OK');
});
app.listen(8080, () => { 
    console.log('Listening on port 8080...');
});*/



let express = require('express');
let bodyParser = require('body-parser');
let app = express(); 

app.use(bodyParser.json());

let todos = new Map();
todos.set('jkhsdjkf', 'review this code');
todos.set('tcas736idh8', 'content');

app.post('/todos', (req, res) => { 
    let id = Math.random().toString(32).slice(2) 
    todos.set(id, req.body.content); 
    res.status(200).send(todos.get(id));
});

app.get('/', (req, res) => { 
    res.send('OK');
});

app.get('/todos/all', (req, res) => { 
    res.status(200).send(todos);
});

app.get('/todos/:id', (req, res) => { 
    res.status(200).send(todos.find( item => item.id === req.params.id));
});

app.put('/todos/:id', (req, res) => {
    todos.set(todos.get(req.params.id), req.body.content);
    res.status(200).send(todos.get(req.params.id));
 });;

app.listen(8080, () => { 
    console.log('Listening on port 8080...');
});

