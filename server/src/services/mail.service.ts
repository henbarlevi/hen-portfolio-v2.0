import * as request from 'request'
import { Logger } from '../utils/Logger';
const TAG: string = 'EmailService'
export class EmailService {
    static sendMail(email: IEmail): Promise<string> {
        //
        return new Promise((resolve, reject) => {

            const url: string = `https://hen-mailer.herokuapp.com/mail`;
            // const headers = {
            //     "Authorization": `Bearer ${account_bearer}`
            // }
            Logger.d(TAG, `** Sending Email = ${url} **`);
            request.post({
                url: url,
                json: true,
                // headers: headers,
                body: email
            }, (err, res, body) => {
                this.handleResponse(err, res, body, resolve, reject);
            })
        });
    }
    /**======= Private Methods ======= */
    private static handleResponse(err, res, body, resolve, reject) {
        if (!res) {
            Logger.d(TAG, 'ERR ==========>server is Probably Down !', 'red');
            return reject(502);
        }
        if (err) {
            Logger.d(TAG, `ERR ==========>${err}`, 'red');
            return reject(err);
        }
        if (res.statusCode > 204) {
            Logger.d(TAG, `ERR ==========>${res.statusCode}${JSON.stringify(body)}`, 'red');
            return reject(res.statusCode);
        }
        resolve(body);
    }
}


/*generic structure to send mail with nodemailer*/
export interface IEmail {
    from: string,//sender name
    to: string[]//mail addresses
    subject: string,//email subject
    //contain at least one of the following:
    text?: string,//regular text
    html?: string//  embeded html message
}
    /*
    for example:
    {
        "subject": "HI",
        "from": "jhon-doe",
        "to": [ "person@gmail.com"],
        "html":"<b>random message </b>"
    }
    */


