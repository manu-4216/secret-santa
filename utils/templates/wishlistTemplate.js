module.exports = `
<!DOCTYPE html>
<html>
  <head>
    <title>Secret Santa</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
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
    <header>
      <h1 id="title">Secret Santa</h1>
    </header>

    <main>
      <h2 id="subtitle">Help your secret Santa with present ideas</h2>

      <form id="form">
        <ul id="users-list">
          <li class="users-item">
            <input type="text" />
          </li>

          <li class="users-item">
            <input type="text" />
          </li>

           <li class="users-item">
            <input type="text" />
          </li>
        </ul>

        <input id="submit-button" type="submit" value="Submit" />
      </form>
    </main>

    <script>
      const form = document.querySelector('#form');
      const usersList = document.querySelector('#users-list');
      
      // Set event listeners
      form.addEventListener('submit', handleSubmit);

      function handleSubmit(event) {
        event && event.preventDefault();

        const formData = {
          wishlist: [],
        };

        [...form.elements].forEach(elem => {
          if (elem.type === 'text') {
            formData.wishlist.push(elem.value );
            return;
          }
        });
        formData.id = window.location.href.split('/').splice(-1,1)[0];
        formData.url = window.location.href.split('/wishlist')[0];

        function emptyForm() {
          [...form.elements].forEach(elem => {
            if (elem.type === 'text') {
              elem.value = '';
            }
          })
        }

        fetch(window.location.href + '/form', { method: 'POST', body: JSON.stringify(formData) })
          .then(function(response) {
            return response.json();
          })
          .then(function(myJson) {
            alert('Your wishlist ideas have been sent to your secret Santa match!');
            emptyForm();
            console.log(myJson);
          })
          .catch(err => {
            alert('There was a small problem. Wishlist not sent.')
            console.error('Error:', err);
          });
      }
    </script>
  </body>
</html>
`;
