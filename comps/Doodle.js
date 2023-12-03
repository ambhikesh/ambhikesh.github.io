// Doodle.js
import React, { useEffect } from 'react';

const Doodle = () => {
    useEffect(() => {
        // Your doodle creation logic from main.js goes here
        // You can use the logic from the previous examples

        const doodleContainer = document.getElementById('doodle-container');

        function createDoodleTopLeft() {
            // ... (use the logic for creating doodles from top-left)
        }

        function createDoodleBottomRight() {
            // ... (use the logic for creating doodles from bottom-right)
        }

        // Initial doodles
        for (let i = 0; i < 5; i++) {
            createDoodleTopLeft();
            createDoodleBottomRight();
        }

        // Create new doodles every 5 seconds
        setInterval(() => {
            createDoodleTopLeft();
            createDoodleBottomRight();
        }, 5000);
    }, []);

    return null;
}

export default Doodle;
