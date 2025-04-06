import './ActionButton.css'

interface Props {
  text: string
  action: () => void
}

export const ActionButton = ({ text, action }: Props) => {
  return (
    <button onClick={action} className="action-button">{ text }</button>
  )
}