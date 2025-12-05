import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import {
  CreateAuthorDTO,
  ParamsAuthor,
  ReadAuthorDTO,
  ReadManyQueryAuthorDTO,
} from './dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly service: AuthorsService) {}

  @Get()
  getMany(@Query() query: ReadManyQueryAuthorDTO): Promise<ReadAuthorDTO> {
    return this.service.getMany(query);
  }

  @Get(':authorId')
  getOne(@Param() { authorId }: ParamsAuthor): Promise<ReadAuthorDTO> {
    return this.service.getOne(authorId);
  }

  @Post()
  async create(@Body() data: CreateAuthorDTO): Promise<ReadAuthorDTO> {
    const id = await this.service.create(data);
    return this.service.getOne(id);
  }

  @Put(':authorId')
  async update(
    @Param() { authorId }: ParamsAuthor,
    @Body() data: CreateAuthorDTO,
  ): Promise<ReadAuthorDTO> {
    await this.service.update(authorId, data);
    return this.service.getOne(authorId);
  }

  @Delete(':authorId')
  delete(@Param() { authorId }: ParamsAuthor): Promise<void> {
    return this.service.delete(authorId);
  }
}
