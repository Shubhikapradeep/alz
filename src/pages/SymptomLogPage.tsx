import React, { useState } from "react";
import "../App.css";

interface Props {
  goBack: () => void;
}

const SymptomLogPage: React.FC<Props> = ({ goBack }) => {
  const [form, setForm] = useState({
    fatigue: "Low",
    confusion: "None",
    sleep: "Great",
    appetite: "Normal",
    motor: "None",
    note: "",
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (field: string, value: string) =>
    setForm({ ...form, [field]: value });

  const handleSave = () => {
    const logs = JSON.parse(localStorage.getItem("symptomLogs") || "[]");
    logs.push({ ...form, date: new Date().toLocaleDateString() });
    localStorage.setItem("symptomLogs", JSON.stringify(logs));
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <div className="app-container">
      <button className="menu-item" onClick={goBack}>
        ← Back
      </button>
      <h2>🩺 Daily Symptom Log</h2>

      <label>Fatigue</label>
      <select onChange={(e) => handleChange("fatigue", e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <label>Confusion</label>
      <select onChange={(e) => handleChange("confusion", e.target.value)}>
        <option>None</option>
        <option>Sometimes</option>
        <option>Often</option>
      </select>

      <label>Sleep Quality</label>
      <select onChange={(e) => handleChange("sleep", e.target.value)}>
        <option>Great</option>
        <option>Okay</option>
        <option>Poor</option>
      </select>

      <label>Appetite</label>
      <select onChange={(e) => handleChange("appetite", e.target.value)}>
        <option>Normal</option>
        <option>Reduced</option>
        <option>None</option>
      </select>

      <label>Motor Coordination</label>
      <select onChange={(e) => handleChange("motor", e.target.value)}>
        <option>None</option>
        <option>Mild</option>
        <option>Severe</option>
      </select>

      <textarea
        placeholder="Any other notes?"
        onChange={(e) => handleChange("note", e.target.value)}
      />

      <button className="menu-item" onClick={handleSave}>
        Save Log
      </button>
      {saved && <p>✅ Log saved!</p>}
    </div>
  );
};

export default SymptomLogPage;
