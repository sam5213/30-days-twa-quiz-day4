const { Telegraf, Markup } = require('telegraf');


const bot = new Telegraf(process.env.BOT_TOKEN_30DAYS);


bot.start((ctx) => {
    ctx.reply("Привет! Давай сыграем в квиз с несклькими вопросами с таймером. ", Markup.inlineKeyboard([
        Markup.button.webApp("Присупить к квизу", "https://sam5213.github.io/30-days-twa-quiz-day4")]
    ));
});


bot.launch()
    .then(() => {
        console.log("Бот запущен!");
    })
    .catch((error) => {
        console.error("Ошибка при запуске бота: ", error);
    });
