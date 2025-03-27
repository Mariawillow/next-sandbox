"use client";
import { RxCookie } from "react-icons/rx";
// import { useState } from "react";

//jsx er elementer x strå for extention, noget det læggen ovenpå js, som gør det mulgit for os at skrive html i js.
    
const cookiePopup = () => {
    return(
        <section className="cookie-consent-popup">
            <header className="cookie-consent-popup-header">
                <RxCookie size={50} />
            </header>
            <footer className="cookie-consent-popup-footer">
                <p className="cookie-consent-popup-paragraph"> bla bla </p>
                <button className="cookie-consent-popup-button"> I Like Cookies </button>
            </footer>
        </section>
    )
}

export default cookiePopup;



    // const button = document.getElementById("acceptButton");
    // const closeButton = document.getElementById("closeButton");
    // const popup = document.getElementById("cookiePopup");

 
    // button.addEventListener("click", function () {
    //     if (popup) {
    //         popup.style.display = "none";
    //     }
    // });

    // closeButton.addEventListener("click", function () {
    //     if (popup) {
    //         popup.style.display = "none";
    //     }
    // });


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
