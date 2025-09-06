import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogListing from "./pages/BlogListing";
import NotFound from "./pages/NotFound";

// Import static blog pages
import BoostRestaurantSalesSwiggyZomato from "./pages/blogs/boost-restaurant-sales-swiggy-zomato";
import MenuEngineeringRestaurantProfits from "./pages/blogs/menu-engineering-restaurant-profits";
import CustomerRetentionStrategiesRestaurants from "./pages/blogs/customer-retention-strategies-restaurants";
import DigitalMarketingStrategiesRestaurants from "./pages/blogs/digital-marketing-strategies-restaurants";
import RestaurantCostManagementGuide from "./pages/blogs/restaurant-cost-management-guide";
import FoodDeliveryTrends2024 from "./pages/blogs/food-delivery-trends-2024";
import RestaurantBrandingCompleteGuide from "./pages/blogs/restaurant-branding-complete-guide";

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
            
            {/* Static blog pages */}
            <Route path="/blogs/10-proven-strategies-boost-swiggy-restaurant-rankings" element={<BoostRestaurantSalesSwiggyZomato />} />
            <Route path="/blogs/boost-restaurant-sales-swiggy-zomato" element={<BoostRestaurantSalesSwiggyZomato />} />
            <Route path="/blogs/menu-engineering-restaurant-profits" element={<MenuEngineeringRestaurantProfits />} />
            <Route path="/blogs/customer-retention-strategies-restaurants" element={<CustomerRetentionStrategiesRestaurants />} />
            <Route path="/blogs/digital-marketing-strategies-restaurants" element={<DigitalMarketingStrategiesRestaurants />} />
            <Route path="/blogs/restaurant-cost-management-guide" element={<RestaurantCostManagementGuide />} />
            <Route path="/blogs/food-delivery-trends-2024" element={<FoodDeliveryTrends2024 />} />
            <Route path="/blogs/restaurant-branding-complete-guide" element={<RestaurantBrandingCompleteGuide />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
