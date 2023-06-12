let users = [];

export const findAllUsers = () => users;

export const findUserById = (uid) => {

    const index = users.findIndex(u => u._id === uid);
    if(index !== -1) return users[index];
    return null;
};

export const findUserByUsername = (username) => {

    const index = users.findIndex(u => u.username === username);
    if(index !== -1) return users[index];
    return null;
};

export const findUserByCredentials = (username, password) => {

    console.log("Finding user by credentials");
    console.log("All users = ",users);
    const index = users.findIndex((u) => u.username === username && u.password === password);
    if(index !== -1) {
        return users[index];
    }else{
        return null;
    }
};

export const createUser = (user) => {
    // users.push(user);
    // user._id = (new Date()).getTime() + '';
    return users.push(user);
}

export const updateUser = (uid, updates) => {

    const index = users.findIndex(u => u._id === (uid-1));
    console.log("Inside update user");
    console.log("uid = ", uid);
    console.log("index = ", index);
    console.log("length = ", users.length);
    // const userToUpdate = users.find((u) => u._id === uid);

    // console.log("User to update = ", userToUpdate);

    // const newUser = {...userToUpdate, ...updates};

    // console.log("New user = ", newUser);
    console.log("All users = ", users);
    console.log("updates received = ",updates);

    // users = users.map((u) => {
    //     if(u === userToUpdate){
    //         newUser
    //     }else{
    //         u
    //     }
    // })

    console.log("users[index] = ", users.at(index));
    const newUser = {...users.at(index), ...updates};

    console.log("newUser = ", newUser);

    // users = users.map((u) => u._id === (uid-1) ? newUser : u);

    // users = users.map((u, index) => {
    //     console.log("uid", uid);
    //     console.log("index = ", index);
    //     index === (uid-1) ? 
    //     newUser : u
    // });

    users = users.map((u) => u === users.at(index)? newUser:u);
    // users.at(index) = newUser;

    console.log("updated users = ", users);
    // users = newUsers;

    // if(index !== -1){
    //     users[index] = {...users[index], ...user};
    //     return {status: 'ok'};
    // }
    return uid;
};

export const deletUser = (uid) => {

    const index = users.findIndex(u => u._id === uid);
    users.splice(index,1);
    return {status: 'ok'};
};


