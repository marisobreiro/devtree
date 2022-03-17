import React from 'react';

import Header from './components/Header/Header';
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import AddNewProject from "./components/AddNewProject/AddNewProject";

function App() {

    return (
        <div>
            <Header />
            <AddNewProject />
            <Projects />
            <Footer />
        </div>
    )
}

export default App;
