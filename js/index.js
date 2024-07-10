// console.log('Seocho');
import moment from 'moment';

export const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());

const LOCALE_MAPPER = {
  korea: 'ko',
  japan: 'ja',
  english: 'en',
};

export function fromNow(dt, locale = 'korea') {
    
    : localecode =

  moment.locale(locale);
  return momeny(dt).fromNow();
}

Array.prototypefirst = function () {
  return this[0];
};
