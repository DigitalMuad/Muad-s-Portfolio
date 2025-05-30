# Muad Mahdi's Portfolio

A modern portfolio website built with Next.js 15, featuring AI chat integration and interactive animations.

## ✨ Features

- **AI-Powered Email Generation**: Create professional emails with AI assistance
- **Interactive Chat**: Talk directly with an AI version of me using advanced LLMs
- **Vector Embeddings**: Semantic search capabilities for more accurate AI responses
- **Dynamic Animations**: Engaging UI with smooth animations
- **Responsive Design**: Seamless experience across all devices
- **Dark Mode**: Eye-friendly interface for all lighting conditions
- **Project Showcase**: Interactive displays of my work and contributions
- **AI-Powered Dynamic Theming**: Transform the entire interface with natural language requests, allowing real-time visual customization

---

## 🛠 Tech Stack

| Layer       | Technologies |
|------------|--------------|
| **Frontend** | Next.js 15, TypeScript, Tailwind CSS, Framer Motion |
| **Backend**  | Node.js, Next.js API Routes |
| **AI Integration** | OpenRouter API (Deepseek) |
| **Embeddings** | Google Gemini |
| **Vector Database** | Pinecone |
| **Search** | Tavily API |
| **Email** | Nodemailer, Abstract API |
| **Deployment** | Vercel + Edge Functions |


---

## 🚀 Getting Started

> **⚠️ IMPORTANT:** Before starting, make sure to set up all required environment variables in a `.env` file as described in the Environment Variables section below. The application will not work properly without these configurations.

1. Clone and install:

```bash
git clone https://github.com/DigitalMuad/portfolio2025.git
cd portfolio
npm install
```

2. Update your personal information:

```bash
# Edit the components/character/character.ts file with your own details
# This is crucial for the AI to represent you correctly
```

3. Run development server:

```bash
npm run dev
```

> **Note:** The first run will take longer than usual as the system creates and saves your embeddings to the vector database. Take this time to relax and enjoy a coffee! ☕

4. Open [http://localhost:3000](http://localhost:3000)

> **⚠️ IMPORTANT NOTE:** Make sure to uncomment the following line in `api/chat/route.ts` & `api/theme/route.ts` when working in development:
>
> ```javascript
> // "http://localhost:3000",
> ```

## 📧 Email Generation Feature

The portfolio includes an AI-powered email generation system that:

- Creates professional emails based on simple prompts
- Validates sender email addresses
- Supports both AI-generated and manual email composition
- Features elegant text generation animations

## 💬 AI Chat Integration

Chat with an AI version of me that:

- Answers questions about my skills, experience, and projects
- Accesses real-time information when needed via Tavily search
- Maintains conversation context across messages
- Provides accurate information about my background and expertise
- Uses vector embeddings for more accurate and relevant responses

## 🎨 AI Theme Customization

The portfolio includes an AI-powered theme customization system that:

- Transforms the UI with natural language commands
- Understands specific page elements through vector embeddings
- Applies changes in real-time with visual feedback
- Generates custom JavaScript on-the-fly for unique visual effects
- Maintains responsive design across all device sizes
- Supports both page-specific and site-wide modifications

## 🔍 Vector Database Integration

The portfolio uses Pinecone vector database to store and retrieve embeddings:

- Semantic search capabilities for more accurate AI responses
- Google Gemini embeddings for high-quality vector representations
- Efficient retrieval of relevant information based on user queries
- One-time initialization with profile data for persistent storage

## 🔒 Security Features

- CORS protection for API routes
- Email validation to prevent spam
- Rate limiting on sensitive endpoints


## Environment Variables

Create a `.env` file in the root directory and add your environment variables:

```env
# Development environment (all the apis are free)
EMAIL_USER="your emailid"
EMAIL_APP_PASSWORD="your App Password" # get it from your Google Account settings
ABSTRACT_API_KEY="your abstract api key" # https://app.abstractapi.com/
OPENROUTER_API_KEY="your openrouter api key" # https://openrouter.ai/
TAVILY_API_KEY="your Tavily api key" # https://tavily.com/

# Vector Database (Pinecone)
PINECONE_API_KEY="your Pinecone API key" # https://app.pinecone.io/
PINECONE_INDEX_NAME="your index name" # e.g., portfolio-embeddings

# Google Gemini (for embeddings)
GOOGLE_API_KEY="your Google API key" # https://ai.google.dev/
```

## Vector Store Configuration

The vector store is configured in `lib/embeddings.ts` with the following settings:

- Dimension: 768 (Google Gemini embeddings)
- Metric: Cosine similarity
- Pod type: Starter (free tier)

You can modify these settings in the `initializeVectorStore` function if needed.


## 📸 Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/DigitalMuad/portfolio2025/main/public/projects/portfolio.png" alt="Preview 1" width="90%" />
</p>



---

## 📄 License

This project is open source under the [MIT License](https://opensource.org/licenses/MIT).

---

## 🙋‍♂️ Author

**Muad Mahdi**  
🔗 [muadmahdi.com](https://muadmahdi.com)  
📧 muadmahdi514@gmail.com




