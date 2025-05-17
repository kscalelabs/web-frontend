import BackgroundVideo from "next-video/background-video";
import getStarted from "@/videos/landing/landing_video_0514.mp4";

export default function Page() {
  return (
    <BackgroundVideo src={getStarted} className="backdrop-brightness-[0.4]">
      <div className="brightness-100">
        <h1>next-video</h1>
        <p>
          A React component for adding video to your Next.js application. It extends both the video
          element and your Next app with features for automatic video optimization.
        </p>
      </div>
    </BackgroundVideo>
  );
}
