const axios = require('axios');
const fs = require('fs');
const path = require('path');

const url = 'https://api.mcstatus.io/v2/status/java/23.109.136.22:25578';
let previousPlayerList = [];

function getOnlinePlayers() {
    axios.get(url)
        .then(response => {
            const data = response.data;

            // Accessing the list of online players
            const onlinePlayers = data.players.list;

            // Check if the player list has changed
            if (arraysAreEqual(onlinePlayers, previousPlayerList)) {
                console.log('Player list has not changed. Skipping save.');
                return;
            }

            // Update the previous player list
            previousPlayerList = onlinePlayers;

            console.log('Online Players:');
            onlinePlayers.forEach(player => {
                console.log(player);
            });

            // Write online player names to file with timestamps
            const timestamp = new Date().toISOString();
            const log = `Timestamp: ${timestamp}\nOnline Players: ${onlinePlayers.join(', ')}\n\n`;
            fs.appendFile(path.join(__dirname, 'log.txt'), log, (err) => {
                if (err) {
                    console.error('Error writing to log file:', err);
                }
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Call the function immediately
getOnlinePlayers();
console.log('Program started.');

// Repeat the function every 2 minutes
setInterval(getOnlinePlayers, 2 * 60 * 1000);

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}
