//Unsplash API
const count = 10;
const apiKey = 'AVmKdyUZ4RW6QkWgHaLwodfZx03d0bDMbCzvrXuKzGk';
const apiUrl = `https://api.unsplash.com/photos/random/?
client_id=${apiKey}&count=${count}`;

//Get Photos fron Unsplash API

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    //Catch Error Here
  }
}

//On load
getPhotos();