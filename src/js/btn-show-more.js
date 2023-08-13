export function btnShowMore() {
  const btnMore = document.querySelectorAll('.btn-more')

  for (let i = 0; i < btnMore.length; i++) {
    btnMore[i].addEventListener('click', () => onClickBtnMore(btnMore[i]))
  }

  function onClickBtnMore(btn) {
    const content = btn.previousElementSibling
    content.classList.toggle('drop-down-grid--open')
    const fullHeight = content.scrollHeight
    //

    if (content.classList.contains('drop-down-grid--open')) {
      content.style.maxHeight = fullHeight + 'px'
      btn.textContent = 'Скрыть'
      btn.classList.add('btn-more--showed')
    } else {
      content.removeAttribute('style')
      btn.textContent = 'Показать все'
      btn.classList.remove('btn-more--showed')
    }
  }
}
