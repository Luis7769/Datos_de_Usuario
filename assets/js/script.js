( function() {//Programar una función IIFE para serinvocada al cargar nuestra página.
    async function fetchUsers() {
        try {
            const response = await fetch('https://randomuser.me/api/?results=10');
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error al traer usuarios:', error);
            return [];
        }
    }

    // Función para mostrar los usuarios en el HTML
function traerUsuarios(users) {
    const container = document.getElementById('user-list'); // Cambio aquí
    users.forEach(user => {
        const crearUsuario = document.createElement('li');
        crearUsuario.innerHTML = `<img src="${user.picture.large}" alt="Foto"><br>${user.name.first} ${user.name.last} <br>${user.email} <br>${user.cell}`;
        container.appendChild(crearUsuario);
    });
}

    
    // Obtener los usuarios y renderizarlos al cargar la página
    async function getUsuarioYRenderizar() {
        const users = await fetchUsers();
        traerUsuarios(users);
    }

    getUsuarioYRenderizar();
})();