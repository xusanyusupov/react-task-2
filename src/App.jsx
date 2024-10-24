import './App.scss'
import Card from './components/card/Card'
import Collection from './components/collection/Collection'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Search from './components/search/Search'
import User from './components/user/User'
 
function App() {


  return (
    <>
      <Header/>
      <Hero/>
      <Collection/>
      <Card/>
      <User/>
      <Search/>
    </>
  )
}

export default App
