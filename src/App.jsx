
import { useLocalStorage } from './useLocalStorage';
import './styles/App.css'

function App() {
  const [numb, setNums] = useLocalStorage('numbers', []);
  const [letters, setLetters] = useLocalStorage('leters', []);
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const leters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

  function addNums(value) {
    setNums([...numb, value]);
  }
  function addLetters(value) {
    setLetters([...letters, value]);
  }

  return (
    <>

      <div>
        {nums.map(num => (
          <button
            key={num}
            onClick={() => addNums(num)}
          >
            {num}
          </button>
        ))}
        <p>{numb.join(', ')}</p>
      </div>
      <div>
        {leters.map(letter => (
          <button
            key={Math.random(300)}
            onClick={() => addLetters(letter)}
          >
            {letter}
          </button>
        ))}
        <p>{letters.join(', ')}</p>
      </div>
    </>
  )
}

export default App
