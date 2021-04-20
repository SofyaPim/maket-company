const viewAll = (trigger, styles) => {

    const cards = document.querySelectorAll(styles),
btn = document.querySelector(trigger);

   cards.forEach(card => {
       card.classList.add('animated', 'fadeInUp');
   })
   btn.addEventListener('click', function()  {
    cards.forEach(card => {
         card.classList.remove('hidden');
        card.classList.add('block');
       })
    btn.remove();
       
    })

  
  


}
viewAll('.viewAll', '.more-works');