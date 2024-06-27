import { PlayCircleFilled } from "@ant-design/icons";

type Props = {
  // Add props here
};

export const VideoComponent = (props: Props) => {
  return (
    <div className="bg-video-bg flex min-h-[380px] w-full items-center justify-center rounded-[20px] bg-cover bg-center lg:min-h-[680px]">
      <div className="relative h-[60px] w-[60px]">
        <div className="absolute h-full w-full animate-ping rounded-full bg-white opacity-75"></div>
        <button className="bg-accentRed flex h-full w-full items-center justify-center overflow-hidden rounded-full">
          <PlayCircleFilled className="text-[62px] text-white " />
        </button>
      </div>
    </div>
  );
};
