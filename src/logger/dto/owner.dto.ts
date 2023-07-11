import { OwnerData } from 'src/app.interfaces';

export class OwnerDataDto {
  data: OwnerData[];
  totalDocuments: number;
}

export class OwnerQueryDto {
  name: string;
  skip?: number;
  limit?: number;
}
