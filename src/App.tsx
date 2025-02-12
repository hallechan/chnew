import Navigate from "./Navigate"
import Footer from "./Footer"
import { Analytics } from '@vercel/analytics/next';

function App() {
  return (
    <>
    <div className="marble deffont">
      <Navigate/>
      <Footer/>
      <Analytics/>
    </div>   
    </>
  )
}

export default App
