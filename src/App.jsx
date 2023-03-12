import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import AppHeader from "./components/appheader/appheader";
import BurgerConstructor from "./components/burgerconstructor/burgerconstructor";
import BurgerIngredients from "./components/burgeringredients/burgeringredients";
import Modal from "./components/modal/modal";
import OrderDetails from "./components/orderdetails/orderdetails";

function App() {
  const [state, setState] = useState({
    ingredients: null,
    loading: true,
    showOrderPopup: false,
    showIngredientPopup: false,
    activeIngredient: null,
  });

  useEffect(() => {
    const getIngredients = async () => {
      setState({ ...state, loading: true });
      const res = await fetch(
        "https://norma.nomoreparties.space/api/ingredients"
      );
      const data = await res.json();
      setState({ ...state, ingredients: data.data, loading: false });
    };
    getIngredients();
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      setState({ ...state, showOrderPopup: false });
    }
  };

  const handleMouseDown = () => {
    setState({ ...state, showOrderPopup: false });
  };

  const showOrderModal = () => {
    setState({ ...state, showOrderPopup: true });
  };

  const showIngredientModal = () => {
    setState({ ...state, showIngredientPopup: true });
  };

  return (
    <div className="App">
      <AppHeader />
      <main>
        {!state.loading && (
          <BurgerConstructor
            ingredients={state.ingredients}
            showIngredientModal={showIngredientModal}
          />
        )}
        {!state.loading && (
          <BurgerIngredients
            ingredients={state.ingredients}
            showOrderModal={showOrderModal}
            activeIngredient={state.activeIngredient}
          />
        )}
      </main>
      <Modal
        showpopup={state.showOrderPopup}
        onClose={() => setState({ ...state, showOrderPopup: false })}
        handleKeyPress={handleKeyPress}
        handleMouseDown={handleMouseDown}
      >
        фывфывфыв
        <OrderDetails />
      </Modal>

      <Modal
        showpopup={state.showIngredientPopup}
        onClose={() => setState({ ...state, showIngredientPopup: false })}
        handleKeyPress={handleKeyPress}
        handleMouseDown={handleMouseDown}
      >
        111
      </Modal>

      <div id="react-modals"></div>
    </div>
  );
}

export default App;
