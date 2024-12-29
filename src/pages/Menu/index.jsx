// 樣式模組 (css module)
import S from './style.module.css'
// 組件 (component)
import Anchor from '../../components/Anchor'

// 選單
function Manu() {
  return (
    <div className={S.container}>
      <div className={S.title}>
        <img className={S.dotLogo} src="img/logo/dot.png" />
        <div className={S.name}>麻將遊戲</div>
        <img className={S.dotLogo} src="img/logo/dot.png" />
      </div>
      <div className={S.options}>
        <Anchor path="/offline" style={`${S.option} ${S.offline}`}>
          單機牌局
        </Anchor>
        <img className={S.dragonLogo} src="img/logo/dragon.png" />
        <Anchor path="/online" style={`${S.option} ${S.online}`}>
          線上牌局
        </Anchor>
      </div>
    </div>
  )
}

export default Manu
