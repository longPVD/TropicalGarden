import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Header = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-green-800 text-white z-20">
      {" "}
      <Link to="/" className="text-2xl font-bold">
        Tropical Garden
      </Link>{" "}
      <nav>
        {" "}
        <Link to="/products" className="mr-4">
          Products
        </Link>{" "}
        <Link to="/cart" className="relative">
          {" "}
          <ShoppingCartOutlined style={{ fontSize: "24px" }} />{" "}
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 text-sm bg-red-500 rounded-full px-2">
              {" "}
              {totalItems}{" "}
            </span>
          )}{" "}
        </Link>{" "}
      </nav>{" "}
    </header>
  );
};

export default Header;
