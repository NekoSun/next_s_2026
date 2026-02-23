import { Body, Controller, Post } from '@nestjs/common';
import { RevieService } from './revie.service';
import { CreateRevDto } from './dto/create-rev.dto';

@Controller('reviews')
export class RevieController {
  constructor(private readonly revieService: RevieService) {}

  @Post()
  create(@Body() dto: CreateRevDto) {
    return this.revieService.create(dto)
  }
}
