import "./Hamburger.css"

type Props = Readonly<{
  open: boolean
  setOpen: (open: boolean) => void
}>

export default function Hamburger({ open, setOpen }: Props) {
  return (
    <div className="hamburger">
      <div
        className="bar-container"
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
        aria-controls="menu"
        title="Menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  )
}
