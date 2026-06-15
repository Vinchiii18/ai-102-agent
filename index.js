const fs = require("fs");
const path = require("path");
const { Ollama } = require("ollama");

const ollama = new Ollama();

async function askQuestion(question) {
  const docsFolder = "./docs";

  const files = fs.readdirSync(docsFolder);

  let knowledge = "";

  for (const file of files) {
    knowledge += fs.readFileSync(path.join(docsFolder, file), "utf8");
  }

  const response = await ollama.chat({
    model: "llama3",
    messages: [
      {
        role: "system",
        content:
          "You are an AI-102 tutor. Only answer from the provided study material.",
      },
      {
        role: "user",
        content: `
Study Material:

${knowledge}

Question:
${question}
`,
      },
    ],
  });

  console.log(response.message.content);
}

// askQuestion(process.argv[2]);
const readline = require("readline-sync");

(async () => {
  while (true) {
    const question = readline.question("\nAsk AI-102 Question: ");

    await askQuestion(question);
  }
})();
