Backend
Crear un servidor que nos permita registrar las peticiones a la API y guardar las
respuestas de TVMaze.
- Utilizar NodeJS/MongoDB
- Crear un servicio GET "/search/shows" propio.
- Tomar el texto a buscar y realizar DESDE EL BACKEND un request a TVMAZE.
  Devolver al frontend la respuesta de TVMaze.
- Cada vez que el frontend realiza una petición, registrar en una colección de
  Mongo "requestLogs": fecha, texto de busqueda , IP (Si es posible)
- Entregar un repo github con el código