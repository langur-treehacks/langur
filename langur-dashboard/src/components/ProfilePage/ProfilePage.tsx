import React from "react";
import { Navbar } from "../Navbar/Navbar";
import styles from "./ProfilePage.module.css";
import ProfilePicture from "../../assets/images/profile-picture.png";
import Diamond from "../../assets/images/diamond.png";

const ProfilePage = () => {
    return (
        <div>
            <Navbar/>
            <div className={styles.mainScreenAfterNavbar}>
                <div className={styles.profileContainer}>
                    <p className={styles.profileHeader}>My Profile</p>
                    <div className={styles.dividerLine}></div>
                    
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.profileImage}
                            src={ProfilePicture}
                        />
                    </div>
                    <p className={styles.userName}>John Doe</p>
                    <div className={styles.dividerLine}></div>

                    <p className={styles.statsHeader}>Skill Level</p>
                    <div className={styles.skillValueContainer}>
                        <img
                            className={styles.diamondImage}
                            src={Diamond}
                        />
                        <p>4.32</p>
                        <img
                            className={styles.diamondImage}
                            src={Diamond}
                        />
                    </div>
                    <div className={styles.dividerLine}></div>

                    <p className={styles.statsHeader}>Learning Statistics</p>
                    <div className={styles.rowContainer}>
                        <p className={styles.statName}>Current Streak</p>
                        <p className={styles.statValue}>2</p>
                    </div>
                    <div className={styles.rowContainer}>
                        <p className={styles.statName}>Sentences translated</p>
                        <p className={styles.statValue}>598</p>
                    </div>
                    <div className={styles.rowContainer}>
                        <p className={styles.statName}>Articles Read</p>
                        <p className={styles.statValue}>47</p>
                    </div>
                    <div className={styles.rowContainer}>
                        <p className={styles.statName}>No. of chats with AI</p>
                        <p className={styles.statValue}>23</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;