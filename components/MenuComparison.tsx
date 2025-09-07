@@ .. @@
 import React, { useState, useEffect } from 'react';
-import unorganizedMenu from '@/assets/unorganized-menu.jpg';
-import organizedMenu from '@/assets/organized-menu.jpg';

 const MenuComparison = () => {
   const [isVisible, setIsVisible] = useState(false);

@@ .. @@
                 {/* Screen content */}
                 <div className="h-full bg-white p-2 pt-6 overflow-hidden">
                   <img 
-                    src={unorganizedMenu} 
+                    src="/assets/unorganized-menu.jpg" 
                     alt="Unoptimized Swiggy Zomato menu design before GoalCraft optimization" 
                     className="w-full h-full object-contain rounded-sm"
                   />
                 </div>
               </div>
             </div>
           </div>

@@ .. @@
                 {/* Screen content */}
                 <div className="h-full bg-white p-2 pt-6 overflow-hidden">
                   <img 
-                    src={organizedMenu} 
+                    src="/assets/organized-menu.jpg" 
                     alt="Optimized Swiggy Zomato menu design after GoalCraft menu redesign" 
                     className="w-full h-full object-contain rounded-sm"
                   />
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };