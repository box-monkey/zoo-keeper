// this is our central hub for all routing functions
const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
// const zookeeperRoutes = require('../apiRoutes/zookeeperRoutes');

router.use(animalRoutes);
// router.use(zookeeperRoutes);
router.use(require('./zookeeperRoutes'));

module.exports = router;
