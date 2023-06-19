// import posts from './tuits.js';
import * as tuitsDao from "./tuits-dao.js";

// let tuits = posts; 

const createTuit = async(req, res) => {

    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.dislikes = 0;
    newTuit.image = "nasalogo.png";
    newTuit.handle = "@nasa";
    newTuit.username = "NASA";
    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    // res.json(newTuit);
    res.json(insertedTuit);
}

const findTuit = async(req, res) => {
    console.log("Inside find tuit controller");
    const tuits = await tuitsDao.findTuits();
    console.log(tuits);
    res.json(tuits);
}

const updateTuit = async(req, res) => {

    console.log(req.body);

    // const tuitID = req.params['tid'];
    const tuitIdToUpdate = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.find((t) => t._id === tuitID);
    // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};

    // tuits = tuits.map((t) => t._id === tuitID? 
    //     {...t, ...updates} : t
    // );
    // res.sendStatus(200);
    const status = await tuitsDao.updateTuit(tuitIdToUpdate,updates);
    res.json(status);
    
}

const deleteTuit = async(req, res) => {

    // const tuitID = req.params['tid'];
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    // tuits = tuits.filter((t) => t._id !== tuitID);
    // res.sendStatus(200);
    res.json(status);
}

export default (app) => {

    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.put('/api/tuits/:tid', updateTuit);
}