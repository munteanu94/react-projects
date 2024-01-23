import "./Products.css";
import { FaArrowRightLong } from "react-icons/fa6";
import images from "./images.json";

export default function Products() {
  return (
    <div className="containerProducts">
      <h2>Our Products</h2>
      <div className="buttons">
        <button className="active">Top</button>
        <button>Bottom</button>
        <button>Dress</button>
        <button>Set</button>
        <button>Knit</button>
        <button>Outer</button>
      </div>

      <div className="products">
        {images &&
          images.map((record) => {
            return (
              <div className="cart" key={record.id}>
                <img src={record.src} />
                <p>{record.title}</p>
                <p>{record.price}</p>
              </div>
            );
          })}
      </div>
      <div className="btnSeeMore">
        <button>
          SEE MORE <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}
