// Write your code here
const PlanetItem = props => {
  const {itemDetails} = props
  const {name, imageUrl, description} = itemDetails
  const altText = `planet ${name}`
  return (
    <div>
      <img src={imageUrl} alt={altText} className="imag-planet" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
export default PlanetItem
