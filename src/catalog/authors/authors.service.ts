import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateAuthorDTO, ReadAuthorDTO, ReadManyQueryAuthorDTO } from './dto';

@Injectable()
export class AuthorsService {
  getMany(query: ReadManyQueryAuthorDTO): Promise<ReadAuthorDTO> {
    throw new NotImplementedException(
      `Method not implemented ${JSON.stringify(query)}`,
    );
  }

  getOne(authorId: string): Promise<ReadAuthorDTO> {
    throw new NotImplementedException(`Method not implemented ${authorId}`);
  }

  create(data: CreateAuthorDTO): Promise<string> {
    throw new NotImplementedException(
      `Method not implemented ${JSON.stringify(data)}`,
    );
  }

  update(authorId: string, data: CreateAuthorDTO): Promise<ReadAuthorDTO> {
    console.log(data);
    throw new NotImplementedException(`Method not implemented ${authorId}`);
  }

  delete(authorId: string): Promise<void> {
    throw new NotImplementedException(`Method not implemented ${authorId}`);
  }
}
