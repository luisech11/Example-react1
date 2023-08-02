import getRandomArray from '../utils/getRandomArray'
import phrases from '../utils/phrases.json'


const Button = ({setPhRandom, setNumImg}) => {

    const handleChange = () => {

        setPhRandom(getRandomArray(phrases))

        setNumImg(getRandomArray([1,2,3,4]))
    }

  return (
    <button onClick={handleChange} className="btn">Probar mi suerte</button>
  )
}

export default Button