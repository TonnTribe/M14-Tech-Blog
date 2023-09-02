const commentFormHandler = async (event) => {
    event.preventDefault();

    const postId = document.querySelector('#post-id').value.trim();
    const commentBody = document.querySelector('#comment-body').value.trim();

    if (commentBody) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ postId, commentBody }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create comment');
        }
    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);