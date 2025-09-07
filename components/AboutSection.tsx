@@ .. @@
 import React, { useEffect, useState } from 'react';
-import bts1 from '@/assets/bts-1.jpg';
-import bts2 from '@/assets/bts-2.jpg';
-import bts3 from '@/assets/bts-3.jpg';
-import bts4 from '@/assets/bts-4.jpg';
-import bts5 from '@/assets/bts-5.jpg';
-import bts6 from '@/assets/bts-6.jpg';
-import bts7 from '@/assets/bts-7.jpg';
-import bts8 from '@/assets/bts-8.jpg';
-import bts9 from '@/assets/bts-9.jpg';
-import bts10 from '@/assets/bts-10.jpg';
-import bts11 from '@/assets/bts-11.jpg';
-import bts12 from '@/assets/bts-12.jpg';
-import bts13 from '@/assets/bts-13.jpg';
-import bts14 from '@/assets/bts-14.jpg';
-import bts15 from '@/assets/bts-15.jpg';

 const AboutSection = () => {
   const [isVisible, setIsVisible] = useState(false);

@@ .. @@
   const btsImages = [{
     id: 1,
-    src: bts1,
+    src: '/assets/bts-1.jpg',
     alt: "GoalCraft restaurant consultation in progress"
   }, {
     id: 2,
-    src: bts2,
+    src: '/assets/bts-2.jpg',
     alt: "Menu optimization session with restaurant team"
   }, {
     id: 3,
-    src: bts3,
+    src: '/assets/bts-3.jpg',
     alt: "Food photography and styling for online platforms"
   }, {
     id: 4,
-    src: bts4,
+    src: '/assets/bts-4.jpg',
     alt: "Kitchen workflow analysis and optimization"
   }, {
     id: 5,
-    src: bts5,
+    src: '/assets/bts-5.jpg',
     alt: "Digital menu engineering and design process"
   }, {
     id: 6,
-    src: bts6,
+    src: '/assets/bts-6.jpg',
     alt: "Restaurant operations strategy meeting"
   }, {
     id: 7,
-    src: bts7,
+    src: '/assets/bts-7.jpg',
     alt: "Data analytics review for restaurant performance"
   }, {
     id: 8,
-    src: bts8,
+    src: '/assets/bts-8.jpg',
     alt: "Team collaboration on restaurant growth strategies"
   }, {
     id: 9,
-    src: bts9,
+    src: '/assets/bts-9.jpg',
     alt: "On-site restaurant consultation and analysis"
   }, {
     id: 10,
-    src: bts10,
+    src: '/assets/bts-10.jpg',
     alt: "Menu positioning and pricing strategy session"
   }, {
     id: 11,
-    src: bts11,
+    src: '/assets/bts-11.jpg',
     alt: "Restaurant branding and positioning workshop"
   }, {
     id: 12,
-    src: bts12,
+    src: '/assets/bts-12.jpg',
     alt: "Delivery optimization and logistics planning"
   }, {
     id: 13,
-    src: bts13,
+    src: '/assets/bts-13.jpg',
     alt: "Customer engagement strategy development"
   }, {
     id: 14,
-    src: bts14,
+    src: '/assets/bts-14.jpg',
     alt: "Revenue maximization planning session"
   }, {
     id: 15,
-    src: bts15,
+    src: '/assets/bts-15.jpg',
     alt: "Final presentation of restaurant growth plan"
   }];