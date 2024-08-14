const socket = io();

document.getElementById('deploy-defense').addEventListener('click', () => {
    const defenseDetails = {
        type: 'Firewall',       // Tipo de defensa desplegada
        status: 'Deployed',     // Estado de la defensa
        timestamp: new Date()
    };
    socket.emit('deploy_defense', defenseDetails); // Emite el evento de defensa al servidor
});

socket.on('defense_deployed', (defenseDetails) => {
    const incidentList = document.querySelector('#incidents ul');
    const li = document.createElement('li');
    li.textContent = `${defenseDetails.type} - ${defenseDetails.status} - ${new Date(defenseDetails.timestamp).toLocaleTimeString()}`;
    incidentList.appendChild(li);
});
