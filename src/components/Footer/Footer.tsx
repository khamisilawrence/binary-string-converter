import { footerTextContent } from "@/constants";

const { footerPrefix, footerSignature, footerSymbol, footerTimestamp } =
  footerTextContent;

const Footer = () => {
  return (
    <footer className="w-full absolute bottom-0">
      <span className="flex justify-center items-center gap-x-1 w-full py-4 text-white/40 text-xs">
        <p>{footerSymbol}</p>
        <p>{footerTimestamp}</p>
        <p>{`${footerPrefix} ${footerSignature}`}</p>
      </span>
    </footer>
  );
};

export default Footer;
