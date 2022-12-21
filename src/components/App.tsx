import React from "react";

// Components
import AppProvider from "~/context";
import Filters from "./Filters";
import Header from "./Header";
import ListProducts from "./ListProducts";
import Navbar from "./Navbar";

const App: React.FC = () => {
  return (
    <AppProvider>
      <main>
        <Navbar />
        <Header title="Electronica" />
        <ListProducts />
      </main>
    </AppProvider>
  );
};

export default App;
