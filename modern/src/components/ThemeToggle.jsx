import React from 'react';
import { Form } from 'react-bootstrap';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <Form.Check 
      type="switch"
      id="theme-switch"
      label={darkMode ? <Moon size={20} /> : <Sun size={20} />}
      checked={darkMode}
      onChange={toggleDarkMode}
      className="theme-toggle mb-3"
    />
  );
};

export default ThemeToggle;