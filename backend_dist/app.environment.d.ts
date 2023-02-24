import { BtnType, CmdType } from './app.interfaces';
export declare const environment: {
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
export declare const buttons: {
    [key in BtnType]: string;
};
export declare const commands: {
    [key in CmdType]: string;
};
