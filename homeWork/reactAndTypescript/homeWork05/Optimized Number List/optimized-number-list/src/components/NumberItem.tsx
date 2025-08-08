import React from 'react'

interface NumberItemProps {
  value: number
  onIncrement: () => void
  onDecrement: () => void
}

const NumberItem = React.memo(({ value, onIncrement, onDecrement }: NumberItemProps) => {
  console.log('Rendering item:', value)
  return (
    <div className="number-item">
      {value}
      <button className="increment" onClick={onIncrement}>Increment</button>
      <button className="decrement" onClick={onDecrement} disabled={value <= 0}>Decrement</button>
    </div>
  )
})

export default NumberItem
