
// src/app/page.tsx

import AuthorizedView from "@/sections/AuthorizedView";
import NonAuthorizedView from "@/sections/NonAuthorizedView";
import React from 'react';
import { useRouter } from "next/navigation";
const HomePage = () => {
  return (
    <div>
      <h1>Domovská stránka</h1>
    </div>
  );
};

export default HomePage;



