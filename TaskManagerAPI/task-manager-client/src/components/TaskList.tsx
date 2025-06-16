import React, { useEffect, useState } from 'react';
import { Task } from '../models/Task';
import { getTasks, updateTask, deleteTask } from '../services/api';
import TaskItem from './TaskItem';
import { List, Typography } from '@mui/material';

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const tasks = await getTasks();
            setTasks(tasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleToggle = async (id: number) => {
        try {
            const taskToUpdate = tasks.find((task) => task.id === id);
            if (taskToUpdate) {
                await updateTask(id, { isCompleted: !taskToUpdate.isCompleted });
                fetchTasks();
            }
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteTask(id);
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div>
            <Typography variant="h5" component="h2" gutterBottom>
                Tasks
            </Typography>
            {tasks.length === 0 ? (
                <Typography variant="body1">No tasks found. Add a task to get started.</Typography>
            ) : (
                <List>
                    {tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                        />
                    ))}
                </List>
            )}
        </div>
    );
};

export default TaskList;