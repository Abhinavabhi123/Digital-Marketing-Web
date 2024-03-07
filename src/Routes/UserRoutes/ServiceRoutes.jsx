import { Route,Routes } from "react-router-dom"
import { ContentMarketingPage, MainServicePage, SeoPage } from "../../Pages"

export default function ServiceRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainServicePage/>}/>
      <Route path="/seo" element={<SeoPage/>}/>
      <Route path="/content-marketing" element={<ContentMarketingPage/>}/>
    </Routes>
  )
}
