import React, {useState} from 'react'
import TopBar from './Components/TopBar'
import Product from './Components/Product'

function App() {

  let data = [
    {
      name: "Smart Phone",
      price: "$1200"
    },
    {
      name: "Charging Adapter",
      price: "$100"
    },
    {
      name: "AKG Earphone",
      price: "$80"
    },
    {
      name: "Laptop",
      price: "$5000"
    }
  ]

  let [cart, setCart] = useState(0);
  return <>
    <TopBar cart={cart}/>
    <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">Shop in style</h1>
                <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
        </div>
    </header>
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {data.map((e, i)=>{
                  return <Product data={e} key={i} cart={cart} setCart={setCart}/>
                })}
            </div>
        </div>
    </section>
  </>
}

export default App