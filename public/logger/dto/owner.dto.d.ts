import { OwnerData } from 'src/app.interfaces';
export declare class OwnerDataDto {
    data: OwnerData[];
    totalDocuments: number;
}
export declare class OwnerQueryDto {
    name: string;
    skip?: number;
    limit?: number;
}
