// import LikeButton from "@/components/Likebutton";
import Cookiecard from "@/components/Cookiecard";


//sfc -> snippet til at oprette kompomnent syntax
export default function Home() {
  return (
<div class="cookie-popup" id="cookiePopup">
        <p>We use cookies to improve your user experience.</p>
        <Cookiecard label="I Like Cookies" />
        <button id="acceptButton">I Like Cookies</button>
    </div>

    // <div>
    //   {/* <LikeButton label="I Like Cookies" /> */}
    //   <Cookiecard label="I Like Cookies" />

    //   {/* <LikeButton label="DisLike" /> */}
    // </div>
  );
}




