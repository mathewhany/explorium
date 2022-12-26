const express = require('express');
const router = express.Router();

router.use(require('./login'));
router.use(require('./register'));
router.use(require('./home'));

module.exports = router;