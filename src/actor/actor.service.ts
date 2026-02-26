import { Injectable } from '@nestjs/common';
import { CreaterActorDto } from './dto/create-actor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Actor } from 'src/generated/prisma/client';

@Injectable()
export class ActorService {
  constructor(
    private prismaService: PrismaService,
  ) {}

  async createActor(dto: CreaterActorDto): Promise<Actor> {
    const { name } = dto;
    const actor = this.prismaService.actor.create({
      data: {
        name
      }
    })
    return actor;
  }
}
 