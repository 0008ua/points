import { GamerDocument } from '../entities/gamer.entity';
export type GamerDataType = Pick<GamerDocument, 'name' | 'color' | 'owner' | 'telegramCheckCode' | 'telegramSubscriptionName'> & {
    _id: string;
};
export interface GamerDataDto extends GamerDataType {
}
