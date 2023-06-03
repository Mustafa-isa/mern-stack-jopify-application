import NotFound from "../assets/images/not-found.svg"
import Wrapper from "../assets/wrappers/ErrorPage"
import {Link} from "react-router-dom"
function Error() {
  return (
  <Wrapper className="full-page">
    <img src={NotFound} alt="" />
    <p>page noy fount </p>
    <Link to='/'> Back Home</Link>
  </Wrapper>
  )
}

export default Error