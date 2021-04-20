const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.latest-works'),
          bigImage = document.createElement('img');

          imgPopup.classList.add('popup');
          workSection.appendChild(imgPopup);
        
          imgPopup.style.justifyContent = 'center';
          imgPopup.style.alignItems = 'center';
          imgPopup.style.display = 'none';

          imgPopup.appendChild(bigImage);

          workSection.addEventListener('click', (e) => {
              e.preventDefault();

              let target = e.target;
              if (target && target.classList.contains('preview')) {
                  
                imgPopup.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                const path = target.parentNode.getAttribute('href');
                if(document.body.clientWidth > document.body.clientHeight){
                   bigImage.style.width = '75%';
                bigImage.style.height = '80%';
                } else {
                  bigImage.style.width = '85%';
                bigImage.style.height = '50%';
                }
               
                bigImage.setAttribute('src', path);

              } 
              if (target && target.matches('div.popup')) {
                  
                imgPopup.style.display = 'none';
                document.body.style.overflow = '';

              }
          })
};
images();
