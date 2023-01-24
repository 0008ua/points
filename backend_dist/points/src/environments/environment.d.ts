export declare const environment: {
    appVersion: string;
    host: string;
    production: boolean;
    games: {
        rummy: {
            name: string;
            showToolbarMenu: boolean;
            maxPlayersQty: number;
            minPlayersQty: number;
            playersColors: string[];
            namedScores: {
                name: string;
                value: number;
                picture: string;
            }[];
            rounds: {
                _id: string;
                icon: string;
                namePostfix: string;
                initialScoresLine: any[];
                initialNamedScoresLine: any[];
            }[];
            stats: {
                _id: string;
                icon: string;
                name: string;
            }[];
        };
        uno: {
            name: string;
            showToolbarMenu: boolean;
            maxPlayersQty: number;
            minPlayersQty: number;
            playersColors: string[];
            namedScores: {
                name: string;
                value: number;
                picture: string;
            }[];
            rounds: {
                _id: string;
                icon: string;
                namePostfix: string;
                initialScoresLine: any[];
                initialNamedScoresLine: any[];
            }[];
        };
        thousand: {
            name: string;
            showToolbarMenu: boolean;
            maxPlayersQty: number;
            minPlayersQty: number;
            playersColors: string[];
            roundsScores: {
                name: string;
                value: number;
            }[];
            rounds: {
                _id: string;
                namePostfix: string;
                icon: string;
                initialScoresLine: any[];
                initialNamedScoresLine: any[];
            }[];
        };
        train: {
            name: string;
            showToolbarMenu: boolean;
            maxPlayersQty: number;
            minPlayersQty: number;
            playersColors: string[];
            routesScores: {
                name: string;
                value: number;
            }[];
            longestRouteScore: number;
            carsScores: {
                name: number;
                value: number;
            }[];
            stats: {
                _id: string;
                icon: string;
                name: string;
            }[];
            rounds: {
                _id: string;
                namePostfix: string;
                icon: string;
                initialScoresLine: number[];
                initialNamedScoresLine: any[];
            }[];
        };
    };
};
