import { GamerDocument } from 'src/gamer/entities/gamer.entity';
export type SubscribtionType = Pick<GamerDocument, 'name'> & {
    _id: string;
    ownerName: string;
};
export interface SubscribtionDto extends SubscribtionType {
}
