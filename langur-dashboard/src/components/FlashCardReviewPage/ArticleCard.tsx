import React from "react";
import styles from "./ArticleCard.module.css";

interface articleCardProps {
    imgSource?: string,
    articleHeader?: string,
    articleSummary?: string
}

const ArticleCard = (props: articleCardProps) => {

    const imgSource = props.imgSource || "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-760x428,f_auto,q_auto:best/mpx/2704722219/2024_01/1705980806896_n_maddow_maddow_240122_1920x1080-gb43nt.jpg";
    const articleHeader = props.articleHeader || "The end of politics': Donald Trump makes simple offer to voters";
    const articleSummary = props.articleSummary || "This is an article about Donald Trump's offer to voters in the 2024 election. It discusses Trump’s appeal to voters who are looking for a strongman leader. The article also mentions Trump's legal troubles and the upcoming Republican National Committee chair election."

    return (
        <div className={styles.articleCardContainer}>
            <img
                className={styles.articleCardImage}
                src={imgSource}
            />
            <p className={styles.articleCardHeader}>
                {articleHeader}
            </p>
            <p className={styles.articleCardSummary}>
                {articleSummary}
            </p>
        </div>
    );
}

export default ArticleCard