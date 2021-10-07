import classes from "./styles.module.css";
import { DUMMY_MEALS } from "../../../config/constants";
import { Card } from "../../UI";
import { MealItem } from "..";

export const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
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
