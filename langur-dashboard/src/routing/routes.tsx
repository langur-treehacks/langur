import { createBrowserRouter } from "react-router-dom";
import FlashCardReviewPage from "../components/FlashCardReviewPage/FlashCardReviewPage";
import WelcomePage from "../components/WelcomePage/WelcomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <WelcomePage/>
    },
    {
        path: "/flash-card-review",
        element: <FlashCardReviewPage/>
    }
]);

export default router;