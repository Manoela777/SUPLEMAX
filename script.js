function nextPage(pageNumber){

  const pages =
    document.querySelectorAll('.page');

  pages.forEach(page=>{
    page.classList.remove('active');
  });

  document
    .getElementById('page'+pageNumber)
    .classList.add('active');

  window.scrollTo({
    top:0,
    behavior:'smooth'
  });

}

let upsellAdded = false;

document
  .getElementById('addUpsell')
  .addEventListener('click',function(){

    if(!upsellAdded){

      upsellAdded = true;

      this.innerHTML =
        '✓ Produto Adicionado';

      this.style.background =
        '#166534';

      alert(
        'Coenzima Q10 adicionada ao pedido!'
      );

    }

  });