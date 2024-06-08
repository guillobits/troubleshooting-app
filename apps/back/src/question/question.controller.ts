import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne({id: +id});
  }
}
