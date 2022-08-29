import clsx from "clsx";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
};

export function H1({ children, className }: TypographyProps) {
  return (
    <h1
      className={clsx(
        "text-5xl md:text-7xl lg:text-9xl font-black text-center",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3
      className={clsx(
        "mt-14 font-black text-gray-400 text-2xl md:text-5xl lg:text-6xl ",
        className
      )}
    >
      {children}
    </h3>
  );
}
