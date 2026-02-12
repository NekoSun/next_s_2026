import { IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Length } from "class-validator";

export enum TaskTag {
    HOME = 'home'
}

export class CreateTastDto {
    @IsString()
    @IsNotEmpty()
    @Length(1, 66)
    title: string

    @IsString({message: 'Описание задачи должно быть строкой'})
    @IsOptional()
    description: string

    @IsInt({message: 'Приоритет должен бытть целым числом'})
    @IsPositive({message: 'Приоритет должен быть положительным числом'})
    @IsOptional()
    priority: number

    @IsArray({message: 'Теги должны быть массивом'})
    @IsEnum(TaskTag, {each: true, message: 'Недоступне значение тега'})
    @IsOptional()
    tags: TaskTag[]
}