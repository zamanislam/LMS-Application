import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home";
import { Login } from "../components/login";
import { SignUp } from "../components/signup";
import { Dashboard } from "../components/dashboard";
import { Courses } from "../components/courses";
import { Profile } from "../components/Profile";
import { Announcements } from "../components/announcements";
import { Assignments } from "../components/assignments";
import { Lectures } from "../components/lectures";
import { Quiz } from "../components/quiz";
import { Admin } from "../components/admin";
import { AdminLogin } from "../components/adminLogin";
import { Analytics } from "../components/analytic";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/adminLogin" element={<AdminLogin/>}/>
      <Route path="/analytic" element={<Analytics/>}/>
      <Route path="/announcements" element={<Announcements />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/quiz" element={<Quiz />} />
      
    </Routes>
  );
};