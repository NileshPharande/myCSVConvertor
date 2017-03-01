# myCSVConvertor
this is an api for converting data given in .csv file to json object.

Hit API from heroku: Develop an API “https://csvtojsonapp.herokuapp.com/convert/csv/to/json?q=link_of_csv_file”
For running locally if nodeJS env is already setup:
    1. Download codebase.
    2. cd project_folder
    3. npm install
    4. node server.js
    5. Hit this url from browser: localhost:PORT/convert/csv/to/json?q=link_of_csv_file
example: ?q=https://s3.amazonaws.com/ed-college-choice-public/Most+Recent+Cohorts+(Scorecard+Elements).csv