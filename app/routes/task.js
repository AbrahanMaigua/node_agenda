const express = require('express')
const authMiddleware = require('../middleware/auth')
const {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
} = require('../controller/task.js');

const router = express.Router();

// router.use(authMiddleware);

router.get   ('/',       getTasks);
router.post  ('/create', createTask);
router.put   ('/:id',    updateTask);
router.delete('/:id',    deleteTask);


module.exports = router;