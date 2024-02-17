import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import profilePicture from "../../assets/images/profile-picture.png";

export const Navbar: React.FC = () => {

    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate('/');
    }
    const goToProfilePage = () => {
        navigate('/my-profile');
    }

    return(
        <nav className={styles.navbarBody}>
            <div className={styles.homeButton} onClick={goToHomePage}>
                <p className={styles.firstHalfHomeButtonText}>lang</p><p className={styles.secondHalfHomeButtonText}>ur</p>
            </div>
            <div className={styles.profilePictureContainer} onClick={goToProfilePage}>
                <img
                    src={profilePicture}
                />
            </div>
        </nav>
    );
}