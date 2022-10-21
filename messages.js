const messages = new Array(
    "Should work...",
    "Fixed",
    "Disabled failing tests",
    "Works for me",
    "Downgraded requirements",
    "Not tested",
    "Don't push this commit",
    "TODO: Test these changes",
    "It was hard to write so it should be hard to read",
    "Just learning git commands",
    "Readded bug #71280",
    "I'm drunk...",
    "This change requires IE 0.73 to work properly",
    "I don't know why but it works now (DON'T TOUCH!!!)",
    "Workaround for Workaround #49",
    "Copied from stackoverflow",
    "I need more coffee for this shit...",
    "Commit message in next commit",
    "Read previous commit message",
    "Why The Fuck?",
    "Fixed speling",
    "message"
);

    

function refreshMessage() {
    var msg = messages[
        Math.floor(
            Math.random()*messages.length
        )
    ];
    document.getElementById("message").innerText = msg;
    console.log(msg);
};
