const btnControl = document.querySelector('.tabs__control-btn');

btnControl.disabled = true;

const tabsBtn = document.querySelectorAll('.tabs__nav-btn');

const tabsBlock = document.querySelectorAll('.tabs__block');

tabsBtn.forEach(function(item) {
   
    item.addEventListener('click', function() {

        let currentBtn = item;

        let tabId = currentBtn.getAttribute('data-tab');

        let currentTab = document.querySelector(tabId);

        tabsBlock.forEach(function(item){
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');

        let tabsBtnActive = document.querySelectorAll('.active');

        if (tabsBtn.length == tabsBtnActive.length-1){
            btnControl.disabled = false;
        }
    });
    
});

document.querySelector('.tabs__nav-btn').click();

