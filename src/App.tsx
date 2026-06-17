import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import PaymentPage from "./pages/PaymentPage";
import DownloadPage from "./pages/DownloadPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/payment/:registrationId" element={<PaymentPage />} />
        <Route path="/download/android" element={<DownloadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;