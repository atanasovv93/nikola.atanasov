import { useState, useMemo, useCallback } from 'react'
import NumberItem from './components/NumberItem'
import './App.css'

export default function App() {
  const initialNumbers = [1, 2, 3, 4, 5]
  const [numbers, setNumbers] = useState<number[]>(initialNumbers)

  const sum = useMemo(() => {
    console.log('Calculating sum')
    return numbers.reduce((acc, n) => acc + n, 0)
  }, [numbers])

  const incrementAtIndex = useCallback(
    (index: number) => {
      setNumbers(prev => {
        const copy = [...prev]
        copy[index] = copy[index] + 1
        return copy
      })
    },
    []
  )

  const decrementAtIndex = useCallback(
    (index: number) => {
      setNumbers(prev => {
        const copy = [...prev]
        if (copy[index] > 0) {
          copy[index] = copy[index] - 1
        }
        return copy
      })
    },
    []
  )

  const resetNumbers = useCallback(() => {
    setNumbers(initialNumbers)
  }, [])

  return (
    <div className="container">
      <h2 className="sum">Sum: {sum}</h2>
      <button className="reset" onClick={resetNumbers}>Reset</button>
      {numbers.map((num, i) => (
        <NumberItem 
          key={i} 
          value={num} 
          onIncrement={() => incrementAtIndex(i)} 
          onDecrement={() => decrementAtIndex(i)} 
        />
      ))}
    </div>
  )
}
