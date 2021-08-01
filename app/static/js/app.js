import { get_ticket } from "./get_ticket.js";

const subtitle = document.getElementById('subtitle');

const btnNormal = document.getElementById('normal');

const btnEspecial = document.getElementById('especial');

const btnPreferencial = document.getElementById('preferencial');

const btnTicketModal = document.getElementById('btnTicket');

const marquee = document.getElementById('marquee_text');

btnNormal.addEventListener('click', (e) => {
  const modal = document.getElementById('container_modal');
  console.log('Abriendo Modal : Cliente Normal');
  let title = document.querySelector('#subtitle');
  title.innerHTML = 'Cliente Normal';
  let message = document.getElementById('message');
  subtitle.style.display = 'block';
  message.style.display = 'block';
  message.innerHTML = ' Presione Ticket para solicitar turno';
  modal.style.display = 'flex';
  btnTicketModal.style.display = 'block';
  marquee.style.display = 'none';
  e.preventDefault();
});

btnEspecial.addEventListener('click', (e) => {
  const modal = document.getElementById('container_modal');
  const modal2 = document.getElementById('modal');
  subtitle.style.display = 'block';
  console.log('Abriendo Modal : Cliente Especial');
  btnTicketModal.style.display = 'block';
  marquee.style.display = 'none';
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
  const inputTicket = document.getElementById('ticket');
  const inputPreferencial = document.getElementById('input_container');
  const modal2 = document.getElementById('modal');
  const select = document.getElementById('Vendedor');
  let title = document.querySelector('#subtitle');
  let message = document.getElementById('message');
  let inputValue = inputTicket.value;


  if (inputValue.length > 0) {
    inputTicket.value = '';
  }

  subtitle.style.display = 'block';
  title.innerHTML = 'Cliente Preferencial';
  console.log('Abriendo Modal : Cliente Preferencial');
  message.style.display = 'block';
  message.innerHTML = ' Introduzca su codigo y seleccione vendedor';
  modal.style.display = 'flex';
  btnTicketModal.style.display = 'block';
  inputPreferencial.style.display = 'block';
  modal2.style.height = '42%';
  marquee.style.display = 'none';
  select.style.display = 'block';

  var input_verify = setInterval(() => {
    const inputTicket = document.getElementById('ticket').value;
    let valor = inputTicket;
    if (valor == 0) {
      btnTicketModal.style.display = 'none';
      console.log(valor);
    }
    else {
      btnTicketModal.style.display = 'block';
      btnTicketModal.addEventListener('click', () => {
        console.log('presionado');
        btnTicketModal.style.display = 'none';
        clearInterval(input_verify);
      });
    }
  }, 300);

  btnTicketModal.style.display = 'none';

  e.preventDefault();
})


btnTicketModal.addEventListener('click', (e) => {
  const modal = document.getElementById('container_modal');
  const modal2 = document.getElementById('modal');
  let message = document.getElementById('message');
  let select = document.getElementById('Vendedor');
  let timer = document.getElementById('timer');
  
  subtitle.style.display = 'none';

  btnTicketModal.style.display = 'none';
  console.log('Espero 3 segundos')
  

  modal.style.display = 'none';
  modal2.style.height = '25%';
  marquee.style.display = 'inline';

  get_ticket();
  

  modal2.style.height = '25%';
  btnTicketModal.style.display = 'none';
  message.style.display = 'none';
  select.style.display = 'none';
  //----------Control input preferencial
  const inputPreferencial = document.getElementById('input_container');
  inputPreferencial.style.display = 'none';

  //e.preventDefault();

});

setInterval(() => {
  var valor = document.getElementById('p_text').value
  const pText = document.getElementById('p_text');
  var array = [];
  array.push(valor);
  pText.style.display = 'none';
}, 15000);




