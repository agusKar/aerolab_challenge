import * as React from "react";

import logo from "../assets/logo.svg";

const App: React.FC = () => {
  return (
    <main className="">
      <header>
        <h1>
          <img alt="Aerolab" src={logo} width={128} />
        </h1>
        <h3 className="text-3xl font-bold underline">Lets get this party started</h3>
      </header>
    </main>
  );
};

export default App;
