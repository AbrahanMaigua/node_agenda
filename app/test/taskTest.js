const db = require('../controller/db');
const mongoose = require('mongoose');
const Task = require('../models/shema/task');

async function testTasks() {
    try {
 
      // Conectar a la base de datos
      await db();
      // Crear una tarea
      const task1 = await Task.create({
        title: 'Test Task',
        description: 'This is a test task',
        status: 'pending',
      });
      console.log('Task created:', task1);
  
      // Crear muchas tareas
      const tasks = await Task.insertMany([
        { title: 'Task 1', description: 'Desc 1', status: 'pending', },
        { title: 'Task 2', description: 'Desc 2', status: 'in-progress', },
      ]);
      console.log('Tasks created:', tasks);
  
      // Buscar tareas
      const allTasks = await Task.find();
      console.log('All tasks:', allTasks);
  
      // Buscar una tarea por ID y actualizar
      const updated = await Task.findByIdAndUpdate(
        task1._id,
        { status: 'completed',},
        { new: true }
      );
      console.log('Task updated:', updated);
  
      // Eliminar una tarea
      const deleted = await Task.findByIdAndDelete(task1._id);
      console.log('Task deleted:', deleted);
  
      // Eliminar todas las tareas
      await Task.deleteMany({});
      console.log('All tasks deleted');
    } catch (err) {
      console.error('Error:', err);
    } finally {
      // Cerrar la conexión a la base de datos
      await mongoose.connection.close();

      console.log('Database connection closed');
    }
  }
  
  testTasks();