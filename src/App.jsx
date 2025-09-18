import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Landing + Auth
import LandingPage from "./components/LandingPage";
import AuthPage from "./components/AuthPage";

// Dashboard files
import Dashboard from "./components/Dashboard";
import DashboardHome from "./components/DashboardHome";
import OngoingProjects from "./components/OngoingProjects";
import MRVReview from "./components/MRVReview";
import MarketPlace from "./components/MarketPlace";
import CreditManagement from "./components/CreditManagement";
import AIVerification from "./components/AIVerification";
import Profile from "./components/Profile"; 

// Protected route
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="projects" element={<OngoingProjects />} />
          <Route path="mrv-review" element={<MRVReview />} />
          <Route path="marketplace" element={<MarketPlace />} />
          <Route path="credit-management" element={<CreditManagement />} />
          <Route path="ai-verification" element={<AIVerification />} />
          <Route path="profile" element={<Profile />} /> 
        </Route>
      </Routes>
    </Router>
  );
}
