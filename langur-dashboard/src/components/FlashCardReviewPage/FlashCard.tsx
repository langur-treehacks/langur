import React, { useEffect, useState } from "react";
import styles from "./FlashCard.module.css";
import ReactCardFlip from 'react-card-flip';

interface flashCardProps {
    targetWord?: string;
    translation?: string;
}

const FlashCard = (props: flashCardProps) => {

    const [isRevealed, setIsRevealed] = useState(false);
    const targetWord = props.targetWord || "Gracias";
    const translation = props.translation || "Thank You";

    const handleReveal = () => {
        setIsRevealed(!isRevealed);
    }

    return(
        <div className={styles.cardFlipContainer}>
            <ReactCardFlip isFlipped={isRevealed} flipDirection="vertical">
                <div className={styles.flashCardFront} onClick={handleReveal}>
                    <p className={styles.targetWord}>{targetWord}</p>
                </div>
                <div className={styles.flashCardBack} onClick={handleReveal}>
                    <p className={styles.translatedWord}>{translation}</p>
                </div>
            </ReactCardFlip>
        </div>
    );
}

export default FlashCard;