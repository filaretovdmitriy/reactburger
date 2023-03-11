import React, { useEffect } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
function BurgerConstructor(props) {
  const [current, setCurrent] = React.useState("one");
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div className="burger-ingredients">
      <h1>Соберите свой бургер</h1>
      <div className="ingredients__tabs" style={{ display: "flex" }}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className="burger-ingredients__categories">
        <div className="burger-ingredients__category">
          <h2>Булки</h2>
          <div className="burger-ingredients__items">
            {props.ingredients.map((ingredient, i) => {
              return (
                <div className="burger-ingredients__item">
                  <div className="burger-ingredients__image">
                    <img src={ingredient.image} alt={ingredient.name} />
                  </div>
                  <div className="burger-ingredients__price">
                    {ingredient.price}
                  </div>
                  <div className="burger-ingredients__name">
                    {ingredient.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <h2>Соусы</h2>
        <h2>Начинки</h2>
      </div>
    </div>
  );
}

export default BurgerConstructor;
