import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from "./task-status.enum";
import { CreateTaskDto } from "./dto/create-teask.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { NotFoundError } from "rxjs";

@Injectable()
export class TasksService {

    /* 
    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
        const { status, search } = filterDto;
        let tasks = this.getAllTasks();

        if(status) {
            tasks = tasks.filter(task => task.status === status);
        }

        if(search) {
            tasks = tasks.filter(task => 
                task.title.includes(search) ||
                task.description.includes(search)
            );
        }

        return tasks;
    }
    

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        //try to find the task with the given id
        //if the task is not found, return an error(404 not found)

        const found = this.tasks.find(task => task.id === id);

        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return found;
    }

    deleteTaskById(id: string): void {
        const found = this.getTaskById(id);
        this.tasks = this.tasks.filter(task => task.id !== found.id);
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;
        
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };

        this.tasks.push(task);
        return task
    }

    updateTaskStatus(id: string, status: TaskStatus) {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    } */
}
