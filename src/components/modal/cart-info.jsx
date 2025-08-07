import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createOrder } from "../../redux/cartSlice";
const CartInfo = ({ cart, close }) => {
  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );
  const shipping = subTotal > 100 || subTotal === 0 ? 0 : 20;
  const total = subTotal + shipping;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(createOrder());
    toast.success("Ürünler Hazırlanıyor...");
    close();
  };
  return (
    <div className="fs-5 py-5 text-lg">
      <p className="flex justify-between">
        <span className="text-gray-500 font-semibold">Ara Toplam</span>
        <span data-testid="subtotal" className="font-semibold text-gray-700">{subTotal}</span>
      </p>

      <p className="flex justify-between">
        <span className="text-gray-500 font-semibold">Kargo</span>
        <span data-testid="shipping" className="font-semibold text-gray-700">{subTotal > 100 ? "Ücretsiz": shipping} </span>
      </p>
      <p className="flex justify-between">
        <span className="text-gray-500 font-semibold">Toplam</span>
        <span data-testid="total" className="font-semibold text-gray-700">{total} ₺</span>
      </p>
      <button
        disabled={subTotal === 0}
        onClick={handleClick}
        className="bg-red-500 mt-4 w-full p-2 rounded-md text-white hover:bg-red-500 transition"
      >
        Sipariş Ver
      </button>
    </div>
  );
};

export default CartInfo;
