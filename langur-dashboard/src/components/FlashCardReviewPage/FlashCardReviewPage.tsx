import React, { useEffect, useState } from "react";
import FlashCard from "./FlashCard";
import styles from "./FlashCardReviewPage.module.css";
import { Navbar } from "../Navbar/Navbar";
import leftArrow from "../../assets/images/left-arrow.png";
import blackLeftArrow from "../../assets/images/black-left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import blackRightArrow from "../../assets/images/black-right-arrow.png";
import { useNavigate } from "react-router-dom";

const FlashCardReviewPage: React.FC = () => {

    const getWords = () => {
        const words = {
            "Gracias": "Thank you",
            "Hola": "Hello",
            "Adios": "Goodbye"
        }
        return words;
    }
    const words = getWords();

    const navigate = useNavigate();

    const goToArticle = () => {
        navigate('https://www.google.com/');
    }

    const [currWord, setCurrWord] = useState(0);
    const [mouseEnterLeft, setMouseEnterLeft] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(true);
    const [mouseEnterRight, setMouseEnterRight] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    useEffect(() => {
        if (currWord == 0)
        {
            setShowLeftArrow(false);
        }
        else
        {
            setShowLeftArrow(true);
        }

        if (currWord == Object.keys(words).length - 1)
        {
            setShowRightArrow(false);
        }
        else
        {
            setShowRightArrow(true);
        }
    });

    const handleLeftArrowClick = () => {
        if (currWord == 0)
        {
            setCurrWord(currWord);
        }
        else
        {
            setCurrWord(currWord - 1);
        }
    }
    const handleLeftArrowMouseEnter = () => {
        setMouseEnterLeft(true);
    }
    const handleLeftArrowMouseLeave = () => {
        setMouseEnterLeft(false);
    }

    const handleRightArrowClick = () => {
        if (currWord == Object.keys(words).length - 1)
        {
            setCurrWord(currWord);
        }
        else
        {
            setCurrWord(currWord + 1);
        }
    }
    const handleRightArrowMouseEnter = () => {
        setMouseEnterRight(true);
    }
    const handleRightArrowMouseLeave = () => {
        setMouseEnterRight(false);
    }

    return(
        <div>
            <Navbar/>
            <div className={styles.mainScreenAfterNavbar}>
                <div className={styles.welcomeHeader}>
                    <p className={styles.whiteLetter}>Review</p>
                    <div className={styles.spacer}></div>
                    <p className={styles.blackLetter}>time</p>
                    <p className={styles.whiteLetter}>!</p>
                </div>
                <div className={styles.reviewSection}>
                    <div 
                        className={styles.arrowContainer} 
                        onClick={handleLeftArrowClick} 
                        onMouseEnter={handleLeftArrowMouseEnter}
                        onMouseLeave={handleLeftArrowMouseLeave}
                    >
                        <img
                            className={styles.arrow}
                            src={
                                showLeftArrow ?
                                mouseEnterLeft ? blackLeftArrow : leftArrow
                                : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            }
                        />
                    </div>
                    <FlashCard 
                        targetWord={Object.entries(words)[currWord][0]}
                        translation={Object.entries(words)[currWord][1]}
                    />
                    <div 
                        className={styles.arrowContainer} 
                        onClick={handleRightArrowClick}
                        onMouseEnter={handleRightArrowMouseEnter}
                        onMouseLeave={handleRightArrowMouseLeave}    
                    >
                        <img
                            className={styles.arrow}
                            src={
                                showRightArrow ?
                                mouseEnterRight ? blackRightArrow : rightArrow
                                : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            }
                        />
                    </div>
                </div>
                <button className={styles.btnShowFlashcards} onClick={goToArticle}>
                    I'm satisfied. Give me something to read!
                </button>
            </div>
        </div>
    );
}

export default FlashCardReviewPage;