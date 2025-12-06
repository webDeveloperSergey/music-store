import { Injectable, NotImplementedException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma';
import { CreateAuthorDTO, ReadAuthorDTO, ReadManyQueryAuthorDTO } from './dto';

@Injectable()
export class AuthorsService {
  constructor(private readonly prisma: PrismaService) {}

  getMany(query: ReadManyQueryAuthorDTO): Promise<ReadAuthorDTO> {
    throw new NotImplementedException(
      `Method not implemented ${JSON.stringify(query)}`,
    );
  }

  async getOne(authorId: string): Promise<ReadAuthorDTO> {
    const author = await this.prisma.author.findFirst({
      where: { id: authorId },
    });

    if (!author) {
      throw new NotImplementedException(`Author not found ${authorId}`);
    }

    return author;
  }

  async create(data: CreateAuthorDTO): Promise<string> {
    const { id } = await this.prisma.author.create({
      data: { id: randomUUID(), ...data },
    });

    return id;
  }

  update(authorId: string, data: CreateAuthorDTO): Promise<ReadAuthorDTO> {
    console.log(data);
    throw new NotImplementedException(`Method not implemented ${authorId}`);
  }

  delete(authorId: string): Promise<void> {
    throw new NotImplementedException(`Method not implemented ${authorId}`);
  }
}
