import React from 'react'
import img2 from '../assets/blackshoes.jpeg'
import img3 from '../assets/blackshirt.jpeg'
import img4 from '../assets/jeans.jpeg'
import img5 from '../assets/jordan.jpeg'
import img6 from '../assets/sunglasses.jpeg'
import img7 from '../assets/bat.jpeg'
import img8 from '../assets/csk.jpg'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";


const Home = () => {

  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "1",
    },
    {
      name: "Black Shoes",
      price: 500,
      imgSrc: img2,
      id: "2",
    },
    {
      name: "Black Shirt",
      price: 49,
      imgSrc: img3,
      id: "3",
    },
    {
      name: "Denim Jeans",
      price: 99,
      imgSrc: img4,
      id: "4",
    },
    {
      name: "Nike Jordans",
      price: 999,
      imgSrc: img5,
      id: "5",
    },
    {
      name: "Mens Sunglasses",
      price: 149,
      imgSrc: img6,
      id: "6",
    },
    {
      name: "CEAT Cricket Bat",
      price: 499,
      imgSrc: img7,
      id: "7",
    },
    {
      name: "CSK Jersey",
      price: 49,
      imgSrc: img8,
      id: "8",
    },

  ]

  const dispatch = useDispatch()

  const addToCartHandler = (options) => {
    console.log(options);
    toast.success('Added to cart');
    dispatch({
      type: "addToCart",
      payload: options
    })

    dispatch({
      type: "calculatePrice",
    })
  }

  return (
    <div className='home'>
      {
        productList.map((i) => (
          <ProductCard
            key={i.id}
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            id={i.id}
            handler={addToCartHandler}
          />
        ))
      }
    </div>
  )
}

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img
      src={imgSrc}
      alt={name}
    />
    <p>{name}</p>
    <h4>${price}</h4>
    <button
      onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}
    >Add to Cart</button>
  </div>
)

export default Home
