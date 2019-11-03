import * as TYPES from './ActionTypes';

export function onStartDateChange(d) {
  return {
    type: TYPES.ON_START_DATE_CHANGE,
    data: d
  };
}

export function onEndDateChange(d) {
  return {
    type: TYPES.ON_END_DATE_CHANGE,
    data: d
  };
}

export function onNameChange(name) {
  return {
    type: TYPES.ON_NAME_CHANGE,
    data: name
  };
}

export function onSearch() {
  return {
    type: TYPES.ON_SEARCH
  };
}