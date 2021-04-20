const filter = () => {
    const menu = document.querySelector('.tab-links'),
          items = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnMockups = menu.querySelector('.mockups'),
          btnWebDesign = menu.querySelector('.web-design'),
          btnUiUxDesign = menu.querySelector('.ui-ux-design'),
          
          wrapper = document.querySelector('.latest-works__img'),
          markAll = wrapper.querySelectorAll('.all'),
          markMockups = wrapper.querySelectorAll('.mockups'),
          markWebDesign = wrapper.querySelectorAll('.web-design'),
          markUiUxDesign = wrapper.querySelectorAll('.ui-ux-design');
          
         

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        })
       
        if(markType){
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
                
            })
        }
    }

    function filterBy(btn, type ) { 
       
        btn.addEventListener('click',  function() {
        
            typeFilter(type);

        })
       
    }

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if(target || target.tagName == "LI"){
            items.forEach(btn => btn.classList.remove('active-link'));
        }
        target.classList.add('active-link');
    })

    filterBy(btnAll, markAll);
    filterBy(btnMockups, markMockups);
    filterBy(btnWebDesign, markWebDesign);
    filterBy(btnUiUxDesign, markUiUxDesign);
    

}
filter();