import axios from 'axios';
import { Task } from '../models/Task';

const API_URL = 'https://localhost:7183/api/tasks'; // Adjust to API URL if needed

export const getTasks = async (): Promise<Task[]> => {
    const response = await axios.get<Task[]>(API_URL);
    return response.data;
};

export const createTask = async (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<Task> => {
    const response = await axios.post<Task>(API_URL, task);
    return response.data;
};

export const updateTask = async (id: number, task: Partial<Task>): Promise<void> => {
    await axios.put(`${API_URL}/${id}`, task);
};

export const deleteTask = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};