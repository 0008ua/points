"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = exports.buttons = exports.environment = void 0;
exports.environment = {
    en: {
        common: {
            game: 'game',
            round: 'round',
            hasFinished: 'has finished',
            results: 'Results',
        },
        buttons: {
            subscribe: 'Subscribe user',
            back: 'Back',
            viewSubscribtions: 'View Subscribtions',
        },
        commands: {
            welcome: 'Welcome',
            getBack: 'Get back to the main menu',
            enterCode: 'Enter code',
            viewSubscribtions: 'View subscribtions',
        },
        messages: {
            subscribeSuccess: 'You have successfully subscribed',
            unsubscribeSuccess: 'You have successfully unsubscribed',
            subscribeError: 'Subscription error',
            noSubscribtionsYet: "You haven't subscribtions yet",
            unsubscribe: 'Unsubscribe',
            user: 'user',
            subscriptions: 'Subscriptions',
        },
        games: {
            rummy: {
                name: 'Rummy',
                resultsOrder: 1,
            },
            uno: {
                name: 'Uno',
                resultsOrder: 1,
            },
            thousand: {
                name: 'Thousand - 1000',
                resultsOrder: -1,
            },
            train: {
                name: 'Ticket to ride',
                resultsOrder: -1,
            },
        },
    },
    uk: {
        common: {
            game: 'гру',
            round: 'раунд',
            hasFinished: 'закінчено',
            results: 'Результати',
        },
        buttons: {
            subscribe: 'Підписати користувача',
            back: 'Повернутися',
            viewSubscribtions: 'Підписки',
        },
        commands: {
            welcome: 'Вітаю!',
            getBack: 'Повернулися в головне меню',
            enterCode: 'Введіть код',
            viewSubscribtions: 'Підписки',
        },
        messages: {
            subscribeSuccess: 'Ви підписалися',
            unsubscribeSuccess: 'Ви відписалися',
            subscribeError: 'Помилка підписки',
            noSubscribtionsYet: 'У вас ще немає підписок',
            unsubscribe: 'Відписатися',
            user: 'користувач',
            subscriptions: 'Підписки',
        },
        games: {
            rummy: {
                name: 'Румі',
                resultsOrder: 1,
            },
            uno: {
                name: 'Уно',
                resultsOrder: 1,
            },
            thousand: {
                name: 'Тисяча - 1000',
                resultsOrder: -1,
            },
            train: {
                name: 'Ticket to ride',
                resultsOrder: -1,
            },
        },
    },
};
exports.buttons = exports.environment.en.buttons;
exports.commands = exports.environment.en.commands;
//# sourceMappingURL=app.environment.js.map