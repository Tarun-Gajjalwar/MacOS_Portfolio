import React from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);


import { Navbar, Welcome, Dock, Home } from '#components';
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos } from '#windows';


const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />
            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Text />
            <Image />
            <Contact />
            <Home />
            <Photos />
        </main>
    )
}
export default App
