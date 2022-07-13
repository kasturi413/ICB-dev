const enrolledEventsHead = document.querySelector('.enrolledEventsHead');
const attendedEventsHead = document.querySelector('.attendedEventsHead');
const enrollments = document.querySelector('.enrollments');
const attendedEvents = document.querySelector('.attendedEvents');

enrolledEventsHead.addEventListener('click', e=>{
    attendedEvents.classList.add('d-none');
    enrollments.classList.remove('d-none');
    enrollments.classList.add('d-block');
    attendedEventsHead.classList.remove('active');
    enrolledEventsHead.classList.add('active');
})

attendedEventsHead.addEventListener('click', e=>{
    enrollments.classList.add('d-none');
    attendedEvents.classList.remove('d-none');
    attendedEvents.classList.add('d-block');
    enrolledEventsHead.classList.remove('active');
    attendedEventsHead.classList.add('active');
})