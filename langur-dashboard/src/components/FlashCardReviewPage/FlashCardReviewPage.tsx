import React from "react";
import { FlashCard } from "./FlashCard";
import styles from "./FlashCardReviewPage.module.css";
import { Navbar } from "../Navbar/Navbar";

const FlashCardReviewPage: React.FC = () => {
    return(
        <div>
            <Navbar/>
            <FlashCard/>
        </div>
    );
}

export default FlashCardReviewPage;