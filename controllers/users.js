import { v4 as uuidv4 } from 'uuid';

let users = [
   
]


export const createUser = (req, res) => {

    const user = req.body;
    const userWithId = { ...user, id:  uuidv4()};
    users.push(userWithId);
    res.send(`User with the name ${userWithId.firstName} added to the database!`);
    console.log(`User with the name ${userWithId.firstName} added to the database!`);
};

export const getUsers = (req, res) => {
        console.log(users);
        res.send(users);
 };

export const getUser =  (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(`User with the first name ${foundUser.firstName} founded!`)
    console.log(`User with the first name ${foundUser.firstName} founded!`)
    

};

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the last name ${users.firstName} deleted from the database!`);

};

export const updateUser = (req, res) => {
    const { id } = req.params;

    const user= users.find((user) => user.id === id);

    const { firstName, lastName, age } = req.body;

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the first name ${user.firstName} has been updated!`);



}