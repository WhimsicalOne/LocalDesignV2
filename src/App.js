import React from "react";
import "./App.scss";

// All pages
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Services from "./pages/services/services";
import Contact from "./pages/contact/contact";

//Other stuff..
import { Route } from "react-router-dom";

// Components
import Navigation from "./components/navigation/navigation";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/services" component={Services} />
        </div>
    );
}

export default App;
