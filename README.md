# myCSVConvertor
myCSVConvertor converts csv file to json data. After calling the API we get JSON data. We need to send link of the remote csv file with the end point of the GET API. We can use this application in use cases where we have our CSV file on cloud storage say amazone or rackspace's my cloud and we want to use data in our application in the json format.

Steps to setup the code base locally: 
    1. Download codebase or clone the code base //Gett code base locally
    2. cd project_folder  // move into the project folder
    3. npm install        //install project dependencies from npm
    4. npm start          // start your application
    5. make GET call through browser or postmate : localhost:PORT/convert/csv/to/json?q=link_of_csv_file
example: https://csvtojsonapp.herokuapp.com/convert/csv/to/json?q=https://s3.amazonaws.com/ed-college-choice-public/Most+Recent+Cohorts+(Scorecard+Elements).csv

Example of the csv file: https://s3.amazonaws.com/ed-college-choice-public/Most+Recent+Cohorts+(Scorecard+Elements).csv. 
End Point(heroku URL): https://csvtojsonapp.herokuapp.com/convert/csv/to/json?q=link_of_csv_file
