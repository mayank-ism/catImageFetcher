# Cat Gallery
A web application that displays images of cats. This application is created using [gettyimages API] (http://api.gettyimages.com/). 
Infinite scrolling is implemented using [ngInfiniteScroll] (https://sroze.github.io/ngInfiniteScroll/) directive.

## Application setup:
First, you need to clone this repository using:
```
git clone https://github.com/mayank-ism/catImageFetcher.git
```
on your terminal. Alternatively, you can also download the source code in the zip format and then unzip it.

Then, you can go to the project directory. You will find files like app.js and package.json in it, along with bunch of other files 
and folders. Here, you run the following command:
```
npm install
```
You need to have npm installed beforehand. 
On executing this command, npm will install all the dependencies for you.

Now your application is setup!

## API keys:

In config/config.js.sample file,
you can see that exports.apiKey, exports.newrelic.key and exports.sentryDsn are set to empty string.

You need to replace these with credentials of your account.

Then, rename you config.js.sample file to config.js.

## Starting the application:
Run the command:
```
npm start
```
on your terminal. The application has started.

Visit http://127.0.0.1:8080/ to see the gallery of cats!
