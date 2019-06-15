import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import ListEvents from "./components/ListEvents";

import CategoriesProvider from "./context/CategoriesContext";
import EventsProvider from "./context/EventContext";

function App() {
  return (
    <EventsProvider>
      <CategoriesProvider>
        <Header title="Event Search API" />
        <div className="uk-container">
          <Search />
          <ListEvents />
        </div>
      </CategoriesProvider>
    </EventsProvider>
  );
}

export default App;
