import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'



const router = express.Router();

const users = []

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
    res.send(`The user ${user.firstName} ${user.lastName} was created`);

});
    

export default router;