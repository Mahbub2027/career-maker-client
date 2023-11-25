// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const BrowserTab = () => {
//     const location = useLocation();

//     useEffect(()=>{
//         const pageTitle = getPageTitle(location.pathname);
//         document.title= `HomeCarrer | ${pageTitle}`
//     },[location.pathname])

//     const getPageTitle = (path) => {
//         switch (path) {
//           case '/home':
//             return 'Home';
//           case '/allServices':
//             return 'Services';
//           // Add more cases as needed
//           default:
//             return 'HomeCareer';
//         }
//       };

//     return (
//         <div>
            
//         </div>
//     );
// };

// export default BrowserTab;