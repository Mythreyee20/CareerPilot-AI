from urllib import response

from flask import Flask, request
from flask_cors import CORS
import pdfplumber
import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

CORS(app)
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))  # Replace with your actual API key

model = genai.GenerativeModel("gemini-2.5-flash")


@app.route('/')
def home():
    return "CareerPilot AI Backend Running Successfully"


@app.route('/upload', methods=['POST'])
def upload_resume():

    if 'resume' not in request.files:
        return {"error": "No file uploaded"}, 400

    file = request.files['resume']

    text = ""

    try:
        with pdfplumber.open(file) as pdf:

            for page in pdf.pages:
                extracted = page.extract_text()

                if extracted:
                    text += extracted

    except Exception:
        return {"error": "Unable to read PDF"}, 400

    skills = [
        "python",
        "java",
        "react",
        "sql",
        "aws",
        "html",
        "css",
        "javascript"
    ]

    found_skills = []

    for skill in skills:
        if skill.lower() in text.lower():
            found_skills.append(skill)

    missing_skills = []

    for skill in skills:
        if skill not in found_skills:
            missing_skills.append(skill)

    ats_score = int(
        (len(found_skills) / len(skills)) * 100
    )
    if ats_score >= 80:
        strength = "Excellent match for technical roles"
    elif ats_score >= 60:
        strength = "Good profile, add more skills to improve"
    else:
        strength = "Needs improvement to increase job opportunities"
    
    recommended_roles = []
    if "python" in found_skills and "sql" in found_skills:
        recommended_roles.append("Backend Developer")
    if "java" in found_skills:
        recommended_roles.append("Software Engineer")
    if "html" in found_skills and "css" in found_skills and "javascript" in found_skills:
        recommended_roles.append("Frontend Developer")
    if "react" in found_skills:
        recommended_roles.append("React Developer")
    if len(recommended_roles) == 0:
        recommended_roles.append("Explore More Skills")
    
    summary = f"""
This resume contains {len(found_skills)} matching skills.
The candidate is suitable for {', '.join(recommended_roles)} roles.
Resume strength is {strength}.
"""
    prompt = f"""
Analyze this resume and provide career guidance.

Resume Text:
{text}

Give:
1. Career Advice
2. Skills to Learn
3. Improvement Suggestions

Keep the response short.
"""
    try:
        ai_response = model.generate_content(prompt)
        ai_advice = ai_response.text
    except Exception as e:
        print("Gemini Error:", e)
        ai_advice = str(e)
    
    
    suggestions = []
    if "react" not in found_skills:
        suggestions.append("Learn React for frontend development")
        
    if "aws" not in found_skills:
        suggestions.append("Learn AWS for cloud skills")
    
    if "sql" not in found_skills:
        suggestions.append("Learn SQL for database management")
        
    if len(suggestions) == 0:
        suggestions.append("Excellent Resume! Keep building projects.")

    return {
        "ats_score": ats_score,
        "found_skills": found_skills,
        "missing_skills": missing_skills,
        "recommended_roles": recommended_roles,
        "suggestions": suggestions,
        "strength": strength,
        "summary": summary,
        "ai_advice": ai_advice
    }


if __name__ == '__main__':
    app.run(debug=True)