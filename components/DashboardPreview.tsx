@@ .. @@
 import React, { useState, useEffect } from 'react';
-import graph1 from '@/assets/graph-1.jpg';
-import graph2 from '@/assets/graph-2.jpg';
-import graph3 from '@/assets/graph-1-new.jpg';
-import graph4 from '@/assets/graph-4.jpg';

 const DashboardPreview = () => {
   const [isVisible, setIsVisible] = useState(false);

@@ .. @@
           {/* Graphs Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
-            {[graph1, graph2, graph3, graph4].map((graph, idx) => (
+            {['/assets/graph-1.jpg', '/assets/graph-2.jpg', '/assets/graph-1-new.jpg', '/assets/graph-4.jpg'].map((graph, idx) => (
               <div
                 key={idx}
                 className="bg-white/40 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
               >
                 <img
                   src={graph}
                   alt={`Graph ${idx + 1}`}
                   className="w-full h-80 md:h-96 object-contain rounded-lg"
                 />
               </div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };