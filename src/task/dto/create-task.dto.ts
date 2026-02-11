import { IsString } from "class-validator";

export class CreateTastDto {
    @IsString()
    title: string
}