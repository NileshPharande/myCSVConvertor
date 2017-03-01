# myCSVConvertor
myCSVConvertor converts csv file to json data. After calling the API we get JSON data. We need to send link of the remote csv file with the end point of the GET API. We can use this application in use cases where we have our CSV file on cloud storage say amazone or rackspace's my cloud and we want to use data in our application in the json format.<br><br>

Steps to setup the code base locally: <br>
    1. Download codebase or clone the code base //Gett code base locally<br>
    2. cd project_folder  // move into the project folder<br>
    3. npm install        //install project dependencies from npm<br>
    4. npm start          // start your application<br>
    5. make GET call through browser or postmate : localhost:PORT/convert/csv/to/json?q=link_of_csv_file<br>
example: https://csvtojsonapp.herokuapp.com/convert/csv/to/json?q=https://s3.amazonaws.com/ed-college-choice-public/Most+Recent+Cohorts+(Scorecard+Elements).csv <br><br>

Example of the csv file: https://s3.amazonaws.com/ed-college-choice-public/Most+Recent+Cohorts+(Scorecard+Elements).csv. <br>
End Point(heroku URL): https://csvtojsonapp.herokuapp.com/convert/csv/to/json?q=link_of_csv_file
