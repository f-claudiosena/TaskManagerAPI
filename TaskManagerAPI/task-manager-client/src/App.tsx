import React from 'react';
import { Container, CssBaseline, Paper, Typography } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App: React.FC = () => {
    const [refresh, setRefresh] = React.useState(false);

    const handleTaskCreated = () => {
        setRefresh(!refresh);
    };

    return (
        <>
            <CssBaseline />
            <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                <Paper elevation={3} sx={{ p: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom align="center">
                        Task Manager
                    </Typography>
                    <TaskForm onTaskCreated={handleTaskCreated} />
                    <TaskList />
                </Paper>
            </Container>
        </>
    );
};

export default App;