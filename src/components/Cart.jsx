import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

    const { cartItems, subTotal, tax, shipping, total } = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const increment = (id) => {
        dispatch({
            type: "addToCart",
            payload: { id },
        })
        dispatch({
            type: "calculatePrice",
        })
    }

    const decrement = (id) => {
        dispatch({
            type: "decrement",
            payload: id,
        })
        dispatch({
            type: "calculatePrice",
        })
    }

    const deleteHandler = (id) => {
        dispatch({
            type: "deleteFromCart",
            payload: id,
        })
        dispatch({
            type: "calculatePrice",
        })
    }

    return (
        <div className='cart'>
            <main>
                {
                    cartItems.length > 0 ? (
                        cartItems.map((i) => (
                            <CartItem
                                imgSrc={i.imgSrc}
                                name={i.name}
                                price={i.price}
                                qty={i.quantity}
                                id={i.id}
                                key={i.id}
                                increment={increment}
                                decrement={decrement}
                                deleteHandler={deleteHandler}
                            />
                        ))
                    ) : (
                        <h1>No Items yet</h1>
                    )
                }

            </main>

            <aside>
                <h2>Subtotal : ${subTotal}</h2>
                <h2>Shipping : ${shipping}</h2>
                <h2>Tax : ${tax}</h2>
                <h2>Total : ${total}</h2>
            </aside>
        </div>
    )
}

const CartItem = ({
    imgSrc,
    name,
    price,
    qty,
    decrement,
    increment,
    deleteHandler,
    id
}) => (
    <div className="cartItem">
        <img src={imgSrc} alt='item' />
        <article>
            <h3>{name}</h3>
            <h3>${price}</h3>
        </article>

        <div>
            <button onClick={() => decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={() => increment(id)}>+</button>
        </div>

        <AiFillDelete onClick={() => deleteHandler(id)} />
    </div>
)

export default Cart
