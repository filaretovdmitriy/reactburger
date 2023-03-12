import React from "react";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredients(props) {
  const bun = props.ingredients[0];

  return (
    <>
      <section className="constructor-elements pt-25">
        <div className="constructor-elements__item pl-6">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <div className="constructor-elements__ingredients custom-scroll">
          {props.ingredients.map((ingredient, i) => {
            return (
              <div className="constructor-elements__item">
                <DragIcon type="primary" className="mr-2" />
                <ConstructorElement
                  key={i}
                  isLocked={false}
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </div>
            );
          })}
        </div>
        <div className="constructor-elements__item  pl-6">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <div className="constructor-elements__total">
          <div className="constructor-elements__totalprice mr-10">
            <span className="text text_type_main-medium pr-2">610</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button htmlType="button" type="primary" size="medium">
            Нажми на меня
          </Button>
        </div>
      </section>
    </>
  );
}

export default BurgerIngredients;
