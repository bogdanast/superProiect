import moment from 'moment';
import '/imports/api/donuts/methods.js';
import '/imports/api/donuts/publication.js';
import { Email } from 'meteor/email';

console.log("nais");
console.log(moment(new Date()).format('DD-MM-YYYY-H-M'));

process.env.MAIL_URL = "smtps://postmaster%40sandbox5dff6e07cc2246839d37d566a97abd91.mailgun.org:f1c9d5b1c6c74ec44bdb245e07046a53@smtp.mailgun.org";

