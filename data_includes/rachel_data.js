var theShuffle = rshuffle2("c1", "c2", "c3", "c4", "c5", "c6")
var theShuffle2 = rshuffle2("c1-2", "c2-2", "c3-2", "c4-2", "c5-2", "c6-2")


var shuffleSequence1 = seq("intro", sepWith("sep", seq("pracMsg", "sepStart1", "sepStart2", "sepStart3", "sepStart4", rshuffle2("practice"), "realMsg", "sepStart1", "sepStart2", "sepStart3", "sepStart4", theShuffle, "break", "sepStart1", "sepStart2", "sepStart3", "sepStart4", theShuffle2, "sr", "lastPage")));
var shuffleSequence2 = seq("intro", sepWith("sep", seq("pracMsg", "sepStart1", "sepStart2", "sepStart3", "sepStart4", rshuffle2("practice"), "realMsg", "sepStart1", "sepStart2", "sepStart3", "sepStart4", theShuffle2, "break", "sepStart1", "sepStart2", "sepStart3", "sepStart4", theShuffle, "sr", "lastPage")));

function chooseShuffle(){
   i = Math.floor(Math.random() * 2);
   console.log(i)

   if (i == 1) {
     return shuffleSequence1
   }
   else {
     return shuffleSequence2
   }
}

var shuffleSequence = chooseShuffle()

var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 500,
        normalMessage: "",
        ignoreFailure: true
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        randomOrder: false,
        as: [['y', 'la'], ['m', 'el']],
        presentHorizontally: true,
        timeout: 3000
    },
    "Message", {
        hideProgressBar: true,
        transfer: "click"
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

//DID CHANGE TO VALUE OF CSS_INCLUDES_DIR in server_conf.py. Change this back to "css_includes" if messed up
var items = [

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    ["sr", "__SendResults__", { }],

    ["sepStart1", "Separator", {normalMessage: "Empieza en...", transfer: 1000 }],
    ["sepStart2", "Separator", {normalMessage: "3...", transfer: 1000 }],
    ["sepStart3", "Separator", {normalMessage: "2...", transfer: 1000 }],
    ["sepStart4", "Separator", {normalMessage: "1...", transfer: 1000 }],

    ["sep", "Separator", { }],
    ["sep", "Separator", {normalMessage: "+"}],

    ["intro", "Message", {
      html: { include: "intro.html"}
    }],

    ["intro", "Form", {
      html: { include: "ConsentFormRevised.html"}
    }],
    ["intro", "Form", {
      html: { include: "questionnaire.html"}
    }],
    ["intro", "Form", {
      html: { include: "profTest1.html"}
    }],
    ["intro", "Form", {
      html: { include: "profTest2.html"}
    }],
    ["intro", "Form", {
      html: { include: "profTest3.html"}
    }],


    ["pracMsg", "Message", {html: {include: "instr1.html"}}],
    ["realMsg", "Message", {html: {include: "instr2.html"}}],
    ["break", "Message", {html: {include: "break.html"}}],
    ["lastPage", "Message", {html: {include: "lastPage.html"}}],

    ["c1", "Question", {hasCorrect: 1, q: "deseo"}],
["c1", "Question", {hasCorrect: 1, q: "sombrero"}],
["c1", "Question", {hasCorrect: 1, q: "vuelo"}],
["c1", "Question", {hasCorrect: 1, q: "jardín"}],
["c1", "Question", {hasCorrect: 1, q: "invierno"}],
["c1", "Question", {hasCorrect: 1, q: "queso"}],
["c1", "Question", {hasCorrect: 1, q: "cielo"}],
["c1", "Question", {hasCorrect: 1, q: "otoño"}],
["c1-2", "Question", {hasCorrect: 1, q: "verano"}],
["c1-2", "Question", {hasCorrect: 1, q: "espejo"}],
["c1-2", "Question", {hasCorrect: 1, q: "zapato"}],
["c1-2", "Question", {hasCorrect: 1, q: "anillo"}],
["c1-2", "Question", {hasCorrect: 1, q: "ascensor"}],
["c1-2", "Question", {hasCorrect: 1, q: "río"}],
["c1-2", "Question", {hasCorrect: 1, q: "diente"}],
["c1-2", "Question", {hasCorrect: 1, q: "ajo"}],
["practice", "Question", {hasCorrect: 1, q: "melocotón"}],
["practice", "Question", {hasCorrect: 1, q: "puerto"}],
["c2", "Question", {hasCorrect: 0, q: "escalera"}],
["c2", "Question", {hasCorrect: 0, q: "pluma"}],
["c2", "Question", {hasCorrect: 0, q: "calle"}],
["c2", "Question", {hasCorrect: 0, q: "boda"}],
["c2", "Question", {hasCorrect: 0, q: "iglesia"}],
["c2", "Question", {hasCorrect: 0, q: "esperanza"}],
["c2", "Question", {hasCorrect: 0, q: "uva"}],
["c2", "Question", {hasCorrect: 0, q: "botella"}],
["c2-2", "Question", {hasCorrect: 0, q: "nariz"}],
["c2-2", "Question", {hasCorrect: 0, q: "pizarra"}],
["c2-2", "Question", {hasCorrect: 0, q: "pregunta"}],
["c2-2", "Question", {hasCorrect: 0, q: "frontera"}],
["c2-2", "Question", {hasCorrect: 0, q: "piña"}],
["c2-2", "Question", {hasCorrect: 0, q: "voz"}],
["c2-2", "Question", {hasCorrect: 0, q: "fresa"}],
["c2-2", "Question", {hasCorrect: 0, q: "escuela"}],
["practice", "Question", {hasCorrect: 0, q: "bolsa"}],
["practice", "Question", {hasCorrect: 0, q: "salud"}],
["c3", "Question", {hasCorrect: 0, q: "paz"}],
["c3", "Question", {hasCorrect: 0, q: "maleta"}],
["c3", "Question", {hasCorrect: 0, q: "silla"}],
["c3", "Question", {hasCorrect: 0, q: "ventaja"}],
["c3", "Question", {hasCorrect: 0, q: "falda"}],
["c3", "Question", {hasCorrect: 0, q: "pimienta"}],
["c3", "Question", {hasCorrect: 0, q: "montaña"}],
["c3", "Question", {hasCorrect: 0, q: "frase"}],
["c3-2", "Question", {hasCorrect: 0, q: "uña"}],
["c3-2", "Question", {hasCorrect: 0, q: "cabeza"}],
["c3-2", "Question", {hasCorrect: 0, q: "mesa"}],
["c3-2", "Question", {hasCorrect: 0, q: "nieve"}],
["c3-2", "Question", {hasCorrect: 0, q: "mochila"}],
["c3-2", "Question", {hasCorrect: 0, q: "manzana"}],
["c3-2", "Question", {hasCorrect: 0, q: "playa"}],
["c3-2", "Question", {hasCorrect: 0, q: "estrella"}],
["practice", "Question", {hasCorrect: 0, q: "hambre"}],
["practice", "Question", {hasCorrect: 0, q: "lluvia"}],
["c4", "Question", {hasCorrect: 1, q: "puente"}],
["c4", "Question", {hasCorrect: 1, q: "hígado"}],
["c4", "Question", {hasCorrect: 1, q: "peinado"}],
["c4", "Question", {hasCorrect: 1, q: "amor"}],
["c4", "Question", {hasCorrect: 1, q: "cepillo"}],
["c4", "Question", {hasCorrect: 1, q: "bolso"}],
["c4", "Question", {hasCorrect: 1, q: "dibujo"}],
["c4", "Question", {hasCorrect: 1, q: "teclado"}],
["c4-2", "Question", {hasCorrect: 1, q: "trabajo"}],
["c4-2", "Question", {hasCorrect: 1, q: "peligro"}],
["c4-2", "Question", {hasCorrect: 1, q: "pasado"}],
["c4-2", "Question", {hasCorrect: 1, q: "labio"}],
["c4-2", "Question", {hasCorrect: 1, q: "periódico"}],
["c4-2", "Question", {hasCorrect: 1, q: "viaje"}],
["c4-2", "Question", {hasCorrect: 1, q: "tamaño"}],
["c4-2", "Question", {hasCorrect: 1, q: "hombro"}],
["practice", "Question", {hasCorrect: 1, q: "pepino"}],
["practice", "Question", {hasCorrect: 1, q: "calcetín"}],
["c5", "Question", {hasCorrect: 1, q: "huevo"}],
["c5", "Question", {hasCorrect: 1, q: "milagro"}],
["c5", "Question", {hasCorrect: 1, q: "libro"}],
["c5", "Question", {hasCorrect: 1, q: "extranjero"}],
["c5", "Question", {hasCorrect: 1, q: "cuaderno"}],
["c5", "Question", {hasCorrect: 1, q: "helado"}],
["c5", "Question", {hasCorrect: 1, q: "valle"}],
["c5", "Question", {hasCorrect: 1, q: "almuerzo"}],
["c5-2", "Question", {hasCorrect: 1, q: "pelo"}],
["c5-2", "Question", {hasCorrect: 1, q: "desayuno"}],
["c5-2", "Question", {hasCorrect: 1, q: "vaso"}],
["c5-2", "Question", {hasCorrect: 1, q: "móvil"}],
["c5-2", "Question", {hasCorrect: 1, q: "avión"}],
["c5-2", "Question", {hasCorrect: 1, q: "regalo"}],
["c5-2", "Question", {hasCorrect: 1, q: "oro"}],
["c5-2", "Question", {hasCorrect: 1, q: "cerebro"}],
["practice", "Question", {hasCorrect: 1, q: "coche"}],
["practice", "Question", {hasCorrect: 1, q: "dinero"}],
["c6", "Question", {hasCorrect: 0, q: "verdura"}],
["c6", "Question", {hasCorrect: 0, q: "cárcel"}],
["c6", "Question", {hasCorrect: 0, q: "rodilla"}],
["c6", "Question", {hasCorrect: 0, q: "comprensión"}],
["c6", "Question", {hasCorrect: 0, q: "hoja"}],
["c6", "Question", {hasCorrect: 0, q: "promesa"}],
["c6", "Question", {hasCorrect: 0, q: "oferta"}],
["c6", "Question", {hasCorrect: 0, q: "bicicleta"}],
["c6-2", "Question", {hasCorrect: 0, q: "sonrisa"}],
["c6-2", "Question", {hasCorrect: 0, q: "cerveza"}],
["c6-2", "Question", {hasCorrect: 0, q: "bebida"}],
["c6-2", "Question", {hasCorrect: 0, q: "pierna"}],
["c6-2", "Question", {hasCorrect: 0, q: "palabra"}],
["c6-2", "Question", {hasCorrect: 0, q: "carne"}],
["c6-2", "Question", {hasCorrect: 0, q: "rueda"}],
["c6-2", "Question", {hasCorrect: 0, q: "ventana"}],
["practice", "Question", {hasCorrect: 0, q: "ley"}],
["practice", "Question", {hasCorrect: 0, q: "herramienta"}]

];
