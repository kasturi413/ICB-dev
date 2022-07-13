const containerAnnouncements = document.querySelector('.announcements');
const announces = document.querySelector('.announces');

const fetchAnnouncements = async ()=>{
    const announcements = await fetch('./database/Announcements.json');
    const parsedAnnouncements = await announcements.json();
    return parsedAnnouncements;
}

const displayAnnouncements = async ()=>{
    const announcements = await fetchAnnouncements();
    if(announcements.totalResults!==0){
        containerAnnouncements.classList.remove('d-none');
        containerAnnouncements.classList.add('d-block');
        Array.from(announcements.announcementList).forEach(announcingThat => {
            const a = document.createElement('li');
            a.append(announcingThat);
            announces.append(a);
        })
    }
}

displayAnnouncements();