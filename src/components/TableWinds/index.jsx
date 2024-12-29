// 樣式模組 (css module)
import S from './style.module.css'

// 單機牌局
function TableWinds({ start }) {
  const windMap = { east: 0, south: 1, west: 2, north: 3 }

  const getWind = position => {
    if (!start) return null
    const startValue = windMap[start]
    const windValue = (startValue + position - 1) % 4
    return Object.keys(windMap).find(key => windMap[key] === windValue)
  }

  return (
    <div className={`${S.container} ${start ? '' : S.hidden}`}>
      <img className={`${S.wind} ${S.east}`} src={`img/table/${getWind(1)}.png`} />
      <img className={`${S.wind} ${S.south}`} src={`img/table/${getWind(2)}.png`} />
      <img className={`${S.wind} ${S.west}`} src={`img/table/${getWind(3)}.png`} />
      <img className={`${S.wind} ${S.north}`} src={`img/table/${getWind(4)}.png`} />
    </div>
  )
}

export default TableWinds
