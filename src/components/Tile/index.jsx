// 樣式模組 (css module)
import S from './style.module.css'
// 資料 (data)
import tilePositions from '../../assets/data/tile-positions.json'

// 單機牌局
function Tile({ name, size = 1 }) {
  // 麻將圖檔座標
  const { x, y } = tilePositions[name]

  return (
    <div
      className={S.base}
      style={{
        width: `${76 * size}px`,
        height: `${96 * size}px`,
        backgroundSize: `${684 * size}px ${480 * size}px`,
        backgroundPosition: `${x * size}px ${y * size}px`
      }}
    ></div>
  )
}

export default Tile
