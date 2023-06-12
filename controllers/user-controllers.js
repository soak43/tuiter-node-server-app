import people from "../users/users.js";
let users = people; 

const UserControllers = (app) => {

    app.get('/api/users', findUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid',deleteUser);
    app.put('/api/users/:uid', updateUser);

}

const findUsers = (req,res) => {
    const type = req.query.type;
    if(type){
        const userOfType = users.find((u) => u.type === type);
        res.json(userOfType);
        return
    }
    res.json(users);
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}
  
const createUser = (req, res) => {

    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);

}

const deleteUser = (req, res) => {

    const userId = req.params['uid'];
    users = users.filter(usr => usr._id !== userId);
    res.sendStatus(200);

}

const updateUser = (req, res) => {

    const userID = req.params['uid'];
    const updates = req.body;
    // const userIndex = users.filter((usr) => usr._id === userID);
    // users[userIndex] = {...users[userIndex], ...updates};

    users = users.map((usr) => usr._id === userID ? 
        {...usr, ...updates}: usr
    );
    res.sendStatus(200);
}

export default UserControllers;