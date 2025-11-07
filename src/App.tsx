import React, { useState } from "react";
import "./App.css";
import NewPatientDashboard from "./pages/NewPatientDashboard";
import SymptomLogPage from "./pages/SymptomLogPage";

function App() {
  // Manage which "page" is currently active
  const [page, setPage] = useState<"dashboard" | "symptoms">("dashboard");

  // ✅ Page switch logic
  if (page === "symptoms") {
    return <SymptomLogPage goBack={() => setPage("dashboard")} />;
  }

  // ✅ Default = dashboard
  return (
    <NewPatientDashboard
      goToSymptoms={() => setPage("symptoms")}
    />
  );
}

export default App;
