import React, { useState } from 'react';
import { Button, TextField, Box, Grid } from '@mui/material';
import { Task } from '../models/Task';
import { createTask } from '../services/api';


interface TaskFormProps {
    onTaskCreated: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskCreated }) => {
    const [task, setTask] = useState<Omit<Task, 'id' | 'createdAt' | 'updatedAt'>>({
        title: '',
        description: '',
        isCompleted: false,
        dueDate: new Date().toISOString().split('T')[0],
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createTask(task);
            setTask({
                title: '',
                description: '',
                isCompleted: false,
                dueDate: new Date().toISOString().split('T')[0],
            });
            onTaskCreated();
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            {/* Grid container pai - ESSENCIAL */}
            <Grid container spacing={2}>
                
                {/* Grid items filhos */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Title"
                        value={task.title}
                        onChange={(e) => setTask({...task, title: e.target.value})}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Description"
                        multiline
                        rows={3}
                        value={task.description}
                        onChange={(e) => setTask({...task, description: e.target.value})}
                    />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Due Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={task.dueDate}
                        onChange={(e) => setTask({...task, dueDate: e.target.value})}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary"
                    >
                        Add Task
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TaskForm;