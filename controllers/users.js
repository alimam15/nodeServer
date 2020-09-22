
import { v4 as uuidv4 } from 'uuid';


let users = []




export const getUsers = (req, res) => res.send(users);

export const createUser = (req, res) => {
    const user = req.body;
    const userId = uuidv4();
    const newUser = { ...user, id: userId};
    users.push(newUser);

    
    
    

    //users.push({...user, id: uuidv()});

    res.send(`The user ${user.firstName} ${user.lastName} was created`);}

export const getUser = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);}



export const deleteUser = (req,res) => {
    const {id} = req.params;
    users = users.filter((user) =>  user.id !== id);
    res.send(`User with id :${id} was deleted`);}

export const patchUser = (req, res) => {

    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`The user with the id ${id} has been updated`);}
