const Feeds = document.querySelector('.Feeds');

const fetchPosts = async ()=>{
    const posts = await fetch('./database/feeds.json');
    const parsedPosts = await posts.json();
    return parsedPosts;
}

const displayPosts = async ()=>{
    const posts = await fetchPosts();
    if(posts.totalResults!==0){
        Feeds.classList.remove('d-none');
        Array.from(posts.feeds).forEach(post => {

            const newPost = document.createElement('div');
            newPost.classList.add('post');

            const postUser = document.createElement('div');
            postUser.classList.add('postUser');
            postUser.innerText = post.userName;

            const profilePicture = document.createElement('div');
            profilePicture.classList.add('profilePicture');
            profilePicture.classList.add('FeedProfilePicture');

            const userProfile = document.createElement('img');
            userProfile.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAcQBipWyY0qIXJvbIEOnGmkvcXJBKA-3Yg&usqp=CAU";

            const check = document.createElement('img');
            check.classList.add('check');
            check.src = "./images/check 1admin.png";

            profilePicture.append(userProfile);
            profilePicture.append(check);

            postUser.append(profilePicture);

            const newPostImage = document.createElement('div');
            newPostImage.classList.add('postImage');

            const coreImage = document.createElement('img');
            coreImage.src=`${post.postImage}`;

            newPostImage.append(coreImage);

            const postFooter = document.createElement('div');
            postFooter.classList.add('postFooter');

            const likeAndShare = document.createElement('div');
            likeAndShare.classList.add('LikeAndShare');

            const Like = document.createElement('img');
            Like.src = './images/heart.png';

            const Share = document.createElement('img');
            Share.src = './images/paper-plane.png';

            likeAndShare.append(Like);
            likeAndShare.append(Share);

            const postDescription = document.createElement('div');
            postDescription.classList.add('description');
            postDescription.innerText = post.description.slice(0, 100)+'...';

            postFooter.append(likeAndShare);
            postFooter.append(postDescription);

            newPost.append(postUser);
            newPost.append(newPostImage);
            newPost.append(postFooter);

            Feeds.append(newPost);
        })
    }
}

displayPosts();