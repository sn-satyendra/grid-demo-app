import {updateCampaigns} from '../actions/SearchActions';

export function AddCampaigns(c) {
  const campaigns = transformCampaigns(c);
  window.store && window.store.dispatch(updateCampaigns(campaigns));
}

export function addGlobalData() {
  if (window) {
    window.AddCampaigns = AddCampaigns;
  }
}

// The date in sample input is in format MM/DD/YYYY. It needs to be converted into DD/YY/MMMM format
// before being sent to store.
function transformCampaigns(campaigns) {
  let transformed = [];
  campaigns.forEach(c => {
    let startDateTokens = c.startDate.split('/');
    let endDateTokens = c.endDate.split('/');
    transformed.push({
      ...c,
      startDate: `${startDateTokens[1]}/${startDateTokens[0]}/${startDateTokens[2]}`,
      endDate: `${endDateTokens[1]}/${endDateTokens[0]}/${endDateTokens[2]}`,
    });
  });
  return transformed;
}