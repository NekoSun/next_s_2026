import { IsBoolean, IsNotEmpty, IsString, Length } from "class-validator";

export class UpdateTastDto {
    @IsString({message: 'Название задачи должно быть строкой'})
    @IsNotEmpty({message: 'Название задачи не может быть пустым'})
    @Length(1, 66, {message: 'Название должно быть от 2 до 66 символов', context: {errorCode: 106}})
    title: string

    @IsBoolean({message: 'Статус должен быть булевым выражением'})
    isCompleted: boolean
}