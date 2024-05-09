module.exports = {
    name: 'test',
    description: 'test',
    devOnly: true,
    //testOnly: Boolean,
    //options: Object[],
    deleted: true,

    callback: (client, interaction) => {
        interaction.reply(
            'Test!'
        );
    },
}