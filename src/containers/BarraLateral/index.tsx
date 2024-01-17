import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="Concluidas" contador={2} />
        <FiltroCard legenda="Urgentes" contador={3} />
        <FiltroCard legenda="Importantes" contador={2} />
        <FiltroCard legenda="Normal" contador={1} />
        <FiltroCard legenda="Todas" contador={9} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
