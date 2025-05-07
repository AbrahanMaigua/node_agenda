# 1. authController.js 21/03/2025
```
Para: Registro, login, logout, validación de tokens.
Funciones típicas:
registerUser(req, res)
loginUser(req, res)
logoutUser(req, res)
refreshToken(req, res)
1.1 authtestdb 21/03/2025 
```

# 1.2 middleware 23/03/2025
loginRequieme

# 1.3 env 22/
```
dotenv
mongodb (user, password, JWT_SECRET)
```

# 2. taskController.js 24/03/2025
```

Para: Gestión de tareas (pendientes, en progreso, hechas).
Funciones típicas:

createTask(req, res)
getTasks(req, res)
updateTask(req, res)
deleteTask(req, res)
```

# 2.1 Taskview 26/03/2025
```

create
list
detail
update
delete
```

# 3 calendarController.js 26/03/2025
```

Para: Eventos y fechas en calendario.
Funciones típicas:

createEvent(req, res)

getEventsByDate(req, res)

updateEvent(req, res)

deleteEvent(req, res)
```

# 4. agendaController.js 27/03/2025
```

Para: Visión del día/semana con tareas y eventos.
Funciones típicas:

getDailyAgenda(req, res)

getWeeklyAgenda(req, res)
```

# 5. studyController.js 28/03/2025
```

Para: Gestión de materias, sesiones de estudio, notas.
Funciones típicas:

addStudySession(req, res)

getStudyPlan(req, res)

addNoteToSubject(req, res)
```

# 6. workController.js 29/03/2025
```

Para: Proyectos de trabajo, deadlines, reuniones.
Funciones típicas:

createProject(req, res)

getProjects(req, res)

assignTaskToProject(req, res)
```

# 7. userController.js 30/03/2025
```

Para: Perfil, configuraciones personales.
Funciones típicas:

getProfile(req, res)

updateProfile(req, res)

changePassword(req, res)
```
