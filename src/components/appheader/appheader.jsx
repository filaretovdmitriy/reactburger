import React from "react";
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './styles.appheader.css'
function AppHeader(props) {
    return <>
        <header>
            <div className="header__container">
                <div className="header__navigation">
                    <div>

                    </div>
                </div>
                <div className="header-logo">
                    <Logo />
                </div>
                <div>

                </div>

            </div>
        </header>


    </>
}

export default AppHeader;