import './App.css'
import AuthButtons from './AuthButtons'
import SponseeOrgButtons from './SponseeOrgButtons'
import SponseeAttractionTester from './SponseeAttractionTester'
import SponsorOrgButtons from './SponsorOrgButtons'
import SponsorCampaignTester from './SponsorCampaignTester'
import CampaignFeedTester from './CampaignFeedTester'
import AttractionFeedTester from './AttractionFeedTester'

function App() {
  return (
    <div className=' Ttile  bg-zinc-900 '>
      <SponsorOrgButtons/>
      <SponsorCampaignTester />
      <AuthButtons />
      <SponseeOrgButtons />
      <SponseeAttractionTester/>
      <CampaignFeedTester />
    </div>
  )
}

export default App
