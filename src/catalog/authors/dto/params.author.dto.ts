import { IsUUID } from 'class-validator';

export class ParamsAuthor {
  @IsUUID(4)
  authorId: string;
}
