const { Telegraf, Markup } = require('telegraf');


const bot = new Telegraf(process.env.BOT_TOKEN_30DAYS);


bot.start((ctx) => {
    //TODO
});


bot.launch()
    .then(() => {
        console.log("Бот запущен!");
    })
    .catch((error) => {
        console.error("Ошибка при запуске бота: ", error);
    });
