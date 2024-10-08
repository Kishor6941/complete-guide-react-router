import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import GlobalContainer from "./context/GlobalContext";
import PostContainer from "./context/PostsContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback="Loading....">
    <BrowserRouter>
      <GlobalContainer>
        <PostContainer>
          <App />
        </PostContainer>
      </GlobalContainer>
    </BrowserRouter>
    </Suspense>
  </StrictMode>
);
