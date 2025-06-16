import React from 'react';
import { Task } from '../models/Task';
import { Checkbox, IconButton, ListItem, ListItemText, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';

interface TaskItemProps {
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => onDelete(task.id)}>
                    <DeleteIcon />
                </IconButton>
            }
        >
            <Checkbox
                checked={task.isCompleted}
                onChange={() => onToggle(task.id)}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <ListItemText
                primary={
                    <Typography
                        variant="body1"
                        style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
                    >
                        {task.title}
                    </Typography>
                }
                secondary={
                    <>
                        <Typography variant="body2" color="textSecondary">
                            {task.description}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                            Due: {format(new Date(task.dueDate), 'MM/dd/yyyy')}
                        </Typography>
                    </>
                }
            />
        </ListItem>
    );
};

export default TaskItem;