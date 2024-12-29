// 樣式模組 (css module)
import S from './style.module.css'
// 組件 (component)
import TableWinds from '../../components/TableWinds'

// 單機牌局
function Offline() {
  const startWind = ''

  return (
    <div className={S.container}>
      <div className={S.table}>
        <img className={S.dragonLogo} src="img/table/dragon.png" />
        <TableWinds start={startWind} />
      </div>
    </div>
  )
}

export default Offline
