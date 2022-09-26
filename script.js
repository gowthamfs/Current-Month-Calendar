const month = document.querySelector('.month h1');
const fullDate = document.querySelector('.month p');
const daysEl = document.querySelector('.days');
const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx +1 ,0 ).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx ,1 ).getDay()-1;

// console.log(firstDay)
const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];

month.innerText = (months[monthInx])
fullDate.innerText = new Date().toDateString();

let days = '';

for (i = firstDay; i>0; i--){
    days += `<div class="empty"></div>`;
}

for (i = 1; i<= lastDay; i++){
    if(i === new Date().getDate()){
    days += `<div class="active">${i}</div>`;
    }else
    days += `<div>${i}</div>`;
}

daysEl.innerHTML = days;












