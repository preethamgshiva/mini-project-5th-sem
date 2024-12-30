import SignIn from "./pages/signIn";
import PatientDetails from "./pages/patientDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import AnalysisPage from "./pages/AnalysisPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route index element={<SignIn />} />
          <Route path="/patient-details" element={<PatientDetails />} />
          <Route path="/AnalysisPage" element={<AnalysisPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
