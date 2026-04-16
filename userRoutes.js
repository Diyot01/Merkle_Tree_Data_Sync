const express = require('express')
const router = express.Router();
const userController = require('../controller/userController')
const { insertDataset } = require('../controller/dbController');
const { syncDatasets } = require('../controller/userController');


router.post('/sync-db', syncDatasets);
router.post('/insert', insertDataset);
router.get('/getUser',userController.getUsers);
router.get('/syncdata',userController.syncdata);
router.post('/createUser', userController.createUser);
router.delete('/deleteUser/:userId', userController.deleteUser);
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/profile/:userId', userController.getProfile);
router.post('/merkle-compare', userController.compareMerkle);
router.get('/sync-logs', userController.getSyncLogs);
router.delete('/sync-logs', userController.deleteSyncLogs);

module.exports = router;