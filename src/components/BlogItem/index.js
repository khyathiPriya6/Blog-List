// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {title, description, publishedDate} = blogItemDetails
  return (
    <li className="list-container-blog-item">
      <div className="each-blog-item-container">
        <div className="description-container">
          <h1 className="title-style">{title}</h1>
          <p className="description">{description}</p>
        </div>
        <div className="date-container">
          <p className="date">{publishedDate}</p>
        </div>
      </div>
      <hr className="horizontal-line" />
    </li>
  )
}

export default BlogItem
