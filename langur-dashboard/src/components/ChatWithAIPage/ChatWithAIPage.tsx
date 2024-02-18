import React from "react";
import { Navbar } from "../Navbar/Navbar";
import styles from "./ChatWithAIPage.module.css";
import langurProfilePic from "../../assets/images/langur-pfp.png";

const ChatWithAIPage = () => {
    return (
        <div>
            <Navbar/>
            <div className={styles.mainScreenAfterNavbar}>
                <div className={styles.chatContainer}>
                    <div className={styles.chatNameContainer}>
                        <img
                            src={langurProfilePic}
                            className={styles.chatPfp}
                        />
                        <p className={styles.chatName}>
                            Papa Langy
                        </p>
                    </div>
                    <div className={styles.chatBody}>
                    </div>
                    <div className={styles.messageBox}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatWithAIPage;