const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });

client.on('message', async (message) => {

  if(message.channel.type === "dm") return

     var prefix = db.fetch(`po_${message.guild.id}`)

  if(prefix === null) prefix = pp;

      const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    if(message.content.indexOf(prefix) !== 0) return;

    if(command === "play") {

      if(!message.member.voice.channel) return message.reply(`**❌ Error You're Not in Voice Channel**`)

      let music = message.content.split(' ').slice(1).join(' ')

      if(!music) return message.reply(`**❌ Error Please Put The Music Name**`)

        distube.play(message, music);

    }

});

client.on("message", message => {

  if(message.channel.type === "dm") return

     var prefix = db.fetch(`po_${message.guild.id}`)

  if(prefix === null) prefix = pp;

  if(message.content.startsWith(prefix + "file")) {

    const { voice } = message.member

    if(!voice.channel) return message.reply(`**❌ You're Not in Voice Channel**`)

    let att = message.attachments.first()

    if(!att) return message.reply(`**❌ Error Please Put a File**`)

    if(att.url.endsWith(".mp4") || att.url.endsWith(".mov") || att.url.endsWith(".mp3")) {

    voice.channel.join().then((connection) => {

      console.log(att)

      connection.play(att.proxyURL)

      message.channel.send(`🎵 Playing **\`${att.name}\`**\nBy : ${message.author}`)

    })

  }

  }

})

client.on("message", async message => {

  if(message.channel.type === "dm") return

     var prefix = db.fetch(`po_${message.guild.id}`)

  if(prefix === null) prefix = pp;

      const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    if(message.content.indexOf(prefix) !== 0) return;

    if(command === "stop") {

      if(!message.member.voice.channel) return message.reply(`**❌ Error You're Not in Voice Channel**`)

      let que = await distube.getQueue(message)

      if(que) {

        distube.stop(message)

        message.channel.send(`**🎵 The Music Has Been Stopped And The Queue Has Been Cleared**`)

      } else if(!que) {

        message.reply(`**❌ Error No Music Has Been Playing**`)

        return

      }

    }

})

// Music Cmds

client.on("message", async message => {

  if(message.channel.type === "dm") return

     var prefix = db.fetch(`po_${message.guild.id}`)

  if(prefix === null) prefix = pp;

  if(message.content === prefix + "skip") {

      if(!message.member.voice.channel) return message.reply(`**❌ Error You're Not in Voice Channel**`)

      let que = await distube.getQueue(message)

      if(que) {

        distube.skip(message)

        message.channel.send(`**🎵 The Music Has Been Skipped**`)

      } else if(!que) {

        message.reply(`**❌ Error No Music Has Been Playing**`)

        return

      }

    }

})

client.on('message', async (message) => {

  if(message.channel.type === "dm") return

     var prefix = db.fetch(`po_${message.guild.id}`)

  if(prefix === null) prefix = pp;

      const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    if(message.content.indexOf(prefix) !== 0) return;

    if(command === "repeat" || command === "loop") {

      if(!message.member.voice.channel) return message.reply(`**❌ Error You're Not in Voice Channel**`)

      let que = await distube.getQueue(message)

      if(que) {

        let mode = distube.setRepeatMode(message, parseInt(args[0]));

        mode = mode ? mode == 2 ? "Repeat Queue" : "Repeat Song" : "OFF";

        message.channel.send(`🎵 The Repeat Mode Has Been Set To **\`${mode}\`**`);

      } else if(!que) {

        message.reply(`**❌ Error No Music Has Been Playing**`)

        return

      }

    }

});

client.on("message", async message => {

  if(message.channel.type === "dm") return

     var prefix = db.fetch(`po_${message.guild.id}`)

  if(prefix === null) prefix = pp;

      const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    if(message.content.indexOf(prefix) !== 0) return;

    if(command === "volume" || command === "vol") {

      if(!message.member.voice.channel) return message.reply(`**❌ Error You're Not in Voice Channel**`)

      let que = await distube.getQueue(message)

      if(que) {

        const stats = `${que.volume}%`

      let vol = message.content.split(' ').slice(1)

      if(!vol[0]) return message.reply(`**🎵 The Music Volume is \`${stats}\`**`)

      if(parseInt(vol[0]) < 0 || parseInt(vol[0]) > 100) return message.reply(`**❌ Error You Can't Put Number Lower Than \`0\` Or More Than \`150\`**`)

      if(isNaN(vol[0])) return message.reply(`**❌ Error Invalid Number**`)

   distube.setVolume(message, vol)

   message.channel.send(`**🎵 The Music Volume Has Been Set To \`${vol[0]}%\`**`)

      } else if(!que) {

         message.reply(`**❌ Error No Music Has Been Playing**`)

         return

      }

    }

})

client.on("message", async message => {

  if(message.channel.type === "dm") return

     var prefix = db.fetch(`po_${message.guild.id}`)

  if(prefix === null) prefix = pp;

      const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    if(message.content.indexOf(prefix) !== 0) return;

    if(command === "seek") {

      if(!message.member.voice.channel) return message.reply(`**❌ Error You're Not in Voice Channel**`)

      let que = await distube.getQueue(message)

      if(que) {

      let sek = message.content.split(' ').slice(1)

      if(!sek[0]) return message.reply(`**❌ Error Please Put a Number**`)

      distube.seek(message, Number(ms(sek[0])))

      message.channel.send(`**🎵 The Music Has Been Seeked To \`${sek[0]}\`**`)

     } else if(!que) {

       message.reply(`**❌ Error No Music Has Been Playing**`)

       return

     }

   }

})

client.on("message", async message => {

  if(message.channel.type === "dm") return

     var prefix = db.fetch(`po_${message.guild.id}`)

  if(prefix === null) prefix = pp;

      const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    if(message.content.indexOf(prefix) !== 0) return;

    if(command === "pause") {

      if(!message.member.voice.channel) return message.reply(`**❌ Error You're Not in Voice Channel**`)

      let que = await distube.getQueue(message)

      if(que) {

        distube.pause(message)

        message.channel.send(`**🎵 The Music Has Been Paused**`)

      } else if(!que) {

        message.reply(`**❌ Error No Music Has Been Playing**`)

        return

      }

    }

})

client.on("message", async message => {

  if(message.channel.type === "dm") return

     var prefix = db.fetch(`po_${message.guild.id}`)

  if(prefix === null) prefix = pp;

      const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    if(message.content.indexOf(prefix) !== 0) return;

    if(command === "resume") {

      if(!message.member.voice.channel) return message.reply(`**❌ Error You're Not in Voice Channel**`)

      let que = await distube.getQueue(message)

      if(que) {

        distube.resume(message)

        message.channel.send(`**🎵 The Music Has Been Resumed**`)

      } else if(!que) {

        message.reply(`**❌ Error No Music Has Been Playing**`)

        return

      }

    }

})

client.on("message", async message => {

  if(message.channel.type === "dm") return

     var prefix = db.fetch(`po_${message.guild.id}`)

  if(prefix === null) prefix = pp;

      const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    if(message.content.indexOf(prefix) !== 0) return;

    if(command === "shuffle") {

      if(!message.member.voice.channel) return message.reply(`**❌ Error You're Not in Voice Channel**`)

      let que = await distube.getQueue(message)

      if(que) {

        distube.shuffle(message)

        message.channel.send(`**🎵 The Music Has Been Shuffled**`)

      } else if(!que) {

        message.reply(`**❌ Error No Music Has Been Playing**`)

        return

      }

    }

})

client.on("message", async message => {

  if(message.channel.type === "dm") return

     var prefix = db.fetch(`po_${message.guild.id}`)

  if(prefix === null) prefix = pp;

      const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    if(message.content.indexOf(prefix) !== 0) return;

    if(command === "autoplay") {

      if(!message.member.voice.channel) return message.reply(`**❌ Error You're Not in Voice Channel**`)

      let que = await distube.getQueue(message)

      if(que) {

       let mode = distube.toggleAutoplay(message)

        message.channel.send(`🎵 Auto Play Has Been **\`${(mode ? "ON" : "OFF")}\`**`)

      } else if(!que) {

        message.reply(`**❌ Error No Music Has Been Playing**`)

        return

      }

    }

})

client.on('message', async (message) => {

  if(message.channel.type === "dm") return

     var prefix = db.fetch(`po_${message.guild.id}`)

  if(prefix === null) prefix = pp;

  let que = await distube.getQueue(message)

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift();

    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`,`flanger`,`gate`,`haas`,`reverse`,`surround`,`mcompand`,`phaser`,`tremolo`,`earwax`].includes(command)) {

      if(!message.member.voice.channel) return message.reply(`**❌ Error You're Not in Voice Channel**`)

      if(que) {

        let filter = distube.setFilter(message, command);

        message.channel.send(`🎵 Music Filter Has Been Set To **\`${(filter || "OFF")}\`**`);

    } else if(!que) {

      message.channel.send(`**❌ Error No Music Has Been Playing**`)

      return

    }

  }

});

client.on('message', async (message) => {

  if(message.channel.type === "dm") return

     var prefix = db.fetch(`po_${message.guild.id}`)

  if(prefix === null) prefix = pp;

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift();

    if (command == "queue") {

      if(!message.member.voice.channel) return message.reply(`**❌ Error You're Not in Voice Channel**`)

      let qu = await distube.getQueue(message)

      if(qu) {

      const mucolor = await getAverageColor(message.guild.iconURL({ format: 'png' }))

        let queue = distube.getQueue(message);

        message.channel.send(new Discord.MessageEmbed().setDescription(`**${queue.songs.map((song, id) =>

            `${id+1} - [${song.name}](${song.url}) - \`${song.formattedDuration}\``

        ).join("\n")}**`).setFooter(message.author.tag,message.author.displayAvatarURL({

    format: "png",

    size: 4096,

    dynamic: true

})).setTitle("🎵 Queue List").setThumbnail(message.guild.iconURL({

    format: "png",

    size: 4096,

    dynamic: true

})).setTimestamp().setColor(mucolor.hex));

    } else if(!qu) {

      message.reply(`**❌ Error No Music Has Been Playing**`)

    }

  }

});

client.on('message', async (message) => {

  if(message.channel.type === "dm") return

     var prefix = db.fetch(`po_${message.guild.id}`)

  if(prefix === null) prefix = pp;

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    if (command == "skipto") {

    if(!message.member.voice.channel) return message.reply(`**❌ Error You're Not in Voice Channel**`)

    let que = await distube.getQueue(message)

    if(que) {

      let skipnum = message.content.split(' ').slice(1)

      if(!skipnum[0]) return message.reply(`**❌ Error Please Put The Music Number**`)

        distube.jump(message, parseInt(skipnum[0]))

            .catch(err => {

           return message.reply(`**❌ Error Invalid Music Number**`)

            });

      message.channel.send(`**🎵 The Music Has Been Skipped**`)

    } else if(!que) {

      message.reply(`**❌ Error No Music Has Been Playing**`)

    }

  }

});

// Music Cmds

// Music Src

distube

    .on("playSong", async (message, queue, song) => {

        const imcol = await getAverageColor(message.guild.iconURL({ format: "png" }))

        var embed = new Discord.MessageEmbed()

        .setTitle("**" + song.name + "**")

        .setURL(song.url)

        .addField("**Published By :**", `**[${song.info.videoDetails.ownerChannelName}](${song.info.videoDetails.ownerProfileUrl})**`)

        .addField("**Views :**", `**${song.views}**`)

        .addField("**Duration :**", `**${song.formattedDuration}**`)

        .addField("**Played By :**", `**${song.user}**`)

        .setImage(`${song.thumbnail}`)

        .setFooter(`👍 ${song.likes} | 👎 ${song.dislikes}`, song.user.avatarURL({

    format: "png",

    size: 4096,

    dynamic: true

}))

        .setTimestamp()

        .setColor(imcol.hex)

        message.channel.send(embed)

    })

    .on("addSong", async (message, queue, song) => {

              const imcol = await getAverageColor(message.guild.iconURL({ format: "png" }))

        var embed = new Discord.MessageEmbed()

        .setTitle("**" + song.name + "**")

        .setURL(song.url)

        .addField("**Published By :**", `**[${song.info.videoDetails.ownerChannelName}](${song.info.videoDetails.ownerProfileUrl})**`)

        .addField("**Views :**", `**${song.views}**`)

        .addField("**Duration :**", `**${song.formattedDuration}**`)

        .addField("**Added By :**", `**${song.user}**`)

        .setImage(`${song.thumbnail}`)

        .setFooter(`👍 ${song.likes} | 👎 ${song.dislikes}`, song.user.avatarURL({

    format: "png",

    size: 4096,

    dynamic: true

}))

        .setTimestamp()

        .setColor(imcol.hex)

        message.channel.send(embed)

    })

    

    .on("playList", async (message, queue, playlist, song) => {

              const imcol = await getAverageColor(message.guild.iconURL({ format: "png" }))

        var embed = new Discord.MessageEmbed()

        .setTitle("**" + playlist.name + "**")

        .setURL(playlist.url)

        .addField("**Music Count :**", `**${playlist.songs.length}**`)

        .addField("**Played By :**", `**${playlist.user}**`)

        .setImage(`${playlist.thumbnail.url}`)

        .setFooter(playlist.user.tag, playlist.user.avatarURL({

    format: "png",

    size: 4096,

    dynamic: true

}))

        .setTimestamp()

        .setColor(imcol.hex)

        message.channel.send(embed)

        

    })

    

    .on("addList", async (message, queue, playlist) => {

                    const imcol = await getAverageColor(message.guild.iconURL({ format: "png" }))

        var embed = new Discord.MessageEmbed()

        .setTitle("**" + playlist.name + "**")

        .setURL(playlist.url)

        .addField("**Music Count :**", `**${playlist.songs.length}**`)

        .addField("**Added By :**", `**${playlist.user}**`)

        .setImage(`${playlist.thumbnail.url}`)

        .setFooter(playlist.user.tag, playlist.user.avatarURL({

    format: "png",

    size: 4096,

    dynamic: true

}))

        .setTimestamp()

        .setColor(imcol.hex)

        message.channel.send(embed)

        

    })

    .on("searchResult", async (message, result) => {

        let i = 0;

        const mucolor = await getAverageColor(message.guild.iconURL({ format: "png" }))

        message.channel.send(new Discord.MessageEmbed().setTitle(`**🎵 Please Put a Number**`).setDescription(`**${result.map(song => `${++i} - [${song.name}](${song.url}) - \`${song.formattedDuration}\``).join("\n")}**`).setColor(mucolor.hex).setThumbnail(message.guild.iconURL({

    format: "png",

    size: 4096,

    dynamic: true

})).setFooter(`You Have 60s To Put a Number`,message.author.displayAvatarURL({

    format: "png",

    size: 4096,

    dynamic: true

})).setTimestamp());

    })

    .on("searchCancel", (message) => message.channel.send(`**❗ Searching Has Been Stop**`))

    .on("error", (message, e) => {

        console.error(e)

    });

// Music Src

