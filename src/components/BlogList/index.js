// Write your JS code here
import {Component} from 'react'

import BlogItem from '../BlogItem/index'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props
    return (
      <div className="blog-list-container">
        <ul>
          {blogsList.map(eachItem => (
            <BlogItem blogItemDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default BlogList
