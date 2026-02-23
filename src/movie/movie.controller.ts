import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { MovieService } from './movie.service';
import { createMovieDto } from './dto/movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @Post()
  create(@Body() dto: createMovieDto) {
    return this.movieService.create(dto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.movieService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: createMovieDto) {
    return this.movieService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.movieService.delete(id);
  }

  @Get()
  findAllO(@Query('genre') genre: string) {
    return genre
      ? `Фильмы в жанре: ${genre}`
      : [
        {
          title: 'Fine Club'
        },
        {
          title: 'Pulp Fiction'
        }
      ]
  }

  @Get(':id')
  findByIdO(@Param('id') id: string) {
    return { id }
  }

  @Post()
  createO(@Body() body: { title: string, genr: string }) {
    // return `Фильм "${title}" был добавлен`
    return body
  }

  @Get('headers')
  getHeaders(@Headers() headers: any) {
    return headers

  }

  @Get('user-agent')
  getUserAgent(@Headers('user-agent') userAgent: string) {
    return { userAgent }

  }

  @Get('request')
  getRequestDetails(@Req() req: Request) {
    return {
      method: req.method,
      url: req.url,
      headers: req.headers,
      query: req.query,
      params: req.params
    }
  }


  @Get('response')
  getResponseDetails(@Res() res: Response) {
    res.status(201).json({ message: 'Прывет Мыр!' })
  }
}
