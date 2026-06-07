import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const uploadResume = async () => {
    if (!file) {
      setError("⚠ Please select a resume");
      return;
    }

    setError("");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await axios.post(
        "https://careerpilot-ai-g5ah.onrender.com/upload",
        formData
      );

      setResult(response.data);
    } catch (err) {
      setError("Error uploading resume");
    }
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "50px auto",
        padding: "30px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h1
  style={{
    fontSize: "42px",
    fontFamily: "Segoe UI, sans-serif",
    fontWeight: "bold",
    color: "#ffffff",
    textShadow:
      "0 0 10px rgba(96,165,250,0.8), 0 0 20px rgba(168,85,247,0.6)",
    marginBottom: "10px",
    overflow: "visible"
  }}
>
  🚀 CareerPilot AI
</h1>

       <h3 style = {{ textAlign: "center" }}>AI-Powered Resume Analyzer</h3>

      <br />

      <input
  type="file"
  id="resumeUpload"
  accept=".pdf"
  style={{ display: "none" }}
  onChange={(e) => setFile(e.target.files[0])}
/>

<label
  htmlFor="resumeUpload"
  style={{
    backgroundColor: "#4f46e5",
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  }}
>
  📄 Upload Resume
</label>
    {file && (
  <p style={{ marginTop: "10px" }}>
    ✅ {file.name}
  </p>
)}

      <br />
      <br />

      {error && (
        <p
          style={{
            color: "red",
            fontWeight: "bold"
          }}
        >
          {error}
        </p>
      )}

      <button
  onClick={uploadResume}
  style={{
    backgroundColor: "#10b981",
    color: "white",
    border: "none",
    padding: "12px 30px",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px"
  }}
>
  🚀 Analyze Resume
</button>

      {result && (
  <div
    style={{
      marginTop: "30px",
      backgroundColor: "#111827",
      padding: "25px",
      borderRadius: "15px",
      textAlign: "left",
      boxShadow: "0 0 20px rgba(0,0,0,0.4)"
    }}
  >
  <div
  style={{
    textAlign: "center",
    backgroundColor: "#1f2937",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "20px"
  }}
>
  <h3>🎯 ATS Score</h3>

  <h1
    style={{
      color:
  result.ats_score >= 80
    ? "#22c55e"
    : result.ats_score >= 60
    ? "#f59e0b"
    : "#ef4444",
      margin: 0
    }}
  >
    {result.ats_score}%
  </h1>

  <div
    style={{
      width: "100%",
      backgroundColor: "#374151",
      borderRadius: "10px",
      overflow: "hidden",
      marginTop: "15px"
    }}
  >
    <div
      style={{
        width: `${result.ats_score}%`,
        height: "20px",
        backgroundColor: "#22c55e"
      }}
    ></div>
  </div>
</div>
      <h3
  style={{
    textAlign: "center",
    marginTop: "15px"
  }}
>
  🏆 Resume Strength: {result.strength}
</h3>

<p
  style={{
    textAlign: "center",
    fontWeight: "bold",
    color: "#60a5fa"
  }}
>
   {result.message}
</p>

          <h3 style={{ color: "#22c55e" }}>✅ Skills Found</h3>

          <ul
            style={{
              listStyle: "none",
              padding: 0
            }}
          >
            {result.found_skills.map((skill, index) => (
              <li key={index}>✅ {skill}</li>
            ))}
          </ul>

          {result.missing_skills.length > 0 && (
            <>
              <h3 style={{ color: "#ef4444" }}>❌ Missing Skills</h3>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0
                }}
              >
                {result.missing_skills.map((skill, index) => (
                  <li key={index}>❌ {skill}</li>
                ))}
              </ul>
            </>
          )}
          <h3 style={{ color: "#60a5fa" }}>💼 Recommended Roles</h3>

<ul
  style={{
    listStyle: "none",
    padding: 0
  }}
>
  {result.recommended_roles.map((role, index) => (
    <li key={index}>🚀 {role}</li>
  ))}
</ul>
    <h3 style={{ color: "#f59e0b" }}>📈 Resume Suggestions</h3>

<ul
  style={{
    listStyle: "none",
    padding: 0
  }}
>
  {result.suggestions.map((item, index) => (
    <li key={index}>💡 {item}</li>
  ))}
</ul>
  <h3 style={{ color: "#a855f7" }}>
  📄 Resume Summary
</h3>

<div
  style={{
    backgroundColor: "#1f2937",
    padding: "15px",
    borderRadius: "10px"
  }}
>
  {result.summary}
  <h3 style={{ color: "#06b6d4" }}>
  🤖 AI Career Advice
</h3>

<div
  style={{
    backgroundColor: "#1f2937",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "10px"
  }}
>
  {result.ai_advice}
</div>
</div>
        </div>
      )}
    </div>
    
  );
}

export default App;