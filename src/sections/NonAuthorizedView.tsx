// src/sections/NonAuthorizedView.tsx
import React from "react";

interface NonAuthorizedViewProps {
  children: React.ReactNode; // Declare children as a prop
}

const NonAuthorizedView: React.FC<NonAuthorizedViewProps> = ({ children }) => {
  return (
    <div>
      <h2>You are not authorized to view this page.</h2>
      {children} {/* Render the children here */}
    </div>
  );
};

export default NonAuthorizedView;
