const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const blogPosts = document.querySelector('#blog-content').value.trim();

    if (title && blogPosts) {
        const response = await fetch(`/api/Blogs`, {
            method: 'POST',
            body: JSON.stringify({ title, blogPosts }),
            header: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create Blog Post')
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/projects/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete post');
        }
    }
};

document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);

// document
//     .querySelector('.post-list')
//     .addEventListener('click', delButtonHandler);    