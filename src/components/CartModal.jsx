import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
import Cart from './Cart'
import { CartContext } from '../store/Shopping-cart-context'
import { useContext } from 'react'

const CartModal = forwardRef(function Modal(
    { cartItems, onUpdateCartItemQuantity, title, actions },
    ref
) {
    const dialog = useRef()
    const { items } = useContext(CartContext)
    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal()
            },
        }
    })

    return createPortal(
        <dialog id="modal" ref={dialog}>
            <h2>{title}</h2>
            <Cart
                items={cartItems}
                onUpdateItemQuantity={onUpdateCartItemQuantity}
            />
            <form method="dialog" id="modal-actions">
                {actions}
            </form>
        </dialog>,
        document.getElementById('modal')
    )
})

export default CartModal
