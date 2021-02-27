const express = require('express');
const { getMessages,
        getMessage,
        createMessage,
        updateMessage,
        deleteMessage
     } = require('../controllers/messages');

const router = express.Router();

router
    .route('/')
    .get(getMessages)
    .post(createMessage);

router
     .route('/:id')
     .get(getMessage)
     .put(updateMessage)
     .delete(deleteMessage);

module.exports = router;