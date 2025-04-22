# 1. authController.js
Para: Registro, login, logout, validación de tokens.
Funciones típicas:

registerUser(req, res)

loginUser(req, res)

logoutUser(req, res)

refreshToken(req, res)

# 2. taskController.js
Para: Gestión de tareas (pendientes, en progreso, hechas).
Funciones típicas:

createTask(req, res)

getTasks(req, res)

updateTask(req, res)

deleteTask(req, res)

# 3. calendarController.js
Para: Eventos y fechas en calendario.
Funciones típicas:

createEvent(req, res)

getEventsByDate(req, res)

updateEvent(req, res)

deleteEvent(req, res)

# 4. agendaController.js
Para: Visión del día/semana con tareas y eventos.
Funciones típicas:

getDailyAgenda(req, res)

getWeeklyAgenda(req, res)

# 5. studyController.js
Para: Gestión de materias, sesiones de estudio, notas.
Funciones típicas:

addStudySession(req, res)

getStudyPlan(req, res)

addNoteToSubject(req, res)

# 6. workController.js
Para: Proyectos de trabajo, deadlines, reuniones.
Funciones típicas:

createProject(req, res)

getProjects(req, res)

assignTaskToProject(req, res)

# 7. userController.js
Para: Perfil, configuraciones personales.
Funciones típicas:

getProfile(req, res)

updateProfile(req, res)

changePassword(req, res)