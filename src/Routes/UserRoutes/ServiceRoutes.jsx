import { Route,Routes } from "react-router-dom"
import { AdvertisingPage, AffiliateMarketingPage, ContentMarketingPage, EmailMarketingPage, MainServicePage, SeoPage, SocialMediaPage } from "../../Pages"

export default function ServiceRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainServicePage/>}/>
      <Route path="/seo" element={<SeoPage/>}/>
      <Route path="/content-marketing" element={<ContentMarketingPage/>}/>
      <Route path="/email-marketing" element={<EmailMarketingPage/> }/>
      <Route path="/advertising" element={<AdvertisingPage/>}/>
      <Route path="/affiliate-marketing" element={<AffiliateMarketingPage/>}/>
      <Route path="/social-media" element={<SocialMediaPage/>}/>
    </Routes>
  )
}
