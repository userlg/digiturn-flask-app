
const btnNormal = document.getElementById('normal')

btnNormal.addEventListener('click', () => {
  console.log('Boton presionado')
  window.open('/', 'MyWindow', 'width=500,height=500,scrollbars=no, margin=auto')
})
