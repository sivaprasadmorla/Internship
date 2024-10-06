const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.querySelector('.navbar');

hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


// --------------------------------------------------------------------------


const monthYearElement =document.getElementById('monthYear');
const datesElement =document.getElementById('dates');
const prevBtnElement =document.getElementById('prevBtn');
const nextBtnElement =document.getElementById('nextBtn');


let currentDate = new Date();

const updateCalendar = () =>{
    const currentYear = currentDate.getFullYear();
    const currentmonth = currentDate.getMonth();

    const firstDay = new Date(currentYear,currentmonth,0);
    const lastDay = new Date(currentYear,currentmonth+1,0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();


    const monthYearString = currentDate.toLocaleString('default',{month:'long', year:'numeric'})
    monthYearElement.textContent = monthYearString;

    let datesHTML = '';
    
    for(let i=firstDayIndex;i>0;i--){
        const prevDate = new Date(currentYear,currentmonth,0,i+1);
        datesHTML+=`<div class="date inactive">${prevDate.getDate()}</div>`
    }

    for(let i=1; i<=totalDays;i++){
        const date = new Date(currentYear,currentmonth,i);
        const activeClass = date.toDateString() === new Date().toDateString ? 'active' : '';
        datesHTML +=`<div class="date ${activeClass}">${i}</div>` 
    }

    for(let i=1; i<=7-lastDayIndex;i++){
        const nextDate = new Date(currentYear,currentmonth+1,i)
        datesHTML+=`<div class="date inactive">${nextDate.getDate()}</div>`
    }

    datesElement.innerHTML = datesHTML;

}
prevBtnElement.addEventListener('click',()=>{
    currentDate.setMonth(currentDate.getMonth()-1)
    updateCalendar();
})
nextBtnElement.addEventListener('click',()=>{
    currentDate.setMonth(currentDate.getMonth()+1)
    updateCalendar();
})
updateCalendar()