export interface Message {
    chatId: string;
    text: string;
}
export interface MessageThousandRound extends Message {
    currentScore: string;
    totalScore: string;
}
export interface MessageThousandRoundDto {
    gamerId: string;
    currentScore: string;
    totalScore: string;
}
