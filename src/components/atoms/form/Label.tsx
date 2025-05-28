interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
}

const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  required = false,
}) => (
  <label
    htmlFor={htmlFor}
    className="block px-2 text-sm font-medium text-gray-700"
  >
    {children}
    {required && <span className="text-actiondanger ml-1">*</span>}
  </label>
)


export default Label