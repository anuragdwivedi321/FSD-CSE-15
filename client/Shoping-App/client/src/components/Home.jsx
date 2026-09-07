import Item from "./Item";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

const products = [
  { image: reactLogo, title: "ReactJS", price: 465 },
  { image: viteLogo, title: "NodeJS", price: 865 },
  { image: reactLogo, title: "ExpressJS", price: 965 },
  { image: viteLogo, title: "ReactJS", price: 435 },
  { image: reactLogo, title: "NodeJS", price: 435 },
  { image: viteLogo, title: "ExpressJS", price: 425 },
];

const Home = () => {
  return (
    <div className="home">
      {products.map((product, index) => (
        <Item
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Home;
