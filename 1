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

            if (previousPlayerList.length === 0) {
                // Save the player list for the first time
                savePlayerList(onlinePlayers);
            } else if (!arraysAreEqual(onlinePlayers, previousPlayerList)) {
                // Check if the player list has changed
                savePlayerList(onlinePlayers);
            }

            // Update the previous player list
            previousPlayerList = onlinePlayers;

            console.log('Online Players:');
            onlinePlayers.forEach(player => {
                console.log(player);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function savePlayerList(playerList) {
    // Filter the list of online players
    const onlinePlayerNames = playerList.map(player => player.username);

    // Write online player names to file with timestamps
    const timestamp = new Date().toISOString();
    const log = `Timestamp: ${timestamp}\nOnline Players: ${onlinePlayerNames.join(', ')}\n\n`;
    fs.appendFile(path.join(__dirname, 'log.txt'), log, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
}

// Call the function immediately
getOnlinePlayers();

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
