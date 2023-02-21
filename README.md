<div align="left">
  <a href="url">
    <img src="https://user-images.githubusercontent.com/108427945/220423842-b40a485f-734b-418e-81f7-6ddfa23acd99.png" width="200" >
  </a>
</div>

# HenryGames #
### Proyecto individual desarrollado en Henry, "bootcamp" de desarrollo Web. ###
<div align="center">
  <a href="url">
    <img src="https://user-images.githubusercontent.com/108427945/220424776-f2c06892-dc47-4073-a475-5eb41ff8927c.png" width="500" >
  </a>
</div>

### Propósito ###
Desarrollar una **aplicación Web full stack** que recibe datos de una API externa de videojuegos. 🎮

### Funcionalidades ###
- Vista principal, en la que se visualizan TODOS los videojuegos, independientemente de si fueron o no creados por el usuario.
- Barra de búsqueda presente en todas las vistas, mediante la cual se pueden buscar videojuegos cuyo título contenga el texto introducido. Los resultados incluyen tanto los videojuegos provenientes de la API, como aquellos añadidos por el usuario.
- Vista de detalle, en la que el usuario puede visualizar la información completa de un videojuego en particular.
- Paginación dinámica, tanto en la vista principal, como en la vista de resultados de búsqueda. Funciona independientemente de los filtros u ordenamientos que se encuentren activos o del número de elementos presentes.
- Filtros y ordenamientos combinados en las vistas principal y de resultados de búsqueda. El usuario puede elegir entre visualizar todos los videojuegos, sólo los creados por él, o sólo los de la aplicación. Es posible filtrar por uno o más géneros. Así mismo, se pueden ordenar los videojuegos por título o por puntuación, de manera ascendente y descendente; el ordenamiento ascendente por título está seleccionado por defecto.
- CRUD completo. Además de poder visualizar y añadir videojuegos, es posible crear o eliminar un videojuego ya existente, esto es posible mediante dos botones en la vista de detalle, los cuales están deshabilitados si el videojuego en cuestión NO fue añadido por el usuario.
- Validación de datos en tiempo real al añadir o actualizar videojuegos. El botón que permite enviar el formulario es habilitado o deshabilidato dependiendo de si los datos introducidos por el usuario cumplen o no con ciertos parámetros que se detallan debajo de cada campo; por ejemplo, cuando el número de caracteres del título supera el máximo permitido.

### Tecnologías ###
  <a href="url">
    <img src="https://user-images.githubusercontent.com/108427945/220447577-2d40e53b-d911-4919-9df8-1a832e7264e1.png" width="50" >
  </a>
  <a href="url">
    <img src="https://user-images.githubusercontent.com/108427945/220448197-9361ad94-2867-4aca-8bcd-3a4ddb2b499c.png" width="50" >
  </a>
  <a href="url">
    <img src="https://user-images.githubusercontent.com/108427945/220448406-7bcd41a4-e0c3-4d97-8901-6ec45c3effa5.png" width="50" >
  </a>
  <a href="url">
    <img src="https://user-images.githubusercontent.com/108427945/220448808-2ccebd50-595e-4b02-8b59-ac7b4f5e52d4.png" width="50" >
  </a>
  <a href="url">
    <img src="https://user-images.githubusercontent.com/108427945/220449748-8b0cce45-1156-49a7-a6da-83a8d921c83b.png" width="50" >
  </a>
  <a href="url">
    <img src="https://user-images.githubusercontent.com/108427945/220450396-5786cd98-e2ce-47e8-b15f-056a251bd01b.png" width="50" >
  </a>
  <a href="url">
    <img src="https://user-images.githubusercontent.com/108427945/220450657-a17aca01-f90d-4843-9137-20bca9668a22.png" width="50" >
  </a>
  <a href="url">
    <img src="https://user-images.githubusercontent.com/108427945/220451016-cfb63adb-0aa4-493a-bef0-e090e301b3b1.png" width="50" >
  </a>
  <a href="url">
    <img src="https://user-images.githubusercontent.com/108427945/220451188-0dd37557-2067-4058-b6bc-eb14377f334c.png" width="50" >
  </a>

### Cómo ejecutar el proyecto localmente ###
1. Instalar PostgreSQL.
2. Crear una base de datos con el nombre "videogames".
3. Dentro de "/api" crear un archivo .env, luego copiar y pegar en él el siguiente código:
```
DB_USER={usuario}
DB_PASSWORD={contraseña}
DB_HOST=localhost
API_KEY=

#Reemplazar {usuario} y {contraseña} con las credenciales de Postgres propias.
```
