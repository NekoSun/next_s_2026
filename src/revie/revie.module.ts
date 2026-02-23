import { Module } from '@nestjs/common';
import { RevieService } from './revie.service';
import { RevieController } from './revie.controller';
import { ReviewEntity } from './entities/review.entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from 'src/movie/movie.service';
import { MovieEntity } from 'src/movie/entities/movie.entity';
import { ActorEntity } from 'src/actor/entities/actor.entities';

@Module({
  imports:[TypeOrmModule.forFeature([ReviewEntity, MovieEntity, ActorEntity])],
  controllers: [RevieController],
  providers: [RevieService, MovieService],
})
export class RevieModule {}
