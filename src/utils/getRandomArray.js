
const getRandomArray = (arr) => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
}

export default getRandomArray