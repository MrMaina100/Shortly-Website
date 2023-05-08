const linkform = document.getElementById('link-form');
const input = document.getElementById('link-input');
const errorSms = document.getElementById('smsErr');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');


linkform.addEventListener('submit', formSubmit);

function formSubmit(e) {
   e.preventDefault()

   if(input.value === ''){
      errorSms.innerHTML = 'please enter something'
   }

}

function navToggle (){
   btn.classList.toggle('open');
   menu.classList.toggle('flex');
   menu.classList.toggle('hidden');
}


btn.addEventListener('click', navToggle);