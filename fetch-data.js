async function fetchUser Data() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data using the API URL
        const response = await fetch(apiUrl);
        
        // Convert the response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the user list
        const userList = document.createElement('ul');

        // Loop through the users array and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text content to the user's name
            userList.appendChild(listItem); // Append the <li> to the user list
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
