// Write your code here.
import './index.css'

const CourseDetails = props => {
  const {courseDetails} = props
  const {title, description, imgUrl, className} = courseDetails
  return (
    <li className={`${className} card`}>
      <h1 className="heading">{title}</h1>
      <p className="para">{description}</p>
      <div className="img-container">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CourseDetails
