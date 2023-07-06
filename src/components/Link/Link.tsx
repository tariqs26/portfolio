import "./Link.css"

export default function Link({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a className="link" target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}
