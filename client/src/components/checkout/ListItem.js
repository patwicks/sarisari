import React from 'react'
import { MdDelete } from "react-icons/md";
import useCartStore from '../../store/cartStore';
const ListItem = () => {
    const { cart, removeToCart, decreaseQuantity, increaseQuantity } = useCartStore((state) => state)
  return (
    <div className=" max-h-[300px] w-full min-w-[288px] overflow-scroll ">
        <table className="mt-2 w-full border-collapse">
          <thead>
            <tr className="fint-semibold text-left text-sm text-blacky/70">
              <th className="hidden md:block">Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((product, index) => {
              const { name, sellPrice, image, _id: itemID } = product.item;
              return (
                <tr key={index}>
                  <td className="hidden md:block">
                    <div className="h-8 w-8 overflow-hidden rounded-full border">
                      <img
                        className="h-full w-full object-center"
                        src={image[0].url}
                        alt="product"
                      />
                    </div>
                  </td>
                  <td className="text-sm">{name}</td>
                  <td className="text-sm">₱ {sellPrice}</td>
                  <td className="text-sm">{product.quantity}</td>
                  <td className="text-sm font-semibold">{product.total}</td>
                  <td>
                    <div className="flex gap-x-1">
                      <button
                        className="h-7 w-7 rounded-sm bg-blacky/70 text-xl text-white outline-none"
                        onClick={() => decreaseQuantity(itemID, cart)}
                      >
                        -
                      </button>
                      <button
                        className="h-7 w-7 rounded-sm bg-blacky/70 text-xl text-white outline-none"
                        onClick={() => increaseQuantity(itemID, cart)}
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td>
                    <div className=" center h-7 w-7 rounded-sm bg-blacky/70 text-white">
                      <MdDelete
                        className="cursor-pointer text-lg hover:text-red-400"
                        onClick={() => removeToCart(itemID, cart)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  )
}

export default ListItem