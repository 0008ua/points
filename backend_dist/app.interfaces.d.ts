export type UID = string;
export type GameType = 'rummy' | 'uno' | 'thousand' | 'train';
export interface NamedScore {
    name: string;
    value: number;
    picture?: string;
    total?: number;
}
