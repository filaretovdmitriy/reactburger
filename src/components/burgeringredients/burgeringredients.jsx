import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredients(props) {
  const img = "";
  return (
    <>
      <div className="constructor-elements">
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <ConstructorElement
            type="top"
            isLocked={true}
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
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={img}
          />
        </div>
      </div>
    </>
  );
}

export default BurgerIngredients;
