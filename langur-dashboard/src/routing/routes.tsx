import { createBrowserRouter } from "react-router-dom";
import FlashCardReviewPage from "../components/FlashCardReviewPage/FlashCardReviewPage";
import WelcomePage from "../components/WelcomePage/WelcomePage";
import ProfilePage from "../components/ProfilePage/ProfilePage";
import ChatWithAIPage from "../components/ChatWithAIPage/ChatWithAIPage";

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
    },
    {
        path: "/practice",
        element: <ChatWithAIPage/>
    }
]);

export default router;