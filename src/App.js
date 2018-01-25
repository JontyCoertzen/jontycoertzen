import React, { Component } from 'react';
import './styles/css/App.css';

import Navigation from './components/Navigation'
import Footer from './components/Footer'

class App extends Component {
    render() {
        return (
            <div>
                {/* <Navigation /> */}

                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title animated slideInUp has-text-centered">
                                &nbsp;Jonty <br/> &nbsp;Coertzen
                            </h1>
                            <h2 className="subtitle animated slideInUp has-text-centered">
                                Programmer | Gamer | Photographer
                            </h2>
                        </div>
                    </div>
                </section>
 
                <Footer />
            </div>
        );
    }
}



export default App;