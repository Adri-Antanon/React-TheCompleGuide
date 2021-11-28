import { createContext, useState } from "react";

export const ProductsContext = createContext({
  products: [],
  toggleFav: (id) => {},
});

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (productId) => {
    setProductsList((currenteProdList) => {
      const prodIndex = currenteProdList.findIndex((p) => p.id === productId);
      const newFavStatus = !currenteProdList[prodIndex].isFavorite;
      const updatedProducts = [...currenteProdList];
      updatedProducts[prodIndex] = {
        ...currenteProdList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };
  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavorite }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
