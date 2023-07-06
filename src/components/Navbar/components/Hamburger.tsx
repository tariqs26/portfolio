import "./Hamburger.css"

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}
export default function Hamburger({ open, setOpen }: Props) {
  return (
    <div className="hamburger">
      <div
        className="bar-container"
        onClick={() => setOpen(!open)}
        aria-controls="menu"
        title="Menu"
        role="button"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  )
}
