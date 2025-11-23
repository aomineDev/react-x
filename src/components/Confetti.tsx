import ConfettiBoom from 'react-confetti-boom'

interface ConfettiProps {
  fall?: boolean
  show?: boolean
}

const Confetti = ({ fall = false, show = true }: ConfettiProps) => {
  if (show)
    return (
      <>
        <ConfettiBoom
          mode={fall ? 'fall' : 'boom'}
          colors={['#4e3aeb', '#45f282', '#ff8383', '#fff9b0']}
        />
      </>
    )

  return null
}

export default Confetti
