function resolveAfterNSeconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 1000);
  });
}

async function generate_time(seg){
  let i = seg;
  let text = document.getElementById('timer');
  text.style.display='block';
  while(i){
   
    console.log('seconds: ',i);
    text.innerHTML=i;
    let result = await resolveAfterNSeconds();
    i--;

  }
  text.style.display='none';
}


export {generate_time};