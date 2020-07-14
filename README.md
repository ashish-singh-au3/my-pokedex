My approach to build this App:

I have created RESTful API's using db.json data where all the requests can be performed like POST,GET,PUT,DELETE etc. Then I have used Fetch along with axios to get the data in order to display in UI.

Created separate database and API to store the information for new Pokemons.

Steps to run the project :

1. Run npm install to download all the dependencies along with node modules.

2. Run npm install json-server in the terminal.(check package.json if it's not there then run this step else skip step 2.)

3. Run json-server public/db.json --port 5000 to initiate API request.
   You will get respected API's :

http://localhost:5000/newPokemon (All the details for new Pokemon is stored in this API , you can check this API after submitting the details).
http://localhost:5000/pokemon (In this API whole data of db.json is stored .)

4. In Main.js file I have set API limit to display 100 pokemons in UI, you can enter your desired number to check http://localhost:5000/pokemon/?_limit=100 ex.(API/?\_limit="number of pokemons you want to display")

I have converted whole db.json data into API for fetching displaying the data like Name,Type, attack and defense level in the Home page.

5. You can perform all the API operations using Postman or Insomnia.

6. For Search I have used Pokemon web API(https://pokeapi.co/api/v2/pokemon?limit=100 as it contains complete data of pokemons) to fetch and to display all the details along with the images to make application look good.

7. In search option , you can search for any pokemon and you will get the desired card result and on further clicking you can get more details about Pokemon.

8. Routing details can be found in App.js .

9. Screenshots are attached for reference.
