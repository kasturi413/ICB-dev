const contactTeam = document.querySelector('.contactTeam');

const fetchCoreTeamMembers = async ()=>{
    const data = await fetch('./database/coreTeam.json');
    const parsedData = await data.json();
    return parsedData;
}

const coreTeamPopulate = async ()=>{
    const coreTeamData = await fetchCoreTeamMembers();
    const totalMembers = coreTeamData.totalResults;
    const coreTeamMembers = coreTeamData.coreTeamMembers;
    for(let i=0; i<totalMembers; i++){
        let coreTeamMember = document.createElement('div');
        let profilePictureCTM = document.createElement('div');
        let profilePicture = document.createElement('div');
        let profilePic = document.createElement('img');
        let checkPic = document.createElement('img');
        let contactDetailsCTM = document.createElement('div');
        let nameCTM = document.createElement('div');
        let positionCTM = document.createElement('div');
        let socialMediaHandles = document.createElement('div');
        let telegram = document.createElement('a');
        let instagram = document.createElement('a');

        profilePic.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAcQBipWyY0qIXJvbIEOnGmkvcXJBKA-3Yg&usqp=CAU";
        nameCTM.append(coreTeamMembers[i].Name);
        positionCTM.append(coreTeamMembers[i].Position);
        telegram.append('Telegram');
        instagram.append('Instagram');
        telegram.href=coreTeamMembers[i].Telegram;
        instagram.href=coreTeamMembers[i].Instagram;
        instagram.target=telegram.target='_blank';

        coreTeamMember.classList.add('coreTeamMember');
        profilePictureCTM.classList.add('profilePictureCTM');
        profilePicture.classList.add('profilePicture');
        checkPic.classList.add('check');
        contactDetailsCTM.classList.add('contactDetailsCTM');
        nameCTM.classList.add('nameCTM');
        positionCTM.classList.add('positionCTM');
        socialMediaHandles.classList.add('socialMediaHandles');
        telegram.classList.add('telegram');
        instagram.classList.add('instagram');

        checkPic.src="./images/check 1admin.png";

        profilePicture.appendChild(profilePic);
        profilePicture.appendChild(checkPic);
        profilePictureCTM.appendChild(profilePicture);
        coreTeamMember.appendChild(profilePictureCTM);
        contactDetailsCTM.appendChild(nameCTM);
        contactDetailsCTM.appendChild(positionCTM);
        socialMediaHandles.appendChild(telegram);
        socialMediaHandles.appendChild(instagram);
        contactDetailsCTM.appendChild(socialMediaHandles);
        coreTeamMember.appendChild(contactDetailsCTM);
        contactTeam.appendChild(coreTeamMember);
    }
}

coreTeamPopulate();