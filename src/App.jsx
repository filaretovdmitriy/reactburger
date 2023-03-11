import React, { useEffect, useState } from "react";
import "./App.css";
import AppHeader from "./components/appheader/appheader";
import BurgerConstructor from "./components/burgerconstructor/burgerconstructor";
import BurgerIngredients from "./components/burgeringredients/burgeringredients";

function App() {
  const ingredients = null;

  const [state, setState] = useState({
    ingredients: null,
    loading: true,
  });

  useEffect(() => {
    const getIngredients = async () => {
      setState({ ...state, loading: true });
      const res = await fetch(
        "https://norma.nomoreparties.space/api/ingredients"
      );
      const data = await res.json();
      setState({ ingredients: data.data, loading: false });
    };

    getIngredients();
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main>
        {!state.loading && (
          <BurgerConstructor ingredients={state.ingredients} />
        )}
        {!state.loading && <BurgerIngredients />}
      </main>
      <div id="react-modals"></div>
    </div>
  );
}

export default App;
