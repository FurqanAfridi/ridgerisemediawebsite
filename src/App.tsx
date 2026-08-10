import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SiteLayout } from "@/components/layout/SiteLayout";
import AboutPage from "@/pages/AboutPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import BuyersPage from "@/pages/BuyersPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import PrivacyPage from "@/pages/PrivacyPage";
import PublishersPage from "@/pages/PublishersPage";
import TermsPage from "@/pages/TermsPage";
import VerticalDetailPage from "@/pages/VerticalDetailPage";
import VerticalsPage from "@/pages/VerticalsPage";
import "./App.css";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="publishers" element={<PublishersPage />} />
            <Route path="buyers" element={<BuyersPage />} />
            <Route path="verticals" element={<VerticalsPage />} />
            <Route path="verticals/:slug" element={<VerticalDetailPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<BlogPostPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
