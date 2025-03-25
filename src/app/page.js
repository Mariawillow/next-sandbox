import LikeButton from "@/components/Likebutton";
//sfc -> snippet til at oprette kompomnent syntax
export default function Home() {
  return (
    <div>
      <LikeButton label="Like" />
      <LikeButton label="DisLike" />
    </div>
  );
}
