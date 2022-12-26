const express = require('express');
const router = express.Router();

router.use(require('./login'));
router.use(require('./register'));
router.use(require('./home'));
router.use(require('./categories'));
router.use(require('./destinations'));
router.use(require('./want-to-go'));
router.use(require('./search'))

module.exports = router;