import Button from "./common/Button";
import { purchaseCartItems } from "../apis/itemApi";

const Footer = ({ cartItems }) => {
  const handlePurchase = () => {
    purchaseCartItems(cartItems).then((data) => {
      console.log("장바구니 상품 구매 완료");
      console.log(cartItems);
      console.log(data);
    });
  };
  return (
    <div className="flex flex-col w-full justify-center mt-20">
      <Button varients="primary" onClick={handlePurchase}>
        장바구니 구매하기
      </Button>
    </div>
  );
};

export default Footer;
