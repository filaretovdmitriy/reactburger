import React from "react";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredients(props) {
  const img = "";
  return (
    <>
      <section className="constructor-elements pt-25">
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={img}
          />
        </div>
        <div
          className="constructor-elements__ingredients custom-scroll mt-3 mb-3"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <ConstructorElement
            type="top"
            isLocked={false}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={img}
          />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={img}
          />
          <ConstructorElement
            type="bottom"
            isLocked={false}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={img}
          />
          <ConstructorElement
            type="bottom"
            isLocked={false}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={img}
          />
          <ConstructorElement
            type="bottom"
            isLocked={false}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={img}
          />
          <ConstructorElement
            type="bottom"
            isLocked={false}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={img}
          />
          <ConstructorElement
            type="bottom"
            isLocked={false}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={img}
          />
          <ConstructorElement
            type="bottom"
            isLocked={false}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={img}
          />
          <ConstructorElement
            type="bottom"
            isLocked={false}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={img}
          />
        </div>
        <div
          className="mb-10"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={img}
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
