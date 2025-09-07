 import React, { useState, useEffect } from 'react';

 const MenuComparison = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
     const observer = new IntersectionObserver(
       ([entry]) => {
         if (entry.isIntersecting) {
           setIsVisible(true);
         }
       },
       { threshold: 0.1 }
     );

     const element = document.getElementById('menu-comparison');
     if (element) {
       observer.observe(element);
     }

     return () => {
       if (element) {
         observer.unobserve(element);
       }
     };
   }, []);

   return (
     <section id="menu-comparison" className="py-20 bg-gradient-to-br from-gray-50 to-white">
       <div className="container mx-auto px-6">
         <div className="text-center mb-16">
           <h2 className="text-4xl font-bold text-gray-900 mb-4">
             Before & After: Menu Transformation
           </h2>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             See how we transformed cluttered, confusing menus into clean, conversion-optimized designs
           </p>
         </div>

         <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Before - Unorganized Menu */}
           <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
             <div className="text-center mb-8">
               <h3 className="text-2xl font-bold text-red-600 mb-2">BEFORE</h3>
               <p className="text-gray-600">Cluttered, overwhelming menu design</p>
             </div>
             
             <div className="relative">
               {/* Phone mockup */}
               <div className="mx-auto w-64 h-[500px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
                 <div className="w-full h-full bg-gray-100 rounded-[2rem] overflow-hidden relative">
                   {/* Notch */}
                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
                   
                   {/* Screen content */}
                   <div className="h-full bg-white p-2 pt-6 overflow-hidden">
                     <img 
                       src="/assets/unorganized-menu.jpg" 
                       alt="Unoptimized Swiggy Zomato menu design before GoalCraft optimization" 
                       className="w-full h-full object-contain rounded-sm"
                     />
                   </div>
                 </div>
               </div>
             </div>

             <div className="mt-6 space-y-2">
               <div className="flex items-center text-red-600">
                 <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                 <span className="text-sm">Poor visual hierarchy</span>
               </div>
               <div className="flex items-center text-red-600">
                 <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                 <span className="text-sm">Confusing navigation</span>
               </div>
               <div className="flex items-center text-red-600">
                 <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                 <span className="text-sm">Low conversion rates</span>
               </div>
             </div>
           </div>

           {/* After - Organized Menu */}
           <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
             <div className="text-center mb-8">
               <h3 className="text-2xl font-bold text-green-600 mb-2">AFTER</h3>
               <p className="text-gray-600">Clean, optimized menu design</p>
             </div>
             
             <div className="relative">
               {/* Phone mockup */}
               <div className="mx-auto w-64 h-[500px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
                 <div className="w-full h-full bg-gray-100 rounded-[2rem] overflow-hidden relative">
                   {/* Notch */}
                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
                   
                   {/* Screen content */}
                   <div className="h-full bg-white p-2 pt-6 overflow-hidden">
                     <img 
                       src="/assets/organized-menu.jpg" 
                       alt="Optimized Swiggy Zomato menu design after GoalCraft menu redesign" 
                       className="w-full h-full object-contain rounded-sm"
                     />
                   </div>
                 </div>
               </div>
             </div>

             <div className="mt-6 space-y-2">
               <div className="flex items-center text-green-600">
                 <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                 <span className="text-sm">Clear visual hierarchy</span>
               </div>
               <div className="flex items-center text-green-600">
                 <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                 <span className="text-sm">Intuitive navigation</span>
               </div>
               <div className="flex items-center text-green-600">
                 <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                 <span className="text-sm">Higher conversion rates</span>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };

 export default MenuComparison;