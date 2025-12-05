import { Controller } from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly service: AuthorsService) {}

  getMany() {}

  getOne() {}

  create() {}

  update() {}

  delete() {}
}
