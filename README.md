# myCSVConvertor
myCSVConvertor converts csv file to json data. After calling the API we get JSON data. We need to send link of the remote csv file with the end point of the GET API. We can use this application in use cases where we have our CSV file on cloud storage say amazone or rackspace's my cloud and we want to use data in our application in the json format.\n\n

Steps to setup the code base locally: \n
    1. Download codebase or clone the code base //Gett code base locally\n
    2. cd project_folder  // move into the project folder\n
    3. npm install        //install project dependencies from npm\n
    4. npm start          // start your application\n
    5. make GET call through browser or postmate : localhost:PORT/convert/csv/to/json?q=link_of_csv_file\n
example: https://csvtojsonapp.herokuapp.com/convert/csv/to/json?q=https://s3.amazonaws.com/ed-college-choice-public/Most+Recent+Cohorts+(Scorecard+Elements).csv \n\n

Example of the csv file: https://s3.amazonaws.com/ed-college-choice-public/Most+Recent+Cohorts+(Scorecard+Elements).csv. \n
End Point(heroku URL): https://csvtojsonapp.herokuapp.com/convert/csv/to/json?q=link_of_csv_file
