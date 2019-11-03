import moment from 'moment';

export function getMomentCompatibleFormat(d) {
  let tokens = d.split('/');
  return `${tokens[2].trim()}-${tokens[1].trim()}-${tokens[0].trim()}`;
};

export function isCurrentDateBetween(start, end) {
  return !start || !end || moment().isBetween(getMomentCompatibleFormat(start), getMomentCompatibleFormat(end))
}