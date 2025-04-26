
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LocaleProvider } from "./context/LocaleContext";
import { CartProvider } from "./context/CartContext";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Showrooms from "./pages/Showrooms";
import Delivery from "./pages/Delivery";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LocaleProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
              <Route path="/home" element={<Index />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/about" element={<About />} />
              <Route path="/showrooms" element={<Showrooms />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </LocaleProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
