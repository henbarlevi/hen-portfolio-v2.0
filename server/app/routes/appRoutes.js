"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
//import * as Rx from 'rxjs';
const path = require("path");
const Logger_1 = require("../utils/Logger");
const mail_service_1 = require("../services/mail.service");
const router = express.Router();
router.get('/', (req, res) => {
    res.send('welcome to server api');
});
router.get('/cv', (req, res) => {
    console.log('download cv');
    res.setHeader('Content-disposition', `attachment; filename=Hen_Fullstack_CV.pdf`); //set the downoaded file name
    res.setHeader('Content-Type', 'application/octet-stream'); //prevent user from living the app page
    res.sendFile(path.join(__dirname, '../../Hen_CV.pdf'));
});
router.post('/email', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const message = req.body;
        Logger_1.Logger.st('appRoutes', 'Message', 'green');
        console.dir(message);
        const email = {
            from: 'HenPortfolio',
            subject: 'Job Offer',
            to: ['hen101020@gmail.com'],
            html: `<div>
            <p>Name : ${message.name} </p>
            <p>Email : ${message.emailAddress} </p>
            <p>Phone : ${message.phoneNumber} </p>
            <p>Message: ${message.message} </p>
            </div>`
        };
        yield mail_service_1.EmailService.sendMail(email);
        Logger_1.Logger.d('appRoutes', 'Message Sent Succefuly', 'green');
        res.status(200).end();
    }
    catch (e) {
        Logger_1.Logger.d('appRoutes', `Err ===> ${e}`, 'red');
        res.status(500).send(e);
    }
}));
exports.default = router;
//-------------------------------------SNIPPETS-------------------------
//CONVERTING NODE FS callback to REACTIVE
// fs.readdir('./dist/routes',(err,items)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(items);
//     }
// })
// //converting node callback function to reactive version:
// const readdir$ = Rx.Observable.bindNodeCallback(fs.readdir); //save it as a function
// readdir$('./dist/routes').subscribe(items=>{console.log(items)}); 
//# sourceMappingURL=appRoutes.js.map