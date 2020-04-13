import React from 'react';
import './App.scss';
import HeaderSection from "./components/HeaderSection/HeaderSection";
import MainSection from "./components/MainSection/MainSection";
import TestSection from "./components/TestSection/TestSection";

function App() {
    return (
        <div className="App">
            <HeaderSection/>
            <MainSection/>
            <TestSection/>
        </div>
    );
}

export default App;
