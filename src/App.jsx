import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import AppHeader from "./components/appheader/appheader";
import BurgerConstructor from "./components/burgerconstructor/burgerconstructor";
import BurgerIngredients from "./components/burgeringredients/burgeringredients";
import Modal from "./components/modal/modal";

function App() {
  const [state, setState] = useState({
    ingredients: null,
    loading: true,
    showpopup: true,
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
      setState({ ...state, showpopup: false });
    }
  };

  const handleMouseDown = () => {
    setState({ ...state, showpopup: false });
  };

  return (
    <div className="App">
      <AppHeader />
      <main>
        {!state.loading && (
          <BurgerConstructor ingredients={state.ingredients} />
        )}
        {!state.loading && (
          <BurgerIngredients ingredients={state.ingredients} />
        )}
      </main>
      <Modal
        showpopup={state.showpopup}
        onClose={() => setState({ ...state, showpopup: false })}
        handleKeyPress={handleKeyPress}
        handleMouseDown={handleMouseDown}
      ></Modal>
      <div id="react-modals"></div>
    </div>
  );
}

export default App;
