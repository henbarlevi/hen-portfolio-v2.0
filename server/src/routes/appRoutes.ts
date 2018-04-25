import * as express from 'express';
import * as fs from 'fs';
//import * as Rx from 'rxjs';
import * as path from 'path';
import { Logger } from '../utils/Logger';
import { EmailService, IEmail } from '../services/mail.service';

const router: express.Router = express.Router();




router.get('/', (req: express.Request, res: express.Response) => {
    res.send('welcome to server api');
})

router.get('/cv', (req, res) => {
    console.log('download cv');
    res.setHeader('Content-disposition', `attachment; filename=Hen_Fullstack_CV.pdf`);//set the downoaded file name
    res.setHeader('Content-Type', 'application/octet-stream');//prevent user from living the app page
    res.sendFile(path.join(__dirname, '../../../Hen_CV.pdf'));
});


router.post('/email', async (req, res) => {
    try {

        const message: iMessage = req.body;
        Logger.st('appRoutes', 'Message', 'green');
        console.dir(message);
        const email: IEmail = {
            from: 'HenPortfolio',
            subject: 'Job Offer',
            to: ['hen101020@gmail.com'],
            html: `<div>
            <p>Name : ${message.name} </p>
            <p>Email : ${message.emailAddress} </p>
            <p>Phone : ${message.phoneNumber} </p>
            <p>Message: ${message.message} </p>
            </div>`
        }
        await EmailService.sendMail(email);
        Logger.d('appRoutes', 'Message Sent Succefuly', 'green');
        
        res.status(200).end();
    } catch (e) {
        Logger.d('appRoutes', `Err ===> ${e}`, 'red');
        
        res.status(500).send(e);
    }

});

export interface iMessage {
    name: string,
    emailAddress: string,
    phoneNumber: string,
    message: string
}
export default router;


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
