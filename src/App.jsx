import Banner from './components/banner/Banner.jsx'
import Feature from './components/features/Feature.jsx'
import Financy from './components/financy/Financy.jsx'
import Footer from './components/footer/Footer.jsx'
import Navb from './components/navbar/Navb.jsx'
import Fea_one from './components/our feature/Fea_one.jsx'
import Testimonials from './components/testimonials/Testimonials.jsx'
import Choose from './components/why choose/Choose.jsx'

const App = () => {
  return (
    <>
        <Navb/>
        <Banner/>
        <Feature/>
        <Testimonials/>
        <Fea_one/>
        <Financy/>
        <Choose/>
        <Footer/>
    </>
  )
}

export default App