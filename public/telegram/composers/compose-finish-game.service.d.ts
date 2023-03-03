import { GamerService } from 'src/gamer/gamer.service';
import { MessageDto, MessageFinishGame } from '../dto/message.dto';
import { ComposeStrategy } from '../telegram.interface';
export declare class ComposeFinishGameStrategy implements ComposeStrategy<MessageFinishGame> {
    private readonly gamerService;
    environment: {
        en: {
            common: {
                game: string;
                round: string;
                hasFinished: string;
                results: string;
            };
            buttons: {
                subscribe: string;
                back: string;
                viewSubscribtions: string;
            };
            commands: {
                welcome: string;
                getBack: string;
                enterCode: string;
                viewSubscribtions: string;
            };
            messages: {
                subscribeSuccess: string;
                unsubscribeSuccess: string;
                subscribeError: string;
                noSubscribtionsYet: string;
                unsubscribe: string;
                user: string;
                subscriptions: string;
            };
            games: {
                rummy: {
                    name: string;
                    resultsOrder: number;
                };
                uno: {
                    name: string;
                    resultsOrder: number;
                };
                thousand: {
                    name: string;
                    resultsOrder: number;
                };
                train: {
                    name: string;
                    resultsOrder: number;
                };
            };
        };
        uk: {
            common: {
                game: string;
                round: string;
                hasFinished: string;
                results: string;
            };
            buttons: {
                subscribe: string;
                back: string;
                viewSubscribtions: string;
            };
            commands: {
                welcome: string;
                getBack: string;
                enterCode: string;
                viewSubscribtions: string;
            };
            messages: {
                subscribeSuccess: string;
                unsubscribeSuccess: string;
                subscribeError: string;
                noSubscribtionsYet: string;
                unsubscribe: string;
                user: string;
                subscriptions: string;
            };
            games: {
                rummy: {
                    name: string;
                    resultsOrder: number;
                };
                uno: {
                    name: string;
                    resultsOrder: number;
                };
                thousand: {
                    name: string;
                    resultsOrder: number;
                };
                train: {
                    name: string;
                    resultsOrder: number;
                };
            };
        };
    };
    constructor(gamerService: GamerService);
    compose(messages: MessageDto<MessageFinishGame>[], lang: string): Promise<string>;
}
