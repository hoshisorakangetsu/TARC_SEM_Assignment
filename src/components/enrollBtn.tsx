import EnrollBg from "@/assets/focs_enroll_bg.JPG";

export default function EnrollBtn() {
  return (
    <div
      className="flex justify-center items-center p-8 bg-center bg-cover relative before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-black/30"
      style={{ backgroundImage: `url(${EnrollBg})` }}
    >
      <button
        className="z-[1] bg-primaryBg px-4 py-1 rounded-md"
        onClick={() =>
          window.open(
            "https://www.tarc.edu.my/admissions/a/intake-in-progress/",
            "_blank"
          )
        }
      >
        ENROLL NOW
      </button>
    </div>
  );
}
