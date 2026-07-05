interface LiveProjectButtonProps {
  href?: string;
}

const LiveProjectButton = ({ href }: LiveProjectButtonProps) => {
  if (!href) {
    return (
      <button
        onClick={(e) => e.preventDefault()}
        className="inline-block rounded-full border-2 border-[#D7E2EA] px-5 py-2.5 sm:px-10 sm:py-3.5 text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer bg-transparent"
      >
        Live Project
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full border-2 border-[#D7E2EA] px-5 py-2.5 sm:px-10 sm:py-3.5 text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer text-center"
    >
      Live Project
    </a>
  );
};

export default LiveProjectButton;
