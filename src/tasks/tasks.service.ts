import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from "./task-status.enum";
import { CreateTaskDto } from "./dto/create-teask.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { NotFoundError } from "rxjs";
import { In } from "typeorm";
import { TaskRepository } from "./task.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./task.entity";

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ) {}

    async getTaskById(id: string): Promise<Task> {
        const found = await this.taskRepository.findOne({ where: {id: id} });

        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return found;
    }

    createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto);
    }

    async deleteTaskById(id: string): Promise<void> {
        const result = await this.taskRepository.delete(id);
        console.log(result);

        if (result.affected === 0) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
    }

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

   

   

    updateTaskStatus(id: string, status: TaskStatus) {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    } */
}
