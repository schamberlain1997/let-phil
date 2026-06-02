import ProblemCard from "../extras/ProblemCard";

export const PriceGreaterThan20 = () => {
  const products = [
    { id: 1, name: "Sticker Pack", price: 5 },
    { id: 2, name: "Keyboard", price: 55 },
    { id: 3, name: "Mousepad", price: 22 },
  ];

  const filteredProducts = products.filter((product) => product.price > 20)

  return (
    <ProblemCard
      title="Filter 04 — Filter by value"
      method="filter"
      question="Render products with price > 20."
      dataPreview={products}
    >{filteredProducts.map((product)=>(
      <div>{product.name}</div>))}
    </ProblemCard>
  );
};
