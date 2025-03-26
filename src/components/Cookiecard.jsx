"use client";
// import { RxCookie } from "react-icons/rx";
// import { useState } from "react";



    const button = document.getElementById("acceptButton");
    const popup = document.getElementById("cookiePopup");

 
    button.addEventListener("click", function () {
        if (popup) {
            popup.style.display = "none";
        }
    });


//     const [likes, setLikes] = useState(0);
//     return (
//       <button className="cookie-popup" onClick={() => setLikes(likes + 1)}>
//         <RxCookie /> {props.label}
//         {likes > 1 ? "s" : ""} {likes}
//       </button>
//     );
//   };
  
//   export default Cookiecard;
  

// <RxCookie />

// const button = document.getElementById("acceptButton");
//         const popup = document.getElementById("cookiePopup");
        
//         button.addEventListener("click", function () {
//             if (popup) {
//                 popup.style.display = "none";
//             }
//         });
