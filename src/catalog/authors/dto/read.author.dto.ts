export class ReadAuthorDTO {
  id: string;

  name: string;

  country: string;

  description: string | undefined | null;

  photo: string;

  dateOfBirth: Date;

  dateOfDeath: Date | undefined | null;

  albumTotal: number;
}
