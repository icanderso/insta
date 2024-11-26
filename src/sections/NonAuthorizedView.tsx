// src/sections/NonAuthorizedView.tsx
import React from "react";

const NonAuthorizedView: React.FC = () => {
  return (
    <div>
      <h2>You are not authorized to view this page.</h2>
      <p>Please register or log in to continue.</p>
    </div>
  );
};

export default NonAuthorizedView;
