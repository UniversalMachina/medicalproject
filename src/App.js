import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import { ThemeProvider } from "./themeContext"; // Import the ThemeProvider
import Evaulations from "./pages/Evaulations_Page/Evaulations";
import Interviews from "./pages/Interviews";
import Clients from "./pages/Client_Page/Clients";
import PatientsInterviewPage from "./pages/PatientsInterviewPage";
import New_Evaulations from "./pages/New_Evaulations_Page/New_Evaulations";
import ProfileEvaulations from "./pages/ProfileEvaulation/ProfileEvaulations";
import AddInterview from "./pages/Add_Interview_Page/AddInterview";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/interviews":
        title = "";
        metaDescription = "";
        break;
      case "/clients":
        title = "";
        metaDescription = "";
        break;
      case "/patients-interview-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <ThemeProvider>
      <div>
       
        <Routes>
          <Route path="/" element={<Evaulations />} />
          <Route path="/new-evaluations" element={<New_Evaulations />} />
          <Route path="/evaluation/:name/:date" element={<ProfileEvaulations />} />
          <Route path="/addinterview/:name/:date" element={<AddInterview />} />
          <Route path="/interview/:name/:date" element={<AddInterview />} />

          <Route path="/interviews" element={<Interviews />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/patients-interview-page" element={<PatientsInterviewPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
