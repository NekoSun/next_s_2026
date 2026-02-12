import { Body, Controller, Get, Headers, Param, Post, Query, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller('movies')
export class MovieController {
  @Get()
  findAll(@Query('genre') genre: string) {
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
  findById(@Param('id') id: string) {
    return {id}
  }

  @Post()
  create(@Body() body: {title: string, genr: string}) {
    // return `Фильм "${title}" был добавлен`
    return body
  }

  @Get('headers')
  getHeaders(@Headers() headers: any) {
    return headers

  }

  @Get('user-agent')
  getUserAgent(@Headers('user-agent') userAgent: string) {
    return {userAgent}

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
    res.status(201).json({message: 'Прывет Мыр!'})
  }
}
