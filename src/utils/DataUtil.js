import {updateCampaigns} from '../actions/SearchActions';

export function AddCampaigns(c) {
  window.store && window.store.dispatch(updateCampaigns(c));
}

export function addGlobalData() {
  if (window) {
    window.AddCampaigns = AddCampaigns;
  }
}