import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";


export const Navbar: React.FC = () => {

    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate('/');
    }

    return(
        <nav className={styles.navbarBody}>
            <div className={styles.homeButton} onClick={goToHomePage}>
                <p className={styles.firstHalfHomeButtonText}>lang</p><p className={styles.secondHalfHomeButtonText}>ur</p>
            </div>
        </nav>
    );
}