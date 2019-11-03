// eslint-disable-next-line no-unused-vars
let campaigns = [];

export function AddCampaigns(c) {
  campaigns = campaigns.concat(c);
  return campaigns;
}

if (window) {
  window.AddCampaigns = AddCampaigns;
}
