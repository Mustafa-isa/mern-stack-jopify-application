import {useAppContext} from "../context/AppContext"
import "../../src/index.css"

const Alert = () => {
  const appApi = useAppContext()
  return <div className={`alert alert-danger`}>{appApi.state.alertStatment}</div>
}

export default Alert
