import { IsDate, IsOptional, IsUrl, Length } from 'class-validator';

export class CreateAuthorDTO {
  @Length(2, 100)
  name: string;

  @Length(2, 50)
  country: string;

  @IsOptional()
  @Length(2, 1000)
  description: string | undefined | null;

  @IsUrl({ protocols: ['https'] })
  photo: string;

  @IsDate()
  dateOfBirth: Date;

  @IsOptional()
  @IsDate()
  dateOfDeath: Date | undefined | null;
}
