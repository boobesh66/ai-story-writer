import { GoogleGenAI } from "@google/genai";

function App() {
  async function testGemini() {
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      if (!apiKey) {
        alert("API key not found");
        return;
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: "Write a very short story about a boy who finds a magical key.",
      });

      console.log(response);
      console.log(response.text);

      alert(response.text);
    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    }
  }

  return (
    <div>
      <h1>AI Story Writer</h1>

      <button onClick={testGemini}>
        Test Gemini
      </button>
    </div>
  );
}

export default App;