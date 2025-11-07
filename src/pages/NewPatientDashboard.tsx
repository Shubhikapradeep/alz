import React, { useState } from "react";
import {
  Phone,
  User,
  Calendar,
  Heart,
  Clock,
  Brain,
  FileText,
  ShieldCheck,
  X,
  ArrowLeft,
} from "lucide-react";
import "./NewPatientDashboard.css";

interface Props {
  goToSymptoms: () => void;
}

const NewPatientDashboard: React.FC<Props> = ({ goToSymptoms }) => {
  const [page, setPage] = useState<
    "dashboard" | "brainGames" | "profile" | "reminders"
  >("dashboard");
  const [showMoodPopup, setShowMoodPopup] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    setTimeout(() => setShowMoodPopup(false), 1500);
  };

  return (
    <div className="dashboard-container">
      {page === "dashboard" && (
        <div className="dashboard">
          <header className="dashboard-header">
            <button className="icon-btn" onClick={() => setPage("profile")}>
              <User size={26} />
            </button>
            <h1 className="dashboard-title">Hey there!</h1>
            <a href="tel:+11234567890" className="icon-btn red">
              <Phone size={26} />
            </a>
          </header>

          <div className="card mood-card">
            <h2>Your Mind Matters 💭</h2>
            <p>Take a gentle moment — how are you feeling today?</p>
            <button className="primary-btn" onClick={() => setShowMoodPopup(true)}>
              Tell me how you are feeling
            </button>
            <button className="secondary-btn" onClick={() => setShowChatPopup(true)}>
              Talk to me to feel a bit better
            </button>
          </div>

          <div className="menu-grid">
            <div className="menu-item" onClick={goToSymptoms}>
              <p>🩺 Daily Symptom Log</p>
            </div>
            <div className="menu-item" onClick={() => setPage("brainGames")}>
              <Brain size={40} />
              <p>Brain Games</p>
            </div>
            <div className="menu-item" onClick={() => setPage("reminders")}>
              <Clock size={40} />
              <p>Reminders</p>
            </div>
          </div>

          <div className="quote">
            <p>There is life outside the diagnosis — and it’s still yours.</p>
          </div>

          {showMoodPopup && (
            <div className="popup" onClick={() => setShowMoodPopup(false)}>
              <div className="popup-card" onClick={(e) => e.stopPropagation()}>
                {!selectedMood ? (
                  <>
                    <h3>How do you feel right now?</h3>
                    <div className="emoji-options">
                      {["😢", "😐", "🙂", "😊", "🌞"].map((emoji) => (
                        <span
                          key={emoji}
                          className="emoji"
                          onClick={() => handleMoodSelect(emoji)}
                        >
                          {emoji}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="thankyou">Thank you for sharing 💛</p>
                )}
              </div>
            </div>
          )}

          {showChatPopup && (
            <div className="popup" onClick={() => setShowChatPopup(false)}>
              <div className="popup-card chat" onClick={(e) => e.stopPropagation()}>
                <div className="chat-header">
                  <h3>Let’s talk</h3>
                  <button className="close-btn" onClick={() => setShowChatPopup(false)}>
                    <X size={20} />
                  </button>
                </div>
                <div className="chat-body">
                  <p className="bot-message">
                    Hi there 💙 <br />
                    You’re doing your best — and that’s enough. <br />
                    Would you like to share how your morning has been?
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NewPatientDashboard;
