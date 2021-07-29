"use strict";

var btnNormal = document.getElementById('normal');
var btnEspecial = document.getElementById('especial');
var btnPreferencial = document.getElementById('preferencial');
var btnTicketModal = document.getElementById('btnTicket');
btnNormal.addEventListener('click', function (e) {
  var modal = document.getElementById('container_modal');
  console.log('Abriendo Modal : Cliente Normal');
  var title = document.querySelector('#subtitle');
  title.innerHTML = 'Cliente Normal';
  var message = document.getElementById('message');
  message.style.display = 'block';
  message.innerHTML = ' Presione Ticket para solicitar turno';
  modal.style.display = 'flex';
  btnTicketModal.style.display = 'block';
  e.preventDefault();
});
btnEspecial.addEventListener('click', function (e) {
  var modal = document.getElementById('container_modal');
  var modal2 = document.getElementById('modal');
  console.log('Abriendo Modal : Cliente Especial');
  btnTicketModal.style.display = 'block';
  var title = document.querySelector('#subtitle');
  title.innerHTML = 'Cliente Especial';
  modal.style.display = 'flex';
  modal2.style.height = '32%';
  var message = document.getElementById('message');
  message.style.display = 'block';
  message.innerHTML = 'Seleccione un Vendedor y presione Ticket';
  var select = document.getElementById('Vendedor');
  select.style.display = 'block';
});
btnPreferencial.addEventListener('click', function (e) {
  var modal = document.getElementById('container_modal');
  console.log('Abriendo Modal : Cliente Preferencial');
  var title = document.querySelector('#subtitle');
  title.innerHTML = 'Cliente Preferencial';
  var message = document.getElementById('message');
  message.style.display = 'block';
  message.innerHTML = ' Introduzca su codigo y presione ticket para solicitar turno';
  modal.style.display = 'flex';
  btnTicketModal.style.display = 'block';
  var inputPreferencial = document.getElementById('input_container');
  inputPreferencial.style.display = 'block';
  var modal2 = document.getElementById('modal');
  modal2.style.height = '34%';
  var inputTicket = document.getElementById('ticket').value;
  var valor = inputTicket;

  if (valor == 0) {
    //btnTicketModal.style.display='none';
    console.log(valor);
  } else {
    btnTicketModal.style.display = 'block';
  }

  e.preventDefault();
});
btnTicketModal.addEventListener('click', function (e) {
  var modal = document.getElementById('container_modal');
  var message = document.getElementById('message');
  var select = document.getElementById('Vendedor');
  console.log('Espero 3 segundos');
  setTimeout(function () {
    modal.style.display = 'none';
    modal2.style.height = '25%';
  }, 2000);
  var modal2 = document.getElementById('modal');
  modal2.style.height = '25%';
  btnTicketModal.style.display = 'none';
  message.style.display = 'none';
  select.style.display = 'none'; //----------Control input preferencial

  var inputPreferencial = document.getElementById('input_container');
  inputPreferencial.style.display = 'none'; //e.preventDefault();
});