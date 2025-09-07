@@ .. @@
 import React, { useState } from 'react';
 import { Button } from '@/components/ui/button';
 import Logo from './Logo';
 import { Menu, X, CircleDot, LayoutDashboard, DollarSign } from 'lucide-react';
 import { cn } from '@/lib/utils';
 import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
+import { useRouter } from 'next/router';

 const Header = () => {
   const [activePage, setActivePage] = useState('how-we-work');
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
+  const router = useRouter();

   const handleNavClick = (page: string) => (e: React.MouseEvent) => {
     e.preventDefault();
     setActivePage(page);
     
     let targetId = page;
     
     // Map navigation items to their corresponding section IDs
     if (page === 'about') {
       targetId = 'about-us';
     } else if (page === 'contact') {
       // Scroll to footer
       const footer = document.querySelector('footer');
       if (footer) {
         footer.scrollIntoView({
           behavior: 'smooth',
           block: 'start'
         });
         setMobileMenuOpen(false);
         return;
       }
     }
     
-    const element = document.getElementById(targetId);
-    if (element) {
-      element.scrollIntoView({
-        behavior: 'smooth',
-        block: 'start'
-      });
+    // If not on homepage, navigate to homepage first
+    if (router.pathname !== '/') {
+      router.push(`/#${targetId}`);
+    } else {
+      c
}onst element = document.getElementById(targetId);
+      if (element) {
+        element.scrollIntoView({
+          behavior: 'smooth',
+          block: 'start'
+        });
+      }
     }
     setMobileMenuOpen(false);
   };