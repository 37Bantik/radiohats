interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-12 ${className}`}>
      {children}
    </section>
  );
}
