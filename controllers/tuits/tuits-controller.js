import posts from './tuits.js';
let tuits = posts; 

const createTuit = (req, res) => {

    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.dislikes = 0;
    newTuit.image = "nasalogo.png";
    newTuit.handle = "@nasa";
    newTuit.username = "NASA";
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuit = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {

    console.log(req.body);

    const tuitID = req.params['tid'];
    const updates = req.body;
    // const tuitIndex = tuits.find((t) => t._id === tuitID);
    // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};

    tuits = tuits.map((t) => t._id === tuitID? 
        {...t, ...updates} : t
    );
    res.sendStatus(200);
    
}

const deleteTuit = (req, res) => {

    const tuitID = req.params['tid'];
    tuits = tuits.filter((t) => t._id !== tuitID);
    res.sendStatus(200);
}

export default (app) => {

    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.put('/api/tuits/:tid', updateTuit);
}