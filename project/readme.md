# Job Portal with Resume Analyzer

An **AI-powered recruitment system** that connects job seekers and recruiters through intelligent resume analysis and job matching.  
It automates screening using **Natural Language Processing (NLP)** and ensures secure, role-based access for all users.

---

## Project Overview

This project simplifies hiring by parsing resumes, extracting candidate data, and matching profiles to relevant job postings.  
It serves three main roles — **Admin**, **Recruiter**, and **Job Seeker** — providing each with tailored dashboards and functionalities.

---

## Tech Stack

| Component | Technology |
|------------|-------------|
| Frontend | React.js |
| Backend | Spring Boot |
| ORM | Hibernate |
| Database | MongoDB |
| AI/ML | NLP for Resume Parsing |

---

## Core Features

- **AI Resume Parsing** – Extracts skills, education, and experience.  
- **Intelligent Matching** – Ranks candidates by job relevance.  
- **Role-Based Access** – Admin, Recruiter, and Job Seeker portals.  
- **Job Management** – Create, apply, and track job listings.  
- **Analytics Dashboard** – Insights for admins and recruiters.

---

## System Architecture

React (Frontend)
↓
Spring Boot (API + Security)
↓
Hibernate (ORM)
↓
MongoDB (Database)
↓
AI Resume Parser (NLP)


---

## Future Scope

- AI interview assistant  
- Recruiter analytics dashboard  
- Skill gap analysis and training suggestions  
- Mobile app and third-party API integrations  

---

## Author

**Name:** Gautam Prajapat  
**UID:** 23BCS11262  
**Section:** KRG-3A  

---

## Run Instructions

```bash
git clone https://github.com/Gautam-cpp/FULL-STACK_23BCS11262_KRG-3A.git
cd FULL-STACK_23BCS11262_KRG-3A

# Start backend
mvn spring-boot:run

# Start frontend
cd frontend
npm install
npm start
