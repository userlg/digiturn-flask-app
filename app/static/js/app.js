
const btnNormal = document.getElementById('normal')

const btnEspecial = document.getElementById('especial')

const btnPreferencial = document.getElementById('preferencial');

const btnTicketModal = document.getElementById('btnTicket')

btnNormal.addEventListener('click', (e) => {
  const modal = document.getElementById('container_modal');
  console.log('Abriendo Modal : Cliente Normal');
  let title = document.querySelector('#subtitle');
  title.innerHTML = 'Cliente Normal';
  let message = document.getElementById('message');
  message.style.display = 'block';
  message.innerHTML = ' Presione Ticket para solicitar turno';
  modal.style.display = 'flex';
  btnTicketModal.style.display = 'block';

  e.preventDefault();
});

btnEspecial.addEventListener('click', (e) => {
  const modal = document.getElementById('container_modal');
  const modal2 = document.getElementById('modal');
  console.log('Abriendo Modal : Cliente Especial');
  btnTicketModal.style.display = 'block';

  let title = document.querySelector('#subtitle');
  title.innerHTML = 'Cliente Especial';
  modal.style.display = 'flex';

  modal2.style.height = '32%';

  let message = document.getElementById('message');
  message.style.display = 'block';
  message.innerHTML = 'Seleccione un Vendedor y presione Ticket';

  let select = document.getElementById('Vendedor');
  select.style.display = 'block';
});

btnPreferencial.addEventListener('click', (e) => {
  const modal = document.getElementById('container_modal');
  console.log('Abriendo Modal : Cliente Preferencial');
  let title = document.querySelector('#subtitle');
  title.innerHTML = 'Cliente Preferencial';
  let message = document.getElementById('message');
  message.style.display = 'block';
  message.innerHTML = ' Introduzca su codigo y presione ticket para solicitar turno';
  modal.style.display = 'flex';
  btnTicketModal.style.display = 'block';
  const inputPreferencial = document.getElementById('input_container');
  inputPreferencial.style.display = 'block';
  const modal2 = document.getElementById('modal');
  modal2.style.height = '34%';

  while (true) {
    setTimeout(() => {
      console.log('dentro del setTimeout')
      const inputTicket = document.getElementById('ticket').value;
      let valor = inputTicket;
      if (valor == 0) {
        btnTicketModal.style.display = 'none';
        console.log(valor);
      }
      else {
        btnTicketModal.style.display = 'block';
        return 'btn unblock';
      }

    }, 1400);
  }



  e.preventDefault();
})


btnTicketModal.addEventListener('click', (e) => {
  const modal = document.getElementById('container_modal');
  let message = document.getElementById('message');
  let select = document.getElementById('Vendedor');
  console.log('Espero 3 segundos')
  setTimeout(() => {
    modal.style.display = 'none';
    modal2.style.height = '25%';
  }, 2000)
  const modal2 = document.getElementById('modal');

  modal2.style.height = '25%';
  btnTicketModal.style.display = 'none';
  message.style.display = 'none';
  select.style.display = 'none';
  //----------Control input preferencial
  const inputPreferencial = document.getElementById('input_container');
  inputPreferencial.style.display = 'none';

  //e.preventDefault();

});




