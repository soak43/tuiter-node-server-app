import * as usersDao from "./users-dao.js";

const AuthController = (app) => {

    const register = async (req,res) => {

        const username = req.body.username;
        console.log("Registration");
        console.log(username);
        const user = usersDao.findUserByUsername(username);
        if (user){
            res.sendStatus(409);
            return;
        }
        const newUser = usersDao.createUser(req.body);
        console.log("New user created")
        console.log(usersDao.findAllUsers());
        // const newUser = {...req.body, _id: new Date().getTime() + ""}
        // usersDao.createUser(newUser);
        req.session["currentUser"] = newUser;
        res.json(newUser);
        // console.log(usersDao.findAllUsers);
    };

    const login = async (req,res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = await usersDao.findUserByCredentials(username,password);
        if(user){
            req.session["currentUser"] = user;
            res.json(user);
        }else{
            res.sendStatus(404);
        }
    };

    const profile = async (req,res) => {
        console.log("inside profile controller");
        console.log("All users = ", usersDao.findAllUsers())
        const currentUser = req.session["currentUser"];
  
        console.log(currentUser);
        if (!currentUser){
            res.sendStatus(404);
            return;
        }
        res.json(currentUser);
    };

    const logout = async (req,res) => {
        req.session.destroy();
        res.sendStatus(200);
    };

    const update = (req,res) => {
        
        const uid = req.session["currentUser"];
        // const u = req.session["currentUser"];
        console.log("req.body = ", req.body)
        const updateUser = usersDao.updateUser(uid, req.body);
        if (!updateUser) {
            res.sendStatus(404);
            return;
        }
        console.log("Inside update controller");
        console.log("current user id = ", uid);
        console.log("updated user = ", updateUser);
        console.log("All users = ", usersDao.findAllUsers())
        req.session["currentUser"] = updateUser;
        res.json(updateUser);
        
    };

    // const getAllUsers = (req,res) => {
    //     res.json(usersDao.findAllUsers);
    // };

    app.post("/api/users/register", register);
    app.post("/api/users/login", login);
    app.post("/api/users/profile", profile);
    app.post("/api/users/logout", logout);
    app.put("/api/users", update);

    // app.get("/api/users", getAllUsers);
};

export default AuthController;