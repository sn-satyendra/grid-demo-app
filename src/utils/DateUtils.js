import moment from 'moment';

export function getMomentCompatibleFormat(d) {
  if (!d) return '';
  const tokens = d.split('/');
  return `${tokens[2].trim()}-${tokens[1].trim()}-${tokens[0].trim()}`;
};

export function isCurrentDateBetween(currentDate, start, end) {
  return !start ||
    !end || 
    moment(
      getMomentCompatibleFormat(currentDate)).isBetween(
        getMomentCompatibleFormat(start),
        getMomentCompatibleFormat(end)
      );
}

export function isSameOrAfter(d1, d2) {
  return moment(d1).isSameOrAfter(d2);
}

export function isSameOrBefore(d1, d2) {
  return moment(d1).isSameOrBefore(d2);
}