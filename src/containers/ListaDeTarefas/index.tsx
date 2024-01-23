import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'Ver a aula 3',
    prioridade: 'Importante',
    status: 'pendente'
  },
  {
    titulo: 'pagar a conta de internet',
    descricao: 'Pegar o boleto e pagar',
    prioridade: 'urgente',
    status: 'Concluida'
  },
  {
    titulo: 'Ir para academia',
    descricao: 'Treino de perna',
    prioridade: 'Importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 Tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
