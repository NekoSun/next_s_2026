import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTastDto } from './dto/create-task.dto';
import { UpdateTastDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Get('all')
  findAl() {
    return this.taskService.findAl()
  }

  @Get('by-id/:id')
  finById(@Param('id') id: string) {
    return this.taskService.finById(+id)
  }

  @Post()
  create(@Body() dto: CreateTastDto) {
    return this.taskService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id:string, @Body() dto: UpdateTastDto) {
    return this.taskService.update(+id, dto);
  }

  @Patch(':id')
  patchUpdate(@Param('id') id:string, @Body() dto: Partial<UpdateTastDto>) {
    return this.taskService.patchUpdate(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id:string) {
    return this.taskService.delete(+id);
  }

}
