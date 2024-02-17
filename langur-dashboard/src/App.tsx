import FlashCardReviewPage from './components/FlashCardReviewPage/FlashCardReviewPage';
import {  RouterProvider } from "react-router-dom";
import router from "./routing/routes";
import React from 'react';

function App() {
  return (
    <main>
      <RouterProvider router={router} />  
    </main>
  );
}

export default App;
