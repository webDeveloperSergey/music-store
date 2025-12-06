import {
  ConflictException,
  Injectable,
  NotImplementedException,
} from '@nestjs/common';
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
    await this.checkName(data.name);

    const { id } = await this.prisma.author.create({
      data: { id: randomUUID(), ...data },
    });

    return id;
  }

  async update(authorId: string, data: CreateAuthorDTO): Promise<void> {
    await this.checkName(data.name, authorId);

    await this.prisma.author.update({
      where: { id: authorId },
      data,
    });
  }

  delete(authorId: string): Promise<void> {
    throw new NotImplementedException(`Method not implemented ${authorId}`);
  }

  private async checkName(name: string, authorId?: string): Promise<void> {
    const id = authorId ? { not: authorId } : undefined;

    const existingAuthor = await this.prisma.author.findFirst({
      // equals - точное совпадение в БД
      // insensitive - означает поиск без учета регистра
      where: { name: { equals: name, mode: 'insensitive' }, id },
    });

    if (existingAuthor) {
      // ConflictException - статусом 409 (Conflict)
      // Пользователь пытается создать автора с именем, которое уже существует
      throw new ConflictException(`Author with name '${name}' already exists.`);
    }
  }
}
