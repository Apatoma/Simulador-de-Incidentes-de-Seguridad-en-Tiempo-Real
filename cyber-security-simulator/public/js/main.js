const socket = io();

document.getElementById('launch-attack')?.addEventListener('click', () => {
    const attackDetails = {
        type: 'DDoS',
        severity: 'High'
    };
    socket.emit('launch_attack', attackDetails);
});

document.getElementById('deploy-defense')?.addEventListener('click', () => {
    const defenseDetails = {
        type: 'Firewall',
        status: 'Deployed'
    };
    socket.emit('deploy_defense', defenseDetails);
});

socket.on('attack_launched', (attackDetails) => {
    const incidentList = document.querySelector('#incidents ul');
    const li = document.createElement('li');
    li.textContent = `${attackDetails.type} - Active`;
    incidentList.appendChild(li);
});

socket.on('defense_deployed', (defenseDetails) => {
    const incidentList = document.querySelector('#incidents ul');
    const li = document.createElement('li');
    li.textContent = `${defenseDetails.type} - ${defenseDetails.status}`;
    incidentList.appendChild(li);
});
