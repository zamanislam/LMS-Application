## The Hi-Tech

 Hi-Tech is an innovative Learning Management System (LMS) platform that allows users to access a wide range of courses and educational content. This platform is designed to help learners develop skills in various areas like frontend development, backend programming, data analytics, and more. The system provides an easy-to-use interface for both students and course administrators.

## About this project.

This project is build by me during construct week at Masai School.

## Features

User Authentication: Secure login and signup functionality using Firebase Realtime Database.
Course Management: Browse and enroll in courses like React, JavaScript, Data Analysis, and more.
Course Analytics: Administrators can track course enrollments and view detailed statistics.
Dark/Light Mode: Users can switch between dark and light themes for an enhanced learning experience.
Dashboard: Personalized dashboard for users with an overview of enrolled courses.
Quiz Components: Interactive quiz are there.
Profile Section: Manage user information and preferences.
Fixed Navbar: Smooth navigation across pages with a fixed navbar.
Responsive Design: Mobile-first approach with Chakra UI for styling.

## Tech Stack

Frontend: React, Vite, React Router DOM
UI Framework: Chakra UI
State Management: React Context API
Backend: Firebase Realtime Database
HTTP Client: Axios

## File Structure

src/
├── components/
│ ├── Login.jsx
│ ├── SignUp.jsx
│ ├── Home.jsx
│ ├── Dashboard.jsx
│ ├── Courses.jsx
│
│ ├── Profile.jsx
│ ├── Analytics.jsx
│ ├── Assignment.jsx
│ └── Quiz.jsx
|___Admin.jsx
├── context/
│ └── AuthContext.jsx
├── routes/
│ └── AppRoutes.jsx
├── App.jsx
├── main.jsx

## Features in Detail

1. User Authentication
   Master Tech uses Firebase Realtime Database for user authentication. You can log in and sign up using your credentials. The platform provides secure authentication with real-time user data management.

2. Course Management
   The platform features a clean, responsive course management system where users can browse through available courses and see details such as duration and fees.

3. Course Analytics
   Administrators can view analytics data, such as the number of students enrolled in each course, through a well-designed analytics dashboard.

4. Dark/Light Mode
   The platform includes a theme toggle feature that allows users to switch between dark and light modes, improving accessibility and user experience.

5. Interactive Assignments and Quizzes
   Each course includes interactive quizzes and assignments to help students reinforce their learning.

6. Admin page -  on clicking admin button first the person has to provide his/her identity if it matches then only admin page will be shown where the admin can update the courses and delete it.   

## Feedback

If you want to suggest us anything or want to give us feedback then please connect to me

Email: zamni0123@gmail.com