import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContext } from './context';

import Home from './pages/Home'
import CallForPapers from './pages/CallForPapers'
import TrackUseCases from './pages/TrackUseCases';
import Login from './pages/Login';
import Guidelines from './pages/Guidelines';
import Register from './pages/Register';
import StayUpdated from './pages/StayUpdated';
import Participant from './pages/Participant';
import Session from './pages/Session';

function App() {

    const [appState, setAppState] = useState({
        //ATLAS_URI: "http://localhost:5000"
        ATLAS_URI: "https://vtf-speaker.herokuapp.com"
    })

    return (
        <AppContext.Provider value={{appState, setAppState}}>

            <Router>
                
                <Switch>

                    {/* --------------- Home Page --------------- */}
                    <Route path="/" exact component={() => <Home />} />

                    {/* --------------- Call For Papers --------------- */}
                    <Route path="/callforpapers" exact component={() => <CallForPapers />} />
                    
                    {/* --------------- Participant Page --------------- */}
                    <Route path="/cfp/participant" exact component={() => <Participant />} />
                    
                    {/* --------------- Session Page --------------- */}
                    <Route path="/cfp/session" exact component={() => <Session />} />

                    {/* --------------- Login Page --------------- */}
                    <Route path="/login" exact component={() => <Login />} />
                    
                    {/* --------------- Register Page --------------- */}
                    <Route path="/register" exact component={() => <Register />} />
                    
                    {/* --------------- Guidelines Page --------------- */}
                    <Route path="/guidelines" exact component={() => <Guidelines />} />
                    
                    {/* --------------- Stay Updated Page --------------- */}
                    <Route path="/contact" exact component={() => <StayUpdated />} />

                    {/* --------------- Track and Use Cases Page --------------- */}
                    <Route path="/trackusecases" exact component={() => <TrackUseCases />} />


                </Switch>

            </Router>
        </AppContext.Provider>
    );
}

export default App;
