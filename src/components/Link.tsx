type linkProps = {
  children: string;
  href: string;
};

function Link({ children, href }: linkProps) {
  return (
    <a
      className="
    bg-purple-700
     hover:bg-purple-200 
     rounded-full 
     text-2xl 
     py-2 px-5 
     mt-10 
     animate-bounce 
     md:py-6 
     md:px-18
    md:mt-16"
      href={href}
      target="_blanket"
    >
      {children}
    </a>
  );
}

export default Link;
