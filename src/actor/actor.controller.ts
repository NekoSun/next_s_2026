import { Body, Controller, Post } from '@nestjs/common';
import { ActorService } from './actor.service';
import { CreaterActorDto } from './dto/create-actor.dto';
import { ActorModel } from 'src/generated/prisma/models';

@Controller('actors')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

    @Post()
    async create(@Body() dto: CreaterActorDto): Promise<ActorModel> {
      return this.actorService.createActor(dto);
    }
}
