import "./Link.css";

export default function Link({
  href,
  children,
}: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a href={href} className="link" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
