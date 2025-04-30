window.addEventListener('scroll', () => {
    const button = document.querySelector('.back-to-top');
    if (window.scrollY > 200) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

var count = 2;

function validate ()
{
   var user = document.login.username.value;
   var password = document.login.password.value;
   var valid = false;
   var usernameArray = ["admin"]
   var passwordArray = ["4FEiHzqD2iAzGEv!_HG.Gk"]
   for (var i = 0; i < usernameArray.length; i++)

if (user == usernameArray[i])
if (password == passwordArray [i])
{
   valid = true;
   break;
}

if(valid)
{
   alert("Login was successful");
   window.location = "dsjaij983wej9d9823jd8934hrf438923h2df98wehf823rhfwe98fhw98e9f8hsfhdsiofuh9382.html";
   return false ;
}
var again = "tries";
if (count ==1)
{
   again = "try"
}
if(count >= 1)
{
   alert("Wrong password or username")
   count--;
}
}

document.addEventListener('DOMContentLoaded', () => {
   const updateForm = document.getElementById('update-form');
   const updatesList = document.getElementById('updates-list');
   const API_URL = 'http://localhost:3000/api/updates1'; // Replace with your server's URL

   // Load updates from the server
   fetch(API_URL)
       .then((response) => response.json())
       .then((updates) => {
           updates.forEach(addUpdateToDOM);
       })
       .catch((error) => console.error('Error fetching updates:', error));

   // Handle form submission
   updateForm.addEventListener('submit', (e) => {
       e.preventDefault();

       const title = document.getElementById('update-title').value;
       const content = document.getElementById('update-content').value;

       const newUpdate = { title, content };

       // Save the update to the server
       fetch(API_URL, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(newUpdate),
       })
           .then((response) => response.json())
           .then((savedUpdate) => {
               // Add the saved update to the DOM
               addUpdateToDOM(savedUpdate);
               updateForm.reset();
           })
           .catch((error) => console.error('Error saving update:', error));
   });

   // Function to add an update to the DOM
   function addUpdateToDOM(update) {
       const updateElement = document.createElement('div');
       updateElement.classList.add('card');
       updateElement.innerHTML = `
           <h2 class="CardTitle">${update.title}</h2>
           <p class="CardText">${update.content}</p>
           <button class="cardDownload" onclick="window.location.href='https://lauritzgames.itch.io/project-cool'">Download</button>
       `;
       updatesList.appendChild(updateElement);
   }
});