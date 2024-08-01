// Array of team objects with logo paths and names
const teams = [
    { logo: 'Logo/8Bit.PNG', name: '8 BIT', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/BB.PNG', name: 'BIG BROTHERS', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/BLIND.PNG', name: 'BLIND', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/D3MON.PNG', name: 'D3MONS', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/ENTITY.PNG', name: 'ENTITY', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/TeamGladiators.PNG', name: 'GLADIATORS', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/Global Esports.PNG', name: 'GLOBAL ESPORTS', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/godl.PNG', name: 'GODLIKE', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/GDR.PNG', name: 'GOD REIGN', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/HxL.PNG', name: 'HIDDEN LEAF', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/Hydra.PNG', name: 'HYDRA', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/Nova.PNG', name: 'NOVA', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/OR.PNG', name: 'OR ESPORTS', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/Orangutan.PNG', name: 'ORANGUTAN', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/Revenant.PNG', name: 'REVENANT', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/S2G.PNG', name: 'S2G', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/STE.PNG', name: 'STALWART ES', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/Insane.PNG', name: 'INSANE', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/Soul.PNG', name: 'SOUL', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    { logo: 'Logo/Xsparks.PNG', name: 'XSPARKS', points: 0, match1: 0, match2: 0, match3: 0, match4: 0 },
    // Add more teams as needed
];

// Function to populate the table
function populateTable() {
    // Sort teams by total points before populating the table
    teams.sort((a, b) => b.points - a.points);
    
    const tableBody = document.querySelector('#teamsTable tbody');
    tableBody.innerHTML = '';
    teams.forEach((team, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td> <!-- Rank column -->
            <td>
                <img src="${team.logo}" alt="${team.name} Logo" style="width: 50px;">
                <div>${team.name}</div>
            </td>
            <td>${team.points}</td>
            <td><input type="number" value="${team.match1}" onchange="updateMatch(${index}, 'match1', this.value)"></td>
            <td><input type="number" value="${team.match2}" onchange="updateMatch(${index}, 'match2', this.value)"></td>
            <td><input type="number" value="${team.match3}" onchange="updateMatch(${index}, 'match3', this.value)"></td>
            <td><input type="number" value="${team.match4}" onchange="updateMatch(${index}, 'match4', this.value)"></td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to update match scores and total points automatically
function updateMatch(index, match, value) {
    teams[index][match] = parseInt(value) || 0;
    // Update total points
    teams[index].points = teams[index].match1 + teams[index].match2 + teams[index].match3 + teams[index].match4;
    // Re-populate the table
    populateTable();
}

// Function to sort the table by total points
function sortTable() {
    teams.sort((a, b) => b.points - a.points);
    populateTable();
}

// Initial population of the table
populateTable();
