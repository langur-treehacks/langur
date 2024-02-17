import { createBrowserRouter } from "react-router-dom";
import React from "react";
import FlashCardReviewPage from "../components/FlashCardReviewPage/FlashCardReviewPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <FlashCardReviewPage/>
    },
    {
        path: "/flash-card-review",
        element: <FlashCardReviewPage/>
    }
]);

export default router;