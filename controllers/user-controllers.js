// import people from "../users/users.js";
// let users = people; 
import * as usersDao from "../users/users-dao.js";

const UserControllers = (app) => {

    app.get('/api/users', findUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid',deleteUser);
    app.put('/api/users/:uid', updateUser);

}

const findUsers = async(req,res) => {
    // const type = req.query.type;
    // if(type){
    //     const userOfType = users.find((u) => u.type === type);
    //     res.json(userOfType);
    //     return
    // }
    // res.json(users);
    const username = req.body.username;
    const password = req.body.password;
    if(username && password){
        const user = await usersDao.findUserByCredentials(username, password);
        if(user){
            res.json(user);
        }else{
            res.sendStatus(404);
        }
    } else{
        const users = await usersDao.findAllUsers();
        res.json(users);
    }
};

const findUserById = async(req, res) => {
    const userId = req.params.uid;
    // const user = users.find(u => u._id === userId);
    const user = await usersDao.findUserById(userId);
    res.json(user);
};
  
const createUser = async(req, res) => {

    // const newUser = req.body;
    // newUser._id = (new Date()).getTime() + '';
    // users.push(newUser);
    const newUser = await usersDao.createUser(req.body);
    res.json(newUser);

};

const deleteUser = async(req, res) => {

    const userId = req.params['uid'];
    // users = users.filter(usr => usr._id !== userId);
    const status = await usersDao.deletUser(userId);
    // res.sendStatus(200);
    res.json(status);

};

const updateUser = async(req, res) => {

    const userID = req.params['uid'];
    const updates = req.body;
    const status = await usersDao.updateUser(userID, updates);
    const user = await usersDao.findUserById(userID);
    req.session["currentUser"] = user;
    res.json(status);
    // const userIndex = users.filter((usr) => usr._id === userID);
    // users[userIndex] = {...users[userIndex], ...updates};

    /*users = users.map((usr) => usr._id === userID ? 
        {...usr, ...updates}: usr
    );
    res.sendStatus(200);*/
    
}

export default UserControllers;