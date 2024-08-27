import React, { useState, useEffect } from 'react';
import './ToastNotification.css'; // Create this CSS file for styling

const ToastNotification = ({ message, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto-close after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    visible && (
      <div className="toast-notification">
        {message}
      </div>
    )
  );
};

export default ToastNotification;
