// 函式庫 (library)
import { Link } from 'react-router-dom'

// 錨點
function Anchor({ path, style, onClick, children }) {
  return (
    <>
      <Link to={path} className={style} target="_self" onClick={onClick}>
        {children}
      </Link>
    </>
  )
}

export default Anchor
