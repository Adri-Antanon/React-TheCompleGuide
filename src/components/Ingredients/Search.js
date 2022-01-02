import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import "./Search.css";
import { BASE_URL } from "../../config/constants";

const Search = React.memo(({ onLoadIngredients }) => {
  const [enteredFilter, setEnteredFilter] = useState("");

  useEffect(() => {
    const loadIngredients = async () => {
      const query =
        enteredFilter.length === 0
          ? ""
          : `?orderBy="title"&equalTo="${enteredFilter}"`;
      const response = await fetch(BASE_URL + query);
      const responseData = await response.json();
      const loadedIngredients = [];
      for (const key in responseData) {
        loadedIngredients.push({
          id: key,
          title: responseData[key].title,
          amount: responseData[key].amount,
        });
      }

      onLoadIngredients(loadedIngredients);
    };

    loadIngredients();
  }, [onLoadIngredients, enteredFilter]);

  const onChangeFilter = (event) => {
    event.preventDefault();

    setEnteredFilter(event.target.value);
  };
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={enteredFilter} onChange={onChangeFilter} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
