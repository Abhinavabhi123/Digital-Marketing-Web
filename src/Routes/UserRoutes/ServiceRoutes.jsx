import { Route,Routes } from "react-router-dom"
import { MainServicePage, SeoPage } from "../../Pages"

export default function ServiceRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainServicePage/>}/>
      <Route path="/seo" element={<SeoPage/>}/>
    </Routes>
  )
}
