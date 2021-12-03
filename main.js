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
let currPosition = "start of valley"
let isDanteAvailable = false
let isBeatriceAvailable = false
let isVirgilAvailable = false
let isInscriptionSaved = false

$('body').terminal({
    go: function(dir) {
        if (dir == "east") {
            this.echo(`Going east of ${currPosition}`)
        } else if (dir == "west") {
            this.echo(`Going west of ${currPosition}`)
        } else if (dir == "north") {
            this.echo(`Going north of ${currPosition}`)
            if (currPosition == "south valley") {
                currPosition = "start of valley"
            } else if (currPosition == "start of valley") {
                currPosition = "north valley"
                this.echo("An odd stone emerges next to the trees. It seems as if it is talking to you.")
            }
        } else if (dir == "south") {
            this.echo(`Going south of ${currPosition}`)
            if (currPosition == "start of valley") {
                this.echo("As you enter the south valley, you see a shadow wandering. Upon looking closely the figure of Homer emerge.")
                currPosition = "south valley"
            } else if (currPosition == "north valley") {
                currPosition = "start of valley"
            }
            
        } else {
            this.echo(blockingArray[Math.floor(Math.random() * blockingArray.length)])
            // this.echo("A lurking demon blocks your way!")
        }
    }, 

    position: function() {
        this.echo(`You are currently in ${currCircle}. The precise position is ${currPosition}.`)
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

    move: function(cmd) {
        if (cmd == "leaves") {
            this.echo("In disturbing the pile of leaves an inscription is revealed.")
        } else if (cmd == "branch") {

        } else if (cmd == "note") {

        } else if (cmd == "rock") {

        } else if (cmd == "stone") {
            if (isBeatriceAvailable) {
                this.echo("Beatrice: The stone shall turn. \nMagically, the stone is turned and underneath is a shining golden key. \nBeatrice disappears.")
                isBeatriceAvailable = false
            } else {
                this.echo("The stone is too heavy to move, but looking closely you see sketches on the stone.")
            }
        } else {
            this.echo(`Cannot move ${cmd}`)
        }

    },

    read: function(cmd) {
        if (cmd == "inscription") {
            this.echo("The inscription read: \n'''Here suffer those who did not sin, \nyet did not have the required portal of our faith. \nTheir punishment is the denial of Paradise.'''\nBelow is a cryptic picture of a key and the drawing of Citadel.")
        } else if (cmd == "sketches") {
            this.echo("The sketch reads:\n '''The key lays under the stone. \nThou shall want to turn the stone, \nthou shall need divine power.'''")
            isBeatriceAvailable = true
        }
    },

    save: function(cmd) {
        if (cmd == "inscription") {
            this.echo("Inscription saved!")
            isInscriptionSaved = true
        }
    },

    speak: function(cmd1, cmd2) {
        if (cmd1 == "to") {
            if (cmd2 == "Homer") {
                this.echo("Homer: You seem like a lost soul, but you are not dead. What are you doing here?")
            } else if (cmd2 == "stone") {
                this.echo("Silence.")
            } else {
                this.echo(`Cannot speak to ${cmd2}`)
            }
        }
    },

    pick: function(cmd) {
        if (cmd == "key") {
            this.echo("Keys picked!")
        }
    },

    idk: function() {
        this.echo("Homer: Well, to get out of Hell you will need to traverse all the circle of hell. I will guide you through Limbo, but for other circles you might not be as lucky. \nTo go to Lust you must find the key for Citadel and open them with a map. Do you have the map? ")
    },

    no: function() {
        this.echo("Homer: Then I suggest you find that first. Once you do you will need to go north of valley to find the key. I must go now. \n Homer disappears.")
    },

    yes: function() {
        this.echo("Homer: Then you should go north of valley to find the key. I must go now. \n Homer disappears.")
    }

    // move: function() {
    //     this.echo("Move what?")
    // }

}, {
    greetings: `Welomce to Inferno in Shell
============================
It's dark and deep and foggy. In front of you realizes a gloomy building. The Citadel of Limbo.
\nOn the ground is a pile of leaves.
`
})