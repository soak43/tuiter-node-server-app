import usersModel from "./users-model.js";

export const findAllUsers = () => usersModel.find(); //users;

export const findUserById = (uid) => {

    // const index = users.findIndex(u => u._id === uid);
    // if(index !== -1) return users[index];
    // return null;

    return usersModel.findById(uid);
};

export const findUserByUsername = (username) => {

    // const index = users.findIndex(u => u.username === username);
    // if(index !== -1) return users[index];
    // return null;
    return usersModel.findOne({username});
};

export const findUserByCredentials = (username, password) => {

    // console.log("Finding user by credentials");
    // console.log("All users = ",users);
    // const index = users.findIndex((u) => u.username === username && u.password === password);
    // if(index !== -1) {
    //     return users[index];
    // }else{
    //     return null;
    // }
    return usersModel.findOne({username, password});
};

export const createUser = (user) => {
    // users.push(user);
    // user._id = (new Date()).getTime() + '';
    // return users.push(user);
    return usersModel.create(user);
}

export const updateUser = (uid, updates) => {

    /*const index = users.findIndex(u => u._id === (uid-1));
    console.log("Inside update user");
    console.log("uid = ", uid);
    console.log("index = ", index);
    console.log("length = ", users.length);*/

    // const userToUpdate = users.find((u) => u._id === uid);

    // console.log("User to update = ", userToUpdate);

    // const newUser = {...userToUpdate, ...updates};

    // console.log("New user = ", newUser);

    /*console.log("All users = ", users);
    console.log("updates received = ",updates);

    console.log("users[index] = ", users.at(index));
    const newUser = {...users.at(index), ...updates};

    console.log("newUser = ", newUser);

    users = users.map((u) => u === users.at(index)? newUser:u);
   

    console.log("updated users = ", users);
   
    return uid;*/
    const {firstName, lastName} = updates;
    console.log("uid = ", uid._id);
    console.log("updates = ", updates);
    console.log("FN = ",firstName);
    console.log("LN = ",lastName);
    return usersModel.updateOne({_id:uid._id},{$set:{firstName, lastName}});
};

export const deletUser = (uid) => {

    // const index = users.findIndex(u => u._id === uid);
    // users.splice(index,1);
    // return {status: 'ok'};

    return usersModel.deleteOne({_id:uid});
};


