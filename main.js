$('body').terminal({
    hello: function (what) {
        this.echo('Hello, ' + what +
            '. Wellcome to this terminal.')
    },
    run: () => {

    },
    talk: () => {

    },

}, {
    greetings: `Welomce to Inferno in Shell
============================
Press any key to start
`
})