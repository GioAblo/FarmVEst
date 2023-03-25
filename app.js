const items = document.querySelectorAll('.pathway__farmvest .pathway__farmvest-item');

items.forEach(item => {
    const trigger = item.querySelector('.pathway__farmvest-title');

    trigger.addEventListener('click', () => {
        trigger.nextElementSibling.classList.toggle('active');
    });
});   
 

const drops = document.querySelectorAll('.pathway__farmvest .pathway__farmvest-item');

 
drops.forEach(drop => {
    const rottate =  drop.querySelector('.pathway__farmvest-title');
 
 
    rottate.addEventListener('click', () => {
         rottate.lastChild.classList.toggle('drop-rotate')
    } );
 
}); 