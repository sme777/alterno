const blockingArray= [
    "A lurking demon blocks your way!",
    "You crumble into a cratar, injured, you slowly climb up to your previous position.",
    "Suddenly, you find yourself at the brink land about to fall into a lava lake! Scared, you step back.",
    "A ferocious demon darts at you. You managed to duck before it hits you, but there is more to come from there! You step back to your rpevious position.",
    "Something burns your foot. It looks like water but it's red. You look up to the terrifying scene of a lava waterwall. Inside skeleton of piranha are munching on the souls of dead. You turn around and run back to the previous position.",
    "You see a narrow path. You keep following and after a long walk find yourself back to where you started.",
    "All you can see is darkness, you step back.",
    "You see an ax fall from the sky. It nearly hits you. You look around carefully, and see a number of booby traps. This road is too dangerous, you return abck to the rpevious position.",
]
let currCircle = "Limbo"
let currPosition = "unknown"
let isDanteAvailable = true
let isBeatriceAvailable = false
let isVirgilAvailable = true

$('body').terminal({
    move: function(dir) {
        if (dir == "east") {
            this.echo("moved east of")
        } else if (dir == "west") {
            this.echo("moved west of")
        } else if (dir == "north") {
            this.echo("moved north of")
        } else if (dir == "south") {
            this.echo("moved south of")
        } else {
            this.echo(blockingArray[Math.floor(Math.random() * blockingArray.length)])
            // this.echo("A lurking demon blocks your way!")
        }
    }, 

    position: function() {
        this.echo(`You are currently in ${currCircle}. The precise position is ${currPosition}`)
    },

    help: function() {
        this.echo("Who would you like to ask for help?")
    },

    Dante: function() {
        if (isDanteAvailable) {
            this.echo("A hand lays on your shoulder. You turn around, and there in front of you is Dante! \n Dante: How can I help you, lost soul?")
        } else {
            this.echo("Dante is currently unavailable...")
        }
    },
    dante: function() {
        if (isDanteAvailable) {
            this.echo("A hand lays on your shoulder. You turn around, and there in front of you is Dante! \n Dante: How can I help you, lost soul?")
        } else {
            this.echo("Dante is currently unavailable...")
        }
        
    },

    Beatrice: function() {
        this.echo("A heavenly light shines, and there Beatrice appears. \n Beatrice: How can I be of assistance?")
    },

    beatrice: function() {
        if (isBeatriceAvailable) {
            this.echo("A heavenly light shines, and there Beatrice appears. \n Beatrice: How can I be of assistance?")
        } else {
            this.echo("Beatrice is currently unavailable...")
        }
    },

    virgil: function() {
        if (isVirgilAvailable) {
            this.echo("Virgil appears from thin air. \n Virgil: What is it that you yearn?")
        } else {
            this.echo("Virgil is currently unavailable...")
        }
    },

    Virgil: function() {
        if (isVirgilAvailable) {
            this.echo("Virgil appears from thin air. \n Virgil: What is it that you yearn?")
        } else {
            this.echo("Virgil is currently unavailable...")
        }
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