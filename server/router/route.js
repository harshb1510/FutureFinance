import { Router } from "express";
const router = Router();

/** import all controllers */
import * as controller from '../controller/appController.js';
import { registerMail } from '../controller/mailer.js';
import Auth, { localVariables } from '../middleware/auth.js';



/** POST Methods */
router.route('/register').post(controller.register); // register user
router.route('/registerMail').post(registerMail); // send the email
router.route('/authenticate').post(controller.verifyUser, (req, res) => res.end()); // authenticate user
router.route('/login').post(controller.verifyUser,controller.login); // login in app
router.route('/user/:username/pinMatch').post(controller.pinMatch);
router.route('/user/:username/addMoney').post(controller.addMoney);
router.route('/user/:username/transferMoney').post(controller.transferMoney);
router.route("/fingerprint").post(controller.registerFingerprint);

/** GET Methods */
router.route('/user/:username').get(controller.getUser) // user with username
router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP) // generate random OTP
router.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP) // verify generated OTP
router.route('/createResetSession').get(controller.createResetSession) // reset all the variables
router.route('/user/:username/transactionHistory').get(controller.transactionHistory) // transaction history of user


/** PUT Methods */
router.route('/updateuser').put(Auth, controller.updateUser); 
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword);



export default router;