module.exports = `
<!DOCTYPE html>
<html>
  <head>
    <title>Secret Santa</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      #template-holder {
        display: none;
      }
      body {
        background: linen;
        margin: 0;
        font-family: monospace;
      }

      header {
        background: crimson;
        color: cornsilk;
        padding: 10px;
      }
      #title {
        font-size: 30px;
        margin: 0;
        text-align: center;
      }

      main {
        padding: 20px;
        color: #006d6a;
      }

      #subtitle {
        margin: 0;
        font-size: 18px;
        margin-bottom: 20px;
      }

      #users-list {
        list-style: none;
        padding: 0;
        text-align: center;
      }
      .users-item:not(:last-of-type) {
        padding-bottom: 25px;
      }
      .users-item input {
        padding: 3px 5px;
        font-size: 16px;
        border-radius: 3px;
        border: 1px solid #006d6a;
        width: 230px;
      }
      .users-item input:first-of-type {
        margin-bottom: 5px;
      }

      #add-button {
        border-radius: 50%;
        font-size: 200%;
        margin: 0 auto 20px;
        cursor: pointer;
        display: block;
        border: none;
        outline: none;
        background: #006d6a;
        color: cornsilk;
        height: 1.1em;
        width: 1.1em;
        line-height: 1.1em;
      }

      #submit-button {
        font-size: 150%;
        border-radius: 4px;
        padding: 5px 15px;
        display: block;
        text-align: center;
        margin: auto;
        cursor: pointer;
        border: 1px solid #006d6a;
        color: cornsilk;
        background: crimson;
      }

      #textarea {
        width: 100%;
        padding: 5px;
        border-radius: 3px;
        box-sizing: border-box;
        margin-bottom: 20px;
        border: 1px solid #006d6a;
      }

      @media only screen and (min-width: 486px) {
        .users-item input:first-of-type {
          margin-right: 10px;
        }
      }
      @media only screen and (min-width: 700px) {
        main {
          max-width: 60em;
          text-align: center;
          margin: auto;
        }
      }
    </style>
  </head>

  <body>
    <!-- This is used for rendering a template strings -->
    <div id="template-holder">
      <li class="users-item">
        <input required type="text" placeholder="name" name="name" autocomplete="off" />
        <input required type="email" placeholder="email" name="email" autocomplete="off" />
      </li>
    </div>

    <header>
      <h1 id="title">Secret Santa</h1>
    </header>

    <main>
      <h2 id="subtitle">Organize a Secret Santa by adding Santa friends bellow:</h2>

      <form id="form">
        <ul id="users-list">
          <!-- This is where user items will be inserted -->
        </ul>

        <button id="add-button" title="Add Santa friend">+</button>

        <textarea
          id="textarea"
          rows="3"
          placeholder="Optional message to your Santa friends (instructions, budget, etc)"
          name="customMessage"
        ></textarea>
        <input id="submit-button" type="submit" value="Send" />
      </form>
    </main>

    <script>
      const form = document.querySelector('#form');
      const addButton = document.querySelector('#add-button');
      const usersList = document.querySelector('#users-list');
      const templateHolder = document.querySelector('#template-holder');
      
      // Set event listeners
      form.addEventListener('submit', handleSubmit);
      addButton.addEventListener('click', addUser);
      
      const userTemplate = templateHolder.firstElementChild;
      
      // Add 2 user input forms at the beggining:
      addUser();
      addUser();

      function addUser(event) {
        event && event.preventDefault();
        usersList.appendChild(userTemplate.cloneNode(true));
      }

      function handleSubmit(event) {
        let hasError = false;
        const formData = {
          people: [],
          customMessage: '',
        };
        let n; // length

        event && event.preventDefault();

        [...form.elements].forEach(elem => {
          n = formData.people.length;

          if (elem.name === 'name') {
            formData.people.push({ name: elem.value });
            return;
          }
          if (elem.name === 'email') {
            formData.people[n - 1].email = elem.value;
            return;
          }
          if (elem.name === 'customMessage') {
            formData.customMessage = elem.value;
          }
        });
        // Also pass the current URL of the webpage
        formData.url = window.location.href;

        function emptyForm() {
          [...form.elements].forEach(elem => {
            if (['name', 'email', 'customMessage'].includes(elem.name)) {
              elem.value = '';
            }
          })
        }


        fetch(window.location.href + '/form', { method: 'POST', body: JSON.stringify(formData) })
          .then(function(response) {
            if (!response.ok) {
              hasError = true;
            }
            return response.json();
          })
          .then(function(myJson) {
            if (hasError) {
              throw Error(myJson.message);
            }
            alert('Secret Santa emails have been sent succesfully!');
            emptyForm();
            console.log(myJson);
          })
          .catch(err => {
            alert('There was a small problem. Emails not sent.')
            console.error('Error:', err);
          });
      }
    </script>
  </body>
</html>
`;
