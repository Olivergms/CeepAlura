const BotaoConclui = () => {
  const BotaoConcluir = document.createElement('button');

  BotaoConcluir.classList.add('check-button');
  BotaoConcluir.innerText = 'concluir';

  BotaoConcluir.addEventListener('click', concluiTarefa)

  return BotaoConcluir;
}


const concluiTarefa = (evento) => {
  const BotaoConcluir = evento.target

  const tarefaCompleta = BotaoConcluir.parentElement

  tarefaCompleta.classList.toggle('done')
}

export default BotaoConclui;