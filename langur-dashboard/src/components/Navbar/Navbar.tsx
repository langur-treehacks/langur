import React from "react";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
    return(
        <nav className={styles.navbarBody}>
            <div className={styles.homeButton}>
                <p className={styles.firstHalfHomeButtonText}>lang</p><p className={styles.secondHalfHomeButtonText}>ur</p>
            </div>
        </nav>
    );
}