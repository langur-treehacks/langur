import React, { useState } from "react";
import styles from "./WelcomePage.module.css";
import { Navbar } from "../Navbar/Navbar";
import welcomeLangur from "../../assets/images/welcome-langur.png";
import { useNavigate } from "react-router-dom";
import { Slider } from "@mui/material";


const WelcomePage: React.FC = () => {

    const navigate = useNavigate();
    const sampleSentences = [
        "El cielo es azul.",
        "Mi perro se llama Max.",
        "Me gusta cocinar en casa.",
        "Ayer fui al cine con mis amigos.",
        "Estoy aprendiendo a tocar la guitarra.",
        "Viajar a un país extranjero sin conocer el idioma local puede ser desafiante.",
        "Entender la física cuántica requiere un alto nivel de conocimiento matemático.",
        "Resolver un problema de programación complejo puede llevar mucho tiempo.",
        "Escribir una tesis doctoral es un desafío intelectual considerable.",
        "Ganar una medalla de oro en los Juegos Olímpicos representa el pináculo del logro deportivo."
    ];

    const [skillLevel, setSkillLevel] = useState(2);

    const goToFlashCardPage = () => {
        navigate('/flash-card-review');
    }
    const goToPracticeChat = () => {
        navigate('/practice');
    }

    const updateSkillLevel = (event: any, newValue: number | number[]) => {
        setSkillLevel(newValue as number);
    };

    return (
        <div>
            <Navbar />
            <div className={styles.mainScreenAfterNavbar}>
                <div className={styles.welcomeHeader}>
                    <p className={styles.blackLetter}>Welcome</p>
                    <div className={styles.spacer}></div>
                    <p className={styles.whiteLetter}>to</p>
                    <div className={styles.spacer}></div>
                    <p className={styles.blackLetter}>lang</p>
                    <p className={styles.whiteLetter}>ur</p>
                    <p className={styles.blackLetter}>!!!</p>
                </div>
                <img className={styles.welcomeLangurImage} src={welcomeLangur} alt="langur" />
                <div className={styles.welcomeSubHeader}>
                    I will be your language learning assistant. The best part? You won't even know I was there!
                </div>
                <div className={styles.welcomeSubSubHeader}>Select your proficiency level:</div>
                <div className={styles.difficultySliderContainer}>
                    <Slider
                        defaultValue={2}
                        valueLabelDisplay="auto"
                        shiftStep={0.5}
                        step={0.5}
                        marks
                        min={1}
                        max={5}
                        onChange={updateSkillLevel}
                        className={styles.difficultySlider}
                    />
                </div>
                <div className={styles.sampleSentenceContainer}>
                    <p className={styles.sampleSentenceHeader}>Sample Sentence:</p>
                    <p className={styles.sampleSentence}>{sampleSentences[(skillLevel-1) * 2]}</p>
                </div>
                <div className={styles.btnRow}>
                    <button className={styles.btnShowFlashcards} onClick={goToFlashCardPage}>
                        Review my Vocab
                    </button>
                    <button className={styles.btnPracticeChat} onClick={goToPracticeChat}>
                        Let me Practice Speaking
                    </button>
                </div>

            </div>
        </div>
    );
}

export default WelcomePage;