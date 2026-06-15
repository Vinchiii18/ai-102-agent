const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { Ollama } = require("ollama");

const ollama = new Ollama();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

async function getKnowledge() {
  const files = fs.readdirSync("./docs");

  let text = "";
  for (const file of files) {
    text += fs.readFileSync(path.join("./docs", file), "utf8");
  }

  return text;
}

app.post("/ask", async (req, res) => {
  const question = req.body.question;

  const knowledge = await getKnowledge();

  const response = await ollama.chat({
    model: "llama3",
    messages: [
      {
        role: "system",
        content:
          "You are an AI-102 tutor. Answer only using the provided Microsoft Learn content.",
      },
      {
        role: "user",
        content: `
STUDY MATERIAL:
${knowledge}

QUESTION:
${question}
        `,
      },
    ],
  });

  res.json({ answer: response.message.content });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`AI-102 Agent running on port ${PORT}`);
});
