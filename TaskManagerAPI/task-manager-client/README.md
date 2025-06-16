# Task Manager Application

A professional task management application with a .NET backend and React frontend.

## Features

- Create, read, update, and delete tasks
- Mark tasks as complete/incomplete
- Responsive UI with Material-UI
- Clean, professional design

## Technologies

### Backend
- .NET 7
- Entity Framework Core
- SQL Server (or InMemory for development)
- Swagger for API documentation

### Frontend
- React 18
- TypeScript
- Material-UI (MUI)
- Axios for HTTP requests

## Getting Started

### Backend Setup

1. Clone the repository
2. Navigate to the `TaskManagerAPI` folder
3. Update the connection string in `appsettings.json` if needed
4. Run the following commands:

```bash
dotnet restore
dotnet ef database update
dotnet run