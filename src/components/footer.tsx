import FooterLogo from "@/assets/tarumt_logo_footer.png";
import MdecFooter from "@/assets/tarumt_footer_mdec.jpg";
import FBLogo from "@/assets/FB.png"
import YTLogo from "@/assets/YOUTUBE.png"
import IGLogo from "@/assets/INSTAGRAM.png"
import WALogo from "@/assets/WHATSAPP.png"

export default function Footer() {
  return (
    <footer className="grid grid-cols-3 gap-4 px-12 py-8 bg-primaryBg">
      <a href="https://tarc.edu.my/" className="p-4">
        <img src={FooterLogo} alt="TAR UMT Logo" className="w-9/12" />
      </a>
      <div className="text-center text-white">
        <h1 className="font-semibold text-lg uppercase">
          Tunku Abdul Rahman University of Management and Technology
        </h1>
        <p className="mt-6">Registration No. DU058(W)</p>
        <p className="mt-1">Wholly owned by the TARC Education Foundation</p>
        <p className="mt-1">(Co. Reg. No.: 201301003979 (1033820-M))</p>
        <div className="flex justify-center items-center gap-4 mt-6">
          <a href="https://www.facebook.com/tarumtkl" target="_blank" className="w-[40px] h-[40px]">
            <img src={FBLogo} alt="Facebook Logo" />
          </a>
          <a href="https://www.youtube.com/channel/UCqjsPpVnwjCRT5mgAgFo1ng" target="_blank" className="w-[40px] h-[40px]">
            <img src={YTLogo} alt="Youtube Logo" />
          </a>
          {/* HAHAHA the link to this page (ig) is broken, not my fault tho I just took it from the official site */}
          <a href="https://www.instagram.com/tarumt.official/" target="_blank" className="w-[40px] h-[40px]">
            <img src={IGLogo} alt="Instagram Logo" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=601110758554" target="_blank" className="w-[40px] h-[40px]">
            <img src={WALogo} alt="Whatsapp Logo" />
          </a>
        </div>
      </div>
      <img
        src={MdecFooter}
        alt="Awards?"
        className="w-11/12 justify-self-end"
      />
    </footer>
  );
}
