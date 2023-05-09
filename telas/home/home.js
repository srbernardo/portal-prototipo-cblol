const abas = document.querySelectorAll('.aba');

abas.forEach( aba => {
  aba.addEventListener('click', function() {
    const abaSelecionada = document.querySelector('.aba.selecionada');
    abaSelecionada.classList.remove('selecionada');
    aba.classList.add('selecionada');

    const contentSelecionada = document.querySelector('.content.selecionada')
    contentSelecionada.classList.remove('selecionada')

    const idDacontentSelecionada = `content-${aba.id}`;
    const contentParaExibir = document.getElementById(idDacontentSelecionada);
    contentParaExibir.classList.add('selecionada');
  })
});
