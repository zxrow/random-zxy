const fs = require('fs-extra')
const chalk = require('chalk')
const readlineSync = require('readline-sync')
const fetch = require('node-fetch')
const axios = require('axios')

const random = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ23456789'.split('');

function anunya(len) {
    const result = [];
    for (let i = 0; i < len; i++) result.push(random[Math.floor(Math.random() * random.length)]);
    return result.join('');
}

console.log(chalk.cyan(`${chalk.red('- - OTAKU | ANIMLOVER - -')}\nRandom Zxy\nCreated by zxagung\nFb : facebook.com/laoneisagung9\nIG : instagram.com/_zxagung\n${chalk.red('- - SANSEKAI - -')}\n`))
console.log(`${chalk.cyan('TYPE')}\n1. Wallpaper\n2. Waifu\n3. Waifu (NSFW)\n4. neko\n5. trap\n6. blowjob\n7. asupan tiktok video\n8. meme spongbob\n9. random gambar 18\n10. random loli gif\n11. pemandangan anime\n12. pemandangan animev2\n`)

const type = readlineSync.questionInt(chalk.yellow("- Mau type nomor berapa?: "))
if (type > 7) return console.log('Pilihannya cuma 1 - 12 gan')

const jml = readlineSync.questionInt(chalk.yellow("- Mau download berapa? (max 50): "))
if (jml > 50) return console.log('Maksimal 50 gan')


try {
    console.log(chalk.yellow('\nLagi proses download...\nNanti letak  ada di folder "wp-randomzxy"'))
    for (let i = 0; i < jml; i++) {
        if (type == '1') {
            axios.get(`https://nekos.life/api/v2/img/wallpaper`)
                .then(async (res) => {
                    const data = res.data.url
                    if (fs.existsSync('/sdcard/wp-randomzxy')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/wp-randomzxy')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
        } else if (type == '2') {
            axios.get(`https://api.waifu.pics/sfw/waifu`)
                .then(async (res) => {
                    const data = res.data.url
                    if (fs.existsSync('/sdcard/wp-randomzxy')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/wp-randomzxy')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
        } else if (type == '3') {
            axios.get(`https://api.waifu.pics/nsfw/waifu`)
                .then(async (res) => {
                    const data = res.data.url
                    if (fs.existsSync('/sdcard/wp-randomzxy')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/wp-randomzxy')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
                } else if (type == '4') {
            axios.get(`https://nekos.life/api/neko`)
                .then(async (res) => {
                    const data = res.data.url
                    if (fs.existsSync('/sdcard/wp-randomzxy')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/wp-randomzxy')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
                } else if (type == '5') {
            axios.get(`https://nekos.life/api/v2/img/trap`)
                .then(async (res) => {
                    const data = res.data.url
                    if (fs.existsSync('/sdcard/wp-randomzxy')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/wp-randomzxy')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
                } else if (type == '6') {
            axios.get(`https://nekos.life/api/v2/img/blowjob`)
                .then(async (res) => {
                    const data = res.data.url
                    if (fs.existsSync('/sdcard/wp-randomzxy')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/wp-randomzxy')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
                } else if (type == '7') {
            axios.get(`https://apixxy.herokuapp.com/api/asupan/tiktok?apikey=premiumzx`)
                .then(async (res) => {
                    const data = res.data.result.url
                    if (fs.existsSync('/sdcard/wp-randomzxy')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.mp4`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/wp-randomzxy')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.mp4`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
                } else if (type == '8') {
            axios.get(`https://apixxy.herokuapp.com/api/memespongbob?apikey=premiumzx`)
                .then(async (res) => {
                    const data = res.data.result.url
                    if (fs.existsSync('/sdcard/wp-randomzxy')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/wp-randomzxy')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
                } else if (type == '9') {
            axios.get(`https://apixxy.herokuapp.com/api/gambar18?apikey=premiumzx`)
                .then(async (res) => {
                    const data = res.data.result.url
                    if (fs.existsSync('/sdcard/wp-randomzxy')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/wp-randomzxy')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
                } else if (type == '10') {
            axios.get(`https://apixxy.herokuapp.com/api/loligif?apikey=premiumzx`)
                .then(async (res) => {
                    const data = res.data.result.url
                    if (fs.existsSync('/sdcard/wp-randomzxy')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.gif`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/wp-randomzxy')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.gif`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
                } else if (type == '11') {
            axios.get(`https://apixxy.herokuapp.com/api/pemandangananime?apikey=premiumzx`)
                .then(async (res) => {
                    const data = res.data.result.url
                    if (fs.existsSync('/sdcard/wp-randomzxy')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/wp-randomzxy')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
                } else if (type == '12') {
            axios.get(`https://apixxy.herokuapp.com/api/pemandangananimev2?apikey=premiumzx`)
                .then(async (res) => {
                    const data = res.data.result.url
                    if (fs.existsSync('/sdcard/wp-randomzxy')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/wp-randomzxy')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-randomzxy/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
        } else {
            console.log(chalk.red('Pilihan hanya 1 - 12'))
        }
    }
} catch (err) {
    console.log(err)
}
