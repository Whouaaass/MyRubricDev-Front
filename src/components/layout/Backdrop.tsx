import type { MouseEventHandler } from "react";

interface BackdropProps {
  onClose: MouseEventHandler;
}

const Backdrop: React.FC<BackdropProps> = ({  onClose }) => (<div
  className="absolute inset-0 bg-black opacity-10 transition-opacity"
  onClick={onClose}
/>)


export default Backdrop
