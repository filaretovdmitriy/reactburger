import React, { useEffect, useRef } from "react";
import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredients(props) {
  const ingredients = props.ingredients.filter(
    (ingredient) => ingredient.type === props.type
  );

  return (
    <div className="burger-ingredients__items mb-10 pl-4 pr-4">
      {ingredients.map((ingredient, i) => {
        return (
          <div className="burger-ingredients__item pr-6 mb-8" key={i}>
            <div className="burger-ingredients__image mb-1">
              <img src={ingredient.image} alt={ingredient.name} />
            </div>
            <div className="burger-ingredients__price mb-1">
              <CurrencyIcon type="primary" />
              <span className="pl-2"> {ingredient.price}</span>
            </div>
            <div className="burger-ingredients__name">{ingredient.name}</div>
          </div>
        );
      })}
    </div>
  );
}

function BurgerConstructor(props) {
  const [current, setCurrent] = React.useState("bun");
  const ingredientCategoryRef = React.useRef([]);

  useEffect(() => {
    ingredientCategoryRef.current[current].scrollIntoView({
      behavior: "smooth",
    });
  }, [current]);

  return (
    <div className="burger-ingredients pt-10">
      <h1 className="mb-5 text_type_main-large">Соберите свой бургер</h1>
      <div className="ingredients__tabs mb-10" style={{ display: "flex" }}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className="burger-ingredients__categories  custom-scroll pl-4 pr-4">
        <div
          className="burger-ingredients__category mb-10"
          ref={(ref) => (ingredientCategoryRef.current["bun"] = ref)}
        >
          <h2>Булки</h2>
          <BurgerIngredients ingredients={props.ingredients} type="bun" />
        </div>
        <div
          className="burger-ingredients__category mb-10"
          ref={(ref) => (ingredientCategoryRef.current["sauce"] = ref)}
        >
          <h2>Соусы</h2>
          <BurgerIngredients ingredients={props.ingredients} type="sauce" />
        </div>
        <div
          className="burger-ingredients__category mb-10"
          ref={(ref) => (ingredientCategoryRef.current["main"] = ref)}
        >
          <h2>Начинки</h2>
          <BurgerIngredients ingredients={props.ingredients} type="main" />
        </div>
      </div>
    </div>
  );
}

export default BurgerConstructor;
