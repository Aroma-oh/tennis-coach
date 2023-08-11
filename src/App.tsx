import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Feature1 } from './components/Feature1'
import './global.css'
function App() {

  return (
    <>
      <Navbar brandName={'BeTe'} buttonText={'등록하기'} />
      <Hero />
      <Feature1 />
    </>
  )
}

export default App
