import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
function AppHeader(props) {
  return (
    <>
      <div className="header pt-4 pb-4">
        <div className="header__container">
          <div className="header__nav">
            <div className="header__link p-5 mr-2">
              <BurgerIcon type="primary" />
              <span className="pl-2">Конструктор</span>
            </div>
            <div className="header__link p-5">
              <ListIcon type="secondary" />
              <span className="pl-2">Лента заказов</span>
            </div>
          </div>
          <div className="logo">
            <Logo />
          </div>
          <div className="header__profile">
            <div className="header__link p-5">
              <ProfileIcon type="secondary" />
              <span className="pl-2">Личный кабинет</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppHeader;
