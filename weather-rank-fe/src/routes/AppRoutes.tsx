import NavBar from "components/common/NavBar/NavBar";
import LandingPage from "pages/LandingPage/LandingPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import client from "apollo/apolloClient"; // Import your configured Apollo Client
import { ApolloProvider } from "@apollo/client";
import NotFound from "pages/NotFound/NotFound";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/landing" />} />
          <Route path="landing" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
};
