const socket = io();

document.getElementById('launch-attack').addEventListener('click', () => {
    const attackDetails = {
        type: 'SQL Injection',  // Tipo de ataque
        severity: 'High',       // Severidad del ataque
        timestamp: new Date()
    };
    socket.emit('launch_attack', attackDetails); // Emite el evento de ataque al servidor
});

socket.on('attack_launched', (attackDetails) => {
    const incidentList = document.querySelector('#incidents ul');
    const li = document.createElement('li');
    li.textContent = `${attackDetails.type} - ${attackDetails.severity} - ${new Date(attackDetails.timestamp).toLocaleTimeString()}`;
    incidentList.appendChild(li);
});
