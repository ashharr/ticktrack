import "./TodoApp.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";
import LoginComponent from "./LoginComponent";

export default function TodoAppComponent() {
  function AuthenticatedRoute({ children }) {
    const authContext = useAuth();
    if (authContext.isAuthenticated) {
      return children;
    }
    return <Navigate to="/" />;
  }

  return (
    <div className="TodoApp">
      {/* <LoginComponent/> */}
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListTodosComponent />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            />

            <Route path="/*" element={<ErrorComponent />} />
          </Routes>
          {/* <FooterComponent/> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
