// t.me/codingg_solutionn_bot

const { Telegraf } = require('telegraf');
const axios = require('axios');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const binarysearchcpp = `
int binarySearch(int arr[], int n, int key) {
    int left = 0, right = n - 1, result = -1;
    while(left <= right) {
        int mid = (left + right) >> 1;
        if(arr[mid] == key) {
            result = mid;
            break;
        } else if(arr[mid] > key) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return result;
}
`

bot.start((ctx) => ctx.reply('Welcome to Yuvraj telegram bot for coding solution'));
bot.command('binarysearchcpp', (ctx) => ctx.reply(binarysearchcpp));
bot.command('lisdpcpp',
    async (ctx) => {
        const response = await axios.get('https://raw.githubusercontent.com/yuvraj1107thapa/CppCompetitiveRepository/main/Algo%2B%2B/Dynamic%20Programming/Basics/LIS/LIS.cpp');
        ctx.reply(response.data);
    }
);
bot.launch();