const express = require('express');

const router = express.Router();
const SessionController = require('../controllers/sessions');

router.route('/sessions')
      .get(SessionController.new)
      .post(SessionController.create)
      .delete(SessionController.destroy);

module.exports = router;