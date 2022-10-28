var express = require("express");
var router = express.Router();
const upload = require("../controller/uploadController");
const userAccount = require("../controller/accountController");
const user = require("../controller/userController");
const policy = require("../controller/policyController");

router.post("/upload", upload.uploadFile);

router.get('/account', userAccount.accountRetrieve);
router.post('/account', userAccount.accountCreate);
router.put('/account/:id', userAccount.accountUpdate);
router.delete('/account/:id', userAccount.accountDelete);

router.get('/user', user.userRetrieve);
router.post('/user', user.userCreate);
router.put('/user/:id', user.userUpdate);
router.delete('/user/:id', user.userDelete);

router.get('/policy', policy.policyRetrieve);
router.post('/policy', policy.policyCreate);
router.put('/policy/:id', policy.policyUpdate);
router.delete('/policy/:id', policy.policyDelete);


module.exports = router;