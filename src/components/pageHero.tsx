export default function PageHero({ img, text }: { img: string; text: string }) {
  return (
    <div className="max-h-[340px] h-[340px] w-full relative">
      <img
        src={img}
        className="w-full h-full max-w-full max-h-full object-cover align-middle"
        aria-hidden
      />
      <div className="flex absolute top-0 bottom-0 left-0 right-0 bg-black/30">
        <div className="flex justify-center items-center w-full h-full text-primaryText text-4xl font-bold font-[Lato,Arial] text-center">
          {text}
        </div>
      </div>
    </div>
  );
}
