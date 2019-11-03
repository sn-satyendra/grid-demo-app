import moment from 'moment';

export function getMomentCompatibleFormat(d) {
  let tokens = d.split('/');
  return `${tokens[2]}-${tokens[1]}-${tokens[0]}`;
};

export function isCurrentDateBetween(start, end) {
  return !start || !end || moment().isBetween(getMomentCompatibleFormat(start), getMomentCompatibleFormat(end))
}