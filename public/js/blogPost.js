const newBlogPost = async (event) => {
    event.preventyDefault();

const title = document.querySelector('#title').value.trim();
const content = document.querySelector('#content').value.trim();

if (title && content) {
    const response = await fetch('api/blogPostRoutes', {
        method: 'POST',
        body: JSON.stringify({title, content}),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (response.ok) {

        document.location.replace('/dashboard');
    } else {
        alert('Failed to create blog post')
    }
 }
};