function TextTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-bold text-2xl sm:text-4xl lg:text-6xl">{children}</h1>
  );
}

export default TextTitle;
