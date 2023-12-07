# docker

 docker-compase up -->>
 docker images -->>
 docker ps 
 
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------

# GitHub connection

To add file from pc to github --------->>>>>>
  -git init -->>
  -git add . -->>
  -git commit -m "message" -->>
  -git branch -M main -->>
  -git branch -->>
  -git remote and origin your-github-https-address -->>
  -git push -u origin main -->>

  Enter ur username and password  ------->>>>
  refresh the page and make changes in the html file --->>

  back to vs code -->>
  
  -git pull origin  ---->>

  createing an branch ----->>>
  -git branch name -->>
  -git branch -->>
  to change the branch ---->>>
  -git checkout name -->>

  -git push -u origin -->>
  next copy the command displayed below and paste ---->>

  to delete the branch --->>
  -git chechout main -->>
  -git branch -->>
  -git branch -d sdm -->>
   
  If this not works try this --->>
  github -->> main --->> view all branchs -->> delete -->> refresh
  
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------

# Typescript prg
 npx tsc -v ---->>
 node -v ---->>
 npm insatll typescript -g ---->>

 get-ExecutionPolicy --->>
 set-ExecutionPolicy RemoteSigned --->>

 create one folder -->>
 mkdir typescript --->>.
 cd typescript --->>
 code . ----->>

 create new file as --->>
 app.ts ----->> console.log("hi") -------->>

 in terminal -->>
 tcs app.ts -->>
 node app.js
 
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------

# AWS EC2 and AWS Amplify

 # AWS-EC2
 Goto profile --> Your AWS Concole --> Computer--(EC2) --> Click on Instances --> Lanch Instance --> App name (any) --> select Ubuntu --> Free tier eligible (if selected ignore this step) --> Key pairname (cse) --> Click on allow for all hhtps ... --> Lanuch Instance ----->>

 Wait untill it run --> Click on Connect ---->>

 perform this opration --> pwd --> ls --> mkdir aws --> cd aws --->>>

 # AWS Amplify
 write an html program (index.html) -->> Compress that file html to zip file -->> AWS -->> aws amplify -->> new-app -->> host web-app -->> Deploy without Git provider -->> Connect

 app name (any name) --->> Enviroment (dev) -->> select ur compress file -->> save --->> click on the link output will be displayed
 
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------

# CURD operation in mongosh

Goto terminal -->> mongod -->> another terminal -->> mongosh -->>
-show dbs -->>
-use FSD -->>
-db.FSD.insertMany({id:01, name:"pooajry", age:18},{id:02, name:"arjun", age:20},{id:03, name:"jannu", age:19}) -->>
-db.FSD.find() -->>
-db.student.drop() -->>

Create an user on MongoDB ---->>>>>
-db.createUser({user:"nithin", pwd:"CS21025", role:[admin]})
-db.getUsers()
-db.dropUser("nithin")
-db.getUsers()
