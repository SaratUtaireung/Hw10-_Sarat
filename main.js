// fetch('https://jsonplaceholder.typicode.com/')
// .then(resp => {
//     console.log(resp)
//     return resp.json
// }).then( data => {
//     console.log(data)
//     console.log(typeof data)
//     console.log(data[0])
//     console.log(data[0].name)
// })

// const userList = document.querySelector('.user-list')

// function makeElement(tag, attr_n, attr_v, content) {
//     let output = document.createElement(tag);
//     (!!attr_n) && output.setAttribute(attr_n, attr_v);
//     output.textContent = content;
//     return output;
// }

// let li = makeElement()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(resp =>  resp.json())
// .then( data => {
//     for (let el of data) {
//     const li = makeElement('li', '', '', `${el.name} / ${el.email}`)
//     userList.append(li)
//     }
// })
// ของอาจารย์สอน


document.addEventListener('DOMContentLoaded', () => {
    const userList = document.querySelector('.user-list');
    const postInfo = document.querySelector('.post-info');



    // ดูดจาก https://jsonplaceholder.typicode.com/users
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.name} - ${user.email}`;
                li.addEventListener('click', () => displayUserPosts(user.id));
                userList.appendChild(li);
                // console.log(li)
            });
        })
        .catch(error => console.error('Error:', error));

    function displayUserPosts(userId) {


        // ลบเปลี่ยน
        postInfo.innerHTML = '';



        // ดูดโพส
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(posts => {
                posts.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('post');
                    postElement.innerHTML = ` 
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    `;
                    postInfo.appendChild(postElement);
                });
            })
            .catch(error => console.error('Error fetching posts:', error));
    }
});
