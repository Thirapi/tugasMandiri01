import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import dataProduct from './dataProduct.js'
import './App.css'

function App() {
  const products = dataProduct.map((product) => {
    return (
      <Card 
      key={product.id}
      {...product}
      />
    )
  })
  return (
    <div>
    <Header />
    <Main />
    <section>
      {products}
    </section>
    <Footer />
    </div>
  )
}

export default App
