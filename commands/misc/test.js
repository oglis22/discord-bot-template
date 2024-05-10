module.exports = {
    name: 'test',
    description: 'test',
    devOnly: false,
    //testOnly: Boolean,
    //options: Object[],
    deleted: false,

    callback: (client, interaction) => {
        interaction.reply(
            'Test!'
        );
    },
}