import { IsString } from "class-validator";

export class CreaterActorDto {
    @IsString()
    name: string;
}