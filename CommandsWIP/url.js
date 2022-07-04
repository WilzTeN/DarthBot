const shortener = require('isgd');
module.exports = {
    name: "ShortUrl",
    async run(client, message, args) {
        let urlsProhibidos = ["URL"];
        if(urlsProhibidos.some(url => message.content.toLowerCase().includes(url))) return message.channel.send(
            ':x: **esa URL no esta permitida** :x:');

            let url = args[0];
            let customURL = args[1];

            try {
                if(!url) {
                    return message.channel.send('Introduce una URL');
                } else if(!customURL) {
                    shortener.shorten(url, (res) => {
                        if(res.startWith('Error:')) return message.reply(`Hubo un error al acortar la url: \`${res}\``);
                        else message.reply(`URL acortada: ${res}`);
                    });
                } else {
                    shortener.custom(url, customURL, (res) => {
                        if(res.startWith('Error:')) return message.reply(`hubo un error al acortar la UR: \`${res}\``);

                        else message.reply(`URL acortada con la etiqueta: ${res}`);
                    });
                }
            } catch (error) {
                message.reply(`${error}`);
            }
    }
}