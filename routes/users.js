import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'



const router = express.Router();

let users = []


//all routes in here are starting with /users
router.get('/', (req, res) => 
        {res.send(users);
       // res.send("Hello from users");
    }
        );

router.post('/', (req, res) => {
    const user = req.body;

    const userId = uuidv4();

    const newUser = { ...user, id: userId};
    users.push(newUser);

    //users.push({...user, id: uuidv()});

    res.send(`The user ${user.firstName} ${user.lastName} was created`);

});


router.get('/:id', (req, res) => {
    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
})

router.delete('/:id', (req,res) => {
    const {id} = req.params;

    users = users.filter((user) =>  user.id !== id);

    res.send(`User with id :${id} was deleted`);

})
    

export default router;