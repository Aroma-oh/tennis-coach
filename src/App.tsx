import { Navbar } from 'sections/Navbar'
import { Hero } from 'sections/Hero'
import { Feature1 } from 'sections/features/Feature1'
import { Feature2 } from 'sections/features/Feature2'
import { Feature3 } from 'sections/features/Feature3'
import { Feature4 } from 'sections/features/Feature4'
import { Contact } from 'sections/Contact'
import { Footer } from 'sections/Footer'
import { GaTracker } from 'GaTracker'
import './global.css'
function App() {
  GaTracker();
  return (
    <>
      <Navbar brandName={'BeTe'} buttonText={'등록하기'} />
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Contact />
      <Footer />
    </>
  )
}

export default App
