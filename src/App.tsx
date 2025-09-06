import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogListing from "./pages/BlogListing";
import NotFound from "./pages/NotFound";

// Dynamic blog imports
import { lazy } from "react";

// Lazy load blog components
const BoostRestaurantSalesSwiggyZomato = lazy(() => import("/home/project/src/pages/blogs/boost-restaurant-sales-swiggy-zomato.tsx"));
const MenuEngineeringRestaurantProfits = lazy(() => import("./pages/blogs/menu-engineering-restaurant-profits"));
const CustomerRetentionStrategiesRestaurants = lazy(() => import("./pages/blogs/customer-retention-strategies-restaurants"));
const DigitalMarketingStrategiesRestaurants = lazy(() => import("./pages/blogs/digital-marketing-strategies-restaurants"));
const RestaurantCostManagementGuide = lazy(() => import("./pages/blogs/restaurant-cost-management-guide"));
const FoodDeliveryTrends2024 = lazy(() => import("./pages/blogs/food-delivery-trends-2024"));
const RestaurantBrandingCompleteGuide = lazy(() => import("./pages/blogs/restaurant-branding-complete-guide"));
const KalikaHutRestaurantRevenueCaseStudy = lazy(() => import("./pages/blogs/kalika-hut-restaurant-revenue-case-study"));
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<BlogListing />} />
            
            {/* Blog pages - automatically mapped */}
            <Route path="/blogs/boost-restaurant-sales-swiggy-zomato" element={<BoostRestaurantSalesSwiggyZomato />} />
            <Route path="/blogs/menu-engineering-restaurant-profits" element={<MenuEngineeringRestaurantProfits />} />
            <Route path="/blogs/customer-retention-strategies-restaurants" element={<CustomerRetentionStrategiesRestaurants />} />
            <Route path="/blogs/digital-marketing-strategies-restaurants" element={<DigitalMarketingStrategiesRestaurants />} />
            <Route path="/blogs/restaurant-cost-management-guide" element={<RestaurantCostManagementGuide />} />
            <Route path="/blogs/food-delivery-trends-2024" element={<FoodDeliveryTrends2024 />} />
            <Route path="/blogs/restaurant-branding-complete-guide" element={<RestaurantBrandingCompleteGuide />} />
            <Route path="/blogs/kalika-hut-restaurant-revenue-case-study" element={<KalikaHutRestaurantRevenueCaseStudy />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
