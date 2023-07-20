import { useEffect, useState } from "react";
import "./WelcomeDialog.css"; // Import the CSS file for styling

const WelcomeDialog = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="overlay" onClick={handleClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <h2>Welcome to our Website!</h2>
        <p>We are glad to have you here.</p>
      </div>
    </div>
  );
};

export default WelcomeDialog;
