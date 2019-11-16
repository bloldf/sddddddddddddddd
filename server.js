const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://blush-dash.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
const zalgo = require("zalgolize");
const math = require("math-expression-evaluator");
const figlet = require("figlet");
const fs = require("fs");
const ms = require("ms");
const prefix = "$";
var Client = client;


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("$help",{type: 'playing'});
 


    console.log(` ????????? |> Name: ${client.user.username}`);
 console.log(` ????????? |> Servers: ${client.guilds.size}`);
 console.log(` ???????????????????? |> Members: ${client.users.size}`);
 console.log(` ????????????????????? |> Channels: ${client.channels.size}`);
 console.log(` ???????????????????? |> Channels: ${client.channels.size}`);
 console.log(` ???????????????????? |> Id: ${client.user.id}`);
});

client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { /// This is The DMS Code Send The Help In DMS // Code By NotGucci
    let pages = [`**
        ***__=-  Public Commands| اوامر عامة  -=__***
**
$id : 
$credits : التحويل ومعرفة الرصيد
$daily : الحصول على الراتب اليومي
$avatar : صورتك او صورة الي تمنشنو
=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.
$inv :لدعوة البوت الى سيرفرك
$upport : سيرفر الدعم الفني
**
`,`
        ***__=-=  Admin Commands - اوامر ادارية  =-=__***
**
#server  : معلومات السيرفر
#clear : مسح الشات
#mute @user <time> : اعطاء العضو ميوت 
#unmute @user : لفك الميوت عن الشخص 
#kick @user <reason> : طرد الشخص من السيرفر
#ban @user <reason> : حضر الشخص من السيرفر
$unban @user id : 
=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.

**


`]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('⏮').then( r => {
            msg.react('⏭')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
      
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
}); 


client.on('message', luxy => {
if(luxy.content === 'سلام عليكم') {
luxy.reply('وع̸̢̂ليكم ا̡̛̕ل̷͘͜سلام ͚ͮ̊ورͭحمه̠̣̚ ا̥̱͓ل̊҉͜ل͌̔ه̛ ҉وبر̼ك͋ͭ̃ات̗̻ͅه̄̿̔');
}
});

client.on('message', luxy => {
if(luxy.content === '.') {
luxy.reply('Wè͜lcom͈̒̄e͍̼̮ T̒̎̍o͉̘ͅ ̡̽̏S̺͓̖e̛rver');
}
});




client.on("message", function(msg) {
  if (msg.content.startsWith(prefix + "server")) {
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(
        ":globe_with_meridians:** نوع السيرفر**",
        `[** __${msg.guild.region}__ **]`,
        true
      )
      .addField(
        ":medal:** __الرتب__**",
        `[** __${msg.guild.roles.size}__ **]`,
        true
      )
      .addField(
        ":red_circle:**__ عدد الاعضاء__**",
        `[** __${msg.guild.memberCount}__ **]`,
        true
      )
      .addField(
        ":large_blue_circle:**__ عدد الاعضاء الاونلاين__**",
        `[** __${
          msg.guild.members.filter(m => m.presence.status == "online").size
        }__ **]`,
        true
      )
      .addField(
        ":pencil:**__ الرومات الكتابية__**",
        `[** __${msg.guild.channels.filter(m => m.type === "text").size}__** ]`,
        true
      )
      .addField(
        ":microphone:**__ رومات الصوت__**",
        `[** __${
          msg.guild.channels.filter(m => m.type === "voice").size
        }__ **]`,
        true
      )
      .addField(":crown:**__ الأونـر__**", `**${msg.guild.owner}**`, true)
      .addField(":id:**__ ايدي السيرفر__**", `**${msg.guild.id}**`, true)

      .addField(
        ":date:**__ تم عمل السيرفر في__**",
        msg.guild.createdAt.toLocaleString()
      );

    msg.channel.send({ embed: embed });
  }
});

client.on("message", message => {

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "avatar server"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} ** `)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        if (message.author.bot) return
        var mentionned = message.mentions.users.first();
    var cutie;
      if(mentionned){
          var cutie = mentionned;
      } else {
          var cutie = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setColor("#51545b")
        .setTitle('Avatar Link')
        .setURL(`${cutie.avatarURL}`)
        .setImage(`${cutie.avatarURL}`)
        .setFooter("Requested by" + message.author.tag, message.author.avatarURL)
      message.channel.sendEmbed(embed);
    }
});


client.on('message', function(message) {
    if(!message.channel.guild) return;
    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if (message.author.equals(client.user)) return;
    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(' ');
    switch (args[0].toLocaleLowerCase()) {
    case "clear" :
    message.delete()
    if(!message.channel.guild) return
    if(message.member.hasPermissions(0x000)){ if (!args[1]) {
    message.channel.fetchMessages()
    .then(messages => {
    message.channel.bulkDelete(messages);
    var messagesDeleted = messages.array().length;
    message.channel.sendMessage(""  + 'تم مسح الشات' + "").then(m => m.delete(800))

    })

    } else {
    let messagecount = parseInt(args[1]);
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    message.channel.sendMessage("" + 'الرسائل التي تم مسحها:' + args[1] +  "").then(m => m.delete(800))
    message.delete(1000);
    }
    } else {
    var manage = new Discord.RichEmbed()
    .setDescription('You Do Not Have Permission MANAGE_MESSAGES :(')
    .setColor("RANDOM")
    message.channel.sendEmbed(manage)
    return;
    }
    }
    });

client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  let user = message.mentions.users.first();
  
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});

client.on('message', message =>{
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
  if(!message.member.hasPermission('BAN_MEMBERS')) return;
  let args = message.content.split(" ").slice(1).join(" ");
  if(args == 'all') {message.guild.fetchBans().then(zg => {
  zg.forEach(NoNo => {message.guild.unban(NoNo);})});
  return message.channel.send('**✅ Unbanned all members **')}
  if(!args) return message.channel.send('**Please Type the member ID / all**');
  message.guild.unban(args).then(m =>{message.channel.send(`**✅ Unbanned ${m.username}**`);
  }).catch(stry =>{message.channel.send(`**🙄 - I can't find \`${args}\` in the ban list**`)});
  }});

client.on('message', async(message) => {
    let args = message.content.split(' ');
    if(args[0] == `${prefix}kick`){
        if(!message.guild || message.author.bot) return undefined;
        if(!message.member.hasPermission('KICK_MEMBERS') || !message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return;
        let user = message.guild.members.get(args[1]) || message.mentions.members.first();
        let reason = args.slice(2).join(" ");
        if(!user) return message.channel.send(`**Usage:** ${prefix}kick @member [reason]`);
        if(!reason) reason = 'No reason provided.';
        if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`You cant kick **${user.user.username}** because his role highest than your role!`);
        if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`I cant kick **${user.user.username}** because his role highest than my role!`);
        if(!message.guild.member(user.user).kickable) return message.channel.send(`I cant kick **${user.user.username}**.`);
        await message.guild.member(user).kick(reason, user);
        await message.channel.send(`**${user.user.username}** has been kicked from the server! \`\`${reason}\`\``);
     }
 });

client.on('message', async message =>{
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
  
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
 
 
  
      
  }
if(command === `unmute`) {

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});

client.on('message', message => { 
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`ArtBot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });



































































































































































































client.login('NjQ0OTczNTczMzMyNTMzMjc2.Xc7_1w.Q9ZKI0bwaaKRLAnI6XibiVffHeQ');