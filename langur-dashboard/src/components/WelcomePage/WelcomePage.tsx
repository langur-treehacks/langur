import React from "react";
import styles from "./WelcomePage.module.css";
import { Navbar } from "../Navbar/Navbar";
import welcomeLangur from "../../assets/images/welcome-langur.png";
import { useNavigate } from "react-router-dom";


const WelcomePage: React.FC = () => {

    const navigate = useNavigate();

    const goToFlashCardPage = () => {
        navigate('/flash-card-review');
    }

    return(
        <div>
            <Navbar/>
            <div className={styles.mainScreenAfterNavbar}>
                <div className={styles.welcomeHeader}>
                    <p className={styles.blackLetter}>W</p>
                    <p className={styles.whiteLetter}>e</p>
                    <p className={styles.blackLetter}>l</p>
                    <p className={styles.whiteLetter}>c</p>
                    <p className={styles.blackLetter}>o</p>
                    <p className={styles.whiteLetter}>m</p>
                    <p className={styles.blackLetter}>e</p>
                    <div className={styles.spacer}></div>
                    <p className={styles.blackLetter}>t</p>
                    <p className={styles.whiteLetter}>o</p>
                    <div className={styles.spacer}></div>
                    <p className={styles.blackLetter}>lang</p>
                    <p className={styles.whiteLetter}>ur</p>
                    <p className={styles.blackLetter}>!!!</p>
                </div>
                <img className={styles.welcomeLangurImage} src={welcomeLangur} alt="langur"/>
                <div className={styles.welcomeSubHeader}>
                    I will be your language learning assistant. The best part? You won't even know I was there!
                </div>
                <button className={styles.btnShowFlashcards} onClick={goToFlashCardPage}>
                    Review my Vocab
                </button>
            </div>
        </div>
    );
}

export default WelcomePage;