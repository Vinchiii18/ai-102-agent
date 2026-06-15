📘 AI-102 Study Agent (Local AI Tutor)

A simple AI-powered web application that helps users study for the Microsoft AI-102 certification using local AI (Ollama) and Microsoft Learn documentation.

🚀 Features
Chat-based web UI
AI-powered answers using local LLM (Llama3 / Mistral)
Uses Microsoft Learn AI-102 study materials
Runs completely offline (no cloud API required)
Built with Node.js + Express
🧰 Tech Stack
Node.js
Express.js
Ollama (local LLM)
HTML/CSS/JavaScript
Microsoft Learn documentation
📦 Installation
1. Clone the repository
git clone [https://github.com/YOUR_USERNAME/ai102-agent.git](https://github.com/Vinchiii18/ai-102-agent.git)
cd ai102-agent
2. Install dependencies
npm install
3. Install Ollama

Download and install:

https://ollama.com

Then pull a model:

ollama pull llama3
4. Add study materials

Place Microsoft Learn content inside:

/docs

Example:

docs/
├── ai-search.txt
├── azure-openai.txt
├── vision.txt
5. Run the app
node server.js

Then open:

http://localhost:3000
💡 How it works
User asks a question in the browser
Server loads AI-102 study documents
Question + documents are sent to the LLM
Model generates an answer based on the provided material
⚠️ Notes
Requires Ollama running locally
Uses full document context (simple implementation)
Best for studying and practice questions
🔮 Future Improvements
Add vector database (RAG system)
Improve search relevance
Add chat history
Add streaming responses
Deploy to cloud (Azure / Vercel)
👨‍💻 Author

Built by Alvin (for AI-102 exam preparation)
