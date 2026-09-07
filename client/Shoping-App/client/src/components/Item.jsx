import "./Item.css";

const Item = ({ image, title = "Item", price = 0 }) => {
  return (
    <div className="card">
      <img src={image} width={100} height={100} alt="Item Image" />
      <h2>Title: {title}</h2>
      <h3>Price: {price}/-</h3>
      <button>Add to Cart</button>
    </div>
  );
};

export default Item;
