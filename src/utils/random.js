const random = async () => {
  try {
    const res = await fetch("https://api.punkapi.com/v2/beers/random");
    const newData = await res.json();
    return newData
  } catch(e) {
    return null
  }
}
export { random }

