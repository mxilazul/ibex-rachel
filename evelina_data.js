var theShuffle = rshuffle("c1", "c2")

var shuffleSequence = seq("pracMsg", sepWith("sep", seq("practice", "realMsg", theShuffle)));
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
        presentHorizontally: false,
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)",
        timeout: null
    },
    "Question", {
        randomOrder: false,
        as: [['f', 'el'], ['j', 'la']],
        presentHorizontally: true,
        timeout: 3000
    },
    "Message", {
        hideProgressBar: true
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
    //["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],
    //["sep", "Separator", {normalMessage: "+"}],

    ["pracMsg", "Message", {html: {include: "rachel.html"}, transfer: "keypress"}],
    ["realMsg", "Message", {html: {include: "rachel2.html"}, transfer: "keypress"}],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],

    // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
    // consent checkbox).

    ["practice", "Question", {q: "WORD 1"}],
    ["practice", "Question", {q: "WORD 2"}],

    ["c1", "AcceptabilityJudgment", {s: "This is a test sentence"}],
    ["c1", "AcceptabilityJudgment", {s: {html: "<b>This is a bold test sentence</b>"}}],
    ["c1", "AcceptabilityJudgment", {s: "Third test sentence"}],
    ["c1", "AcceptabilityJudgment", {s: "Final sentence of C1"}],

    ["c2", "AcceptabilityJudgment", {s: "First sentence of C2"}],
    ["c2", "AcceptabilityJudgment", {s: "This should be shuffled in"}],
    ["c2", "AcceptabilityJudgment", {s: "Keep on testing"}],
    ["c2", "AcceptabilityJudgment", {s: "Final"}]
];
