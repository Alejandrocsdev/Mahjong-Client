// 函式庫 (library)
import { Link } from 'react-router-dom'

// 錨點
function Anchor({ path, style, children }) {
  return (
    <>
      <Link to={path} className={style}>
        {children}
      </Link>
    </>
  )
}

export default Anchor
