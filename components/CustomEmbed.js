const { EmbedBuilder, AttachmentBuilder } = require('discord.js');

module.exports = (
    title = "Test Network", 
    description = "test", 
    fields = [{ name: "Test", value: "Test" }],
    thumbnail = "attachment://logo.png",
    url = "https://test.org/", 
    color = "Yellow", 
    author = { name: "Test", iconURL: "attachment://logo2.png", url: "https://test.org" },  
    footer = { text: "Test • 2024", iconURL: "attachment://logo.png" }, 
    files = [new AttachmentBuilder("assets/img/logo.png"),new AttachmentBuilder("assets/img/logo2.png")]
) => {

const embed = new EmbedBuilder()
    .setTitle(title)
    .setURL(url)
    .setAuthor(author)
    .setDescription(description)
    .setColor(color)
    .setThumbnail(thumbnail)
    .addFields(fields)
    .setFooter(footer)

    return { embed, files };
    
};