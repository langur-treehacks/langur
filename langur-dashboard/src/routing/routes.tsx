import { createBrowserRouter } from "react-router-dom";
import FlashCardReviewPage from "../components/FlashCardReviewPage/FlashCardReviewPage";
import WelcomePage from "../components/WelcomePage/WelcomePage";
import ProfilePage from "../components/ProfilePage/ProfilePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <WelcomePage/>
    },
    {
        path: "/flash-card-review",
        element: <FlashCardReviewPage/>
    },
    {
        path: "/my-profile",
        element: <ProfilePage/>
    }
]);

export default router;