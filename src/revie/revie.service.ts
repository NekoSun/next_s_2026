import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewEntity } from './entities/review.entities';
import { Repository } from 'typeorm';
import { CreateRevDto } from './dto/create-rev.dto';
import { MovieService } from 'src/movie/movie.service';

@Injectable()
export class RevieService {
  constructor(
    @InjectRepository(ReviewEntity)
    private readonly reviewRepository: Repository<ReviewEntity>,
    private readonly movieService: MovieService
  ) {}

  async create(dto: CreateRevDto): Promise<ReviewEntity> {
    const {text, rating, movieId} = dto

    const movie = await this.movieService.findById(movieId);

    const review = this.reviewRepository.create({text, rating, movie})

    return await this.reviewRepository.save(review)
  }
}
