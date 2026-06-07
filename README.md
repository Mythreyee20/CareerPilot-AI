# 🚀 CareerPilot AI

AI-Powered Resume Analyzer using React, Flask and Google Gemini AI.

## 📌 Project Overview

CareerPilot AI is an AI-powered resume analyzer that uses Google Gemini AI and ATS-based analysis to evaluate resumes and provide personalized career guidance.

- ATS Score
- Resume Strength Rating
- Skills Found
- Missing Skills
- Recommended Roles
- Resume Suggestions
- Resume Summary
- AI Career Advice

The goal of this project is to help students and job seekers improve their resumes and increase their chances of getting shortlisted.

---

## ✨ Features

### 📄 Resume Upload
Upload resume in PDF format.

### 🎯 ATS Score Analysis
Calculates ATS score based on matching technical skills.

### 🏆 Resume Strength
Classifies resume as:
- Excellent
- Good
- Needs Improvement

### ✅ Skills Detection
Identifies skills present in the resume.

### ❌ Missing Skills
Highlights important missing skills.

### 💼 Recommended Roles
Suggests suitable job roles based on skills.

### 📈 Resume Suggestions
Provides suggestions to improve the resume.

### 🤖 AI Resume Analysis

Google Gemini AI analyzes the resume and provides:

- Career Guidance
- Skill Recommendations
- Resume Improvement Tips
- Professional Growth Suggestions

### 📄 Resume Summary
Generates a summary of the candidate profile.

---

## 🛠 Tech Stack

### Frontend
- React.js
- Axios

### Backend
- Flask
- Flask-CORS
- pdfplumber
- Google Gemini API

### AI Model
- Google Gemini API
- Gemini 2.5 Flash

### Language
- Python
- JavaScript

---

## 📂 Project Structure

```text
CareerPilot-AI/
│
├── frontend/
│   ├── src/
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── app.py
│   └── requirements.txt
│
└── README.md
```

### Environment Variables

Create a `.env` file inside backend folder:

```env
GOOGLE_API_KEY=your_gemini_api_key
```

---

## ⚙️ Installation

### Backend

```bash
pip install flask flask-cors pdfplumber google-generativeai python-dotenv
python app.py
```

Backend runs on:

```text
http://127.0.0.1:5000
```

### Frontend

```bash
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---


## 🎯 Sample Output

```text
ATS Score: 75%

Resume Strength: Good

Skills Found:
Python
Java
SQL

Missing Skills:
AWS
React

Recommended Roles:
Backend Developer

Suggestions:
Learn AWS
Learn React

AI Career Advice:
Focus on Java Full Stack Development.
Learn Spring Boot and AWS.
Build more real-world projects.
```

---

## 🚀 Future Enhancements

- AI Interview Preparation
- AI Resume Builder
- AI Cover Letter Generator
- Job Recommendation System
- Resume PDF Report Download

---

## 🌐 Live Demo

Frontend:
https://career-pilot-ai-beta.vercel.app/

Backend:
https://careerpilot-ai-g5ah.onrender.com

## 👨‍💻 Developed By

Mythreyee.S

B.Tech Artificial Intelligence and Data Science

Passionate about AI, Full Stack Development, and Cloud Technologies.
