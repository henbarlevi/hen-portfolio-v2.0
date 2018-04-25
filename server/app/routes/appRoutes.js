"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
//import * as Rx from 'rxjs';
const path = require("path");
const router = express.Router();
router.get('/', (req, res) => {
    res.send('welcome to server api');
});
router.get('/cv', (req, res) => {
    console.log('download cv');
    res.sendFile(path.join(__dirname, '../../Hen_CV.pdf'));
});
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