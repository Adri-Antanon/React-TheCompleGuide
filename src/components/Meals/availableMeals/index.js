import { useEffect, useState, useCallback } from "react";
import classes from "./styles.module.css";
import { Card } from "../../UI";
import { MealItem } from "..";

const DB_URL =
  "https://reactthecompleteguide-72d27-default-rtdb.firebaseio.com/meals.json";

export const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMealsHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(DB_URL);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMealsHandler();
  }, [fetchMealsHandler]);

  const mealList = isLoading
    ? []
    : meals.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
