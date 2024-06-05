var moment = require('moment');
// import moment from 'moment';

const locale = 'ko';
moment.locale('ko');

const d = new Date();
console.log('🚀 ~ d:', d.toLocaleString);
const m = moment();
console.log('🚀 ~ m:', m.format('LLL'));
console.log('🚀 ~ m:', m.format('dddd'));
console.log('🚀 ~ m:', m.format('YYYY-MM-DD(ddd) hh:mm:ss'));

const writtenDate = moment('2024-04-30');
console.log('🚀 ~ writtenDate:', writtenDate.fromNow());
