import { useNavigate } from "react-router-dom"

const NavigationButton = ({
  path,
  label,
  className,
}: {
  path: string
  label: string
  className: string
}) => {
  const navigate = useNavigate()

  return (
    <button className={className} onClick={() => navigate(path)}>
      {label}
    </button>
  )
}

export default NavigationButton
