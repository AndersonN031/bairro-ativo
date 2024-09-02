export const getUser = async () => {
    try {
        const response = await fetch('/api/users');
        if (!response.ok) {
            console.error('Network response was not ok', response.status, response.statusText);
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.user || []
    } catch (error) {
        console.error('Fetch Users Data Error:', error);
        return []; 
    }

}

