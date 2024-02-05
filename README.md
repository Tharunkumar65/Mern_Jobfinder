# MERN CRUD Jobfinder App
# [Live](https://jobfinder-app-gold.vercel.app/)
### Front-End - React + Redux
### Back-End - Node.js(Express.js) & MongoDB

## Tech Stack

#### Front-end

* The front-end client is built as a simple-page-application using React and Redux (for middlewares and reducers).
* React-Router is used for navigation.
* Redux-Thunk is used for processing asynchronous requests.
* Tailwind CSS is used for page styling.

#### Back-end

* The back-end server is built with Express.js and Node.js in MVC pattern, which provides completed REST APIs for data interaction.
* JSON Web Token (JWT) is used for signing in user and making authenticated requests.

#### Database

* MongoDB is used as the back-end database, which include different data models/schemas (i.e., User, Job).
* Mongoose is used to access the MongoDB for CRUD actions (create, read, update and delete).

## Project Outline

1. Create Job Schema
    Job(string)
    skills(Array)
    User(Object)

2. Create User Schema
    name(string)
    email(string)
    password(string)

3.Signup/login/logout User

4.filter the jobs by jobTitle,location,Salary,employmentType,Work experience

5.view jobs without login

6.view your jobs with login

7.post Your jobs with login

8.Update and Delete yours jobs with login

## Set-Up Project in your machine

1. Fork the repo and clone it.
2. Create a new branch.
3. Make sure you have `npm` Node.js installed in your system. MongoAtlas is used, so no need for local MongoDB setup.
4. MongoAtlas Setup
https://www.youtube.com/watch?v=7CqJlxBYj-M&feature=youtu.be&t=293
Set up your .env file and paste in the URI that you get from following the instructions in the video above. Also set token secret to anything, it is used for jwt authentication.

```
MONGO_ATLAS_KEY=mongodb+srv://<dbUser>:<password>@cluster0-m5jph.gcp.mongodb.net/test?retryWrites=true&w=majority
TOKEN_SECRET=your secret key
```
You need to remember to paste in the <dbUser> and <password>. Do NOT share it publicly, and do NOT include the .env file in commits.

5. [Only once] Run (from the root) `npm install` and `cd client && npm install`.
7. Open two terminal windows (one for running Server and other for the client).
8. To run server, from root folder run `npm run server` and to run client, go to client directory and run `npm run dev`.
9. Go to `http://localhost:5000` to see the application running.

## Deploying to vercel[]()

Vercel is a platform for developers that provides the tools, workflows, and infrastructure you need to build and deploy your web apps faster, without the need for additional configuration.

1. To deploy your application to vercel, you must have a vercel account.
2. Go to [their page](https://vercel.com/login) to create an account.Then go through their documention on how to create a vercel app. Also check out the [documentation](https://vercel.com/docs/cli) on vercel CLI.

### Create a vercel App
First, login to vercel:

```
 vercel login
```
This will redirect you to a URL in the browser where you can log in. Once you're finished you can continue in the terminal.

Navigate to your project's directory in the terminal and run the following command to create a new Vercel project:

```
    vercel init
```

### Creating vercel.json file
  create vercel.json file in server 

  ```
      {
    "builds": [
      {
        "src": "*.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "/"
      }
    ]
  }
```
If your Vite app is configured to deploy as a Single Page Application (SPA), deep linking won't work out of the box.

To enable deep linking in SPA Vite apps, create a vercel.json file at the root(client) of your project, and add the following code:

```
 {
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
 } 
```


Setting up your GitHub, GitLab, or Bitbucket repository on Vercel is only a matter of clicking the "New Project" button on the top right of your dashboard and following the steps.

After clicking it, you'll be presented with a list of Git repositories that the Git account you've signed up with has write access to.

A list of Git repositories your Git account has access to.

You can also:

    1.Select a third-party Git repository by clicking on Import Third-Party Git Repository on the bottom of the section.

    2.Select one of our pre-built templates from the section on the right.

After you've selected the Git repository or template you want to use for your new project, you'll be taken to a page where you can configure your project before it's deployed.

You can:

      1.Customize the project's name

      2.Select a Framework Preset

      3.Select the root directory of your project

      4.Configure Build Output Settings

      5.Set Environment Variables

### Deploying Your Git Repository
Now that your project is set up, you can deploy it to Vercel by selecting the Deploy button to initiate a deployment or by using the following command:

 ```
    vercel
 ```
Vercel will start building and deploying your project. You can monitor the deployment progress in your terminal.

Once the deployment is complete, Vercel will provide you with a unique URL where your project is live. You can access your deployed project by opening this URL in your web browser.

   
  
