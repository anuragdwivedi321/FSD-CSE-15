const Home = () => {
  const books = [
    {
      id: 1,
      title: "React",
      price: "$29.99",
      image: "data:image/png;base64,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",
    },
    {
      id: 2,
      title: "MongoDB",
      price: "$39.99",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN6mcER4x2tazyPFEQcI8q0ju2QvTozWEflepdYy4ZKQ&s=10",
    },
    {
      id: 3,
      title: "JavaScript",
      price: "$24.99",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmnsjWZw-SapWpOxx4gn3UT8KO9RR97gx13tJAQL4-A&s=10"
    },
    {
      id: 4,
      title: "DSA",
      price: "$34.99",
      image: "https://d24f1whwu8r3u4.cloudfront.net/assets/book-covers/advanced_dsa-fb65d5673d72e21aced20d498635d0d084f355f8a54263a78eb667cf34db8edf.png",
    },
    {
      id: 5,
      title: "HTML",
      price: "$19.99",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQFJbNd-QTwj6g9ouZtUkOxOjTdfjTUcfsuuoEEST9w&s=10",
    },
    {
      id: 6,
      title: "CSS",
      price: "$24.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEb6EBvrSxRA716STaLlkrNgj8eh3PKElEAXdv1osyw&s=10",
            },
  ];

  return (
    <div className="home">
      <div className="books-container">
        <h1>Featured Books</h1>
        <div className="books-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} className="book-cover" />
              <h3>{book.title}</h3>
              <p className="price">{book.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
