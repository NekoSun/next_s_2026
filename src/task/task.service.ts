import { Injectable, NotFoundException } from '@nestjs/common';
import { title } from 'process';
import { CreateTastDto } from './dto/create-task.dto';
import { UpdateTastDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
    private tasks = [
        {
            id: 1,
            title: 'Learn NestJS',
            isCompleted: false
        },
        {
            id: 2,
            title: 'Build API',
            isCompleted: true
        }
    ]
    findAl() {
        return this.tasks
    }

    finById(id: number) {

        const task = this.tasks.find(task => task.id === id);

        if (!task) {
            throw new NotFoundException('Task not found')
        }

        return task;
    }

    create(dto: CreateTastDto) {
        const { title, description, priority, tags } = dto;

        const newTask = {
            id: this.tasks.length + 1,
            title,
            description, 
            priority, 
            tags,
            isCompleted: false
        }

        this.tasks.push(newTask);

        return this.tasks;
    }

    update(id: number, dto: UpdateTastDto) {
        const { title, isCompleted } = dto;
        const task = this.finById(id);

        task.title = title;
        task.isCompleted = isCompleted;

        return task;
    }

    patchUpdate(id: number, dto: Partial<UpdateTastDto>) {
        const task = this.finById(id);

        Object.assign(task, dto);

        return task;
    }

    delete(id: number) {
        const task = this.finById(id);

        this.tasks = this.tasks.filter(task => task.id !== id);
        return true;
    }

}
