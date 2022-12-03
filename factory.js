import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x05C6B3b5cc8A76041b1fDF33be550B7f6b0daD1E'
);

export default instance;
