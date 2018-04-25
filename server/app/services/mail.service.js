"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const Logger_1 = require("../utils/Logger");
const TAG = 'EmailService';
class EmailService {
    static sendMail(email) {
        //
        return new Promise((resolve, reject) => {
            const url = `https://hen-mailer.herokuapp.com/mail`;
            // const headers = {
            //     "Authorization": `Bearer ${account_bearer}`
            // }
            Logger_1.Logger.d(TAG, `** Sending Email = ${url} **`);
            request.post({
                url: url,
                json: true,
                // headers: headers,
                body: email
            }, (err, res, body) => {
                this.handleResponse(err, res, body, resolve, reject);
            });
        });
    }
    /**======= Private Methods ======= */
    static handleResponse(err, res, body, resolve, reject) {
        if (!res) {
            Logger_1.Logger.d(TAG, 'ERR ==========>server is Probably Down !', 'red');
            return reject(502);
        }
        if (err) {
            Logger_1.Logger.d(TAG, `ERR ==========>${err}`, 'red');
            return reject(err);
        }
        if (res.statusCode > 204) {
            Logger_1.Logger.d(TAG, `ERR ==========>${res.statusCode}${JSON.stringify(body)}`, 'red');
            return reject(res.statusCode);
        }
        resolve(body);
    }
}
exports.EmailService = EmailService;
/*
for example:
{
    "subject": "HI",
    "from": "jhon-doe",
    "to": [ "person@gmail.com"],
    "html":"<b>random message </b>"
}
*/
//# sourceMappingURL=mail.service.js.map