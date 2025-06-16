// Data/AppDbContext.cs
using Microsoft.EntityFrameworkCore;
using TaskManagerAPI.Models;

namespace TaskManagerAPI.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    
    public DbSet<TaskItem> Tasks => Set<TaskItem>();
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TaskItem>().HasData(
            new TaskItem 
            { 
                Id = 1, 
                Title = "Primeira Tarefa", 
                Description = "Esta é uma tarefa de exemplo", 
                IsCompleted = false, 
                DueDate = DateTime.UtcNow.AddDays(7),
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new TaskItem 
            { 
                Id = 2, 
                Title = "Segunda Tarefa", 
                Description = "Outra tarefa de exemplo", 
                IsCompleted = true, 
                DueDate = DateTime.UtcNow.AddDays(3),
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            }
        );
    }
}