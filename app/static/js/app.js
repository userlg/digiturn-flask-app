
const btnNormal = document.getElementById('normal')

const btnTicketModal = document.getElementById('btnTicket')

btnNormal.addEventListener('click', (e) => {
const modal = document.getElementById('container_modal');
console.log('Abriendo Modal : Cliente Normal');
modal.style.display='flex';

e.preventDefault();
});


btnTicketModal.addEventListener('click', (e) => {
  const modal = document.getElementById('container_modal');
  console.log('Espero 4 segundos')
  setTimeout(() => {
    
    modal.style.display='none';},4000)


e.preventDefault();

})