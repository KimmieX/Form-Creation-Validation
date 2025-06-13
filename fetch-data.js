async function fetchUser Data() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Define the API URL
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl); // Fetch data from the API
        const users = await response.json(); // Convert the response to JSON

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a list to display user names
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text content to the user's name
            userList.appendChild(listItem); // Append the list item to the user list
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Clear the existing content and show an error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Invoke fetchUser Data on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUser Data);
