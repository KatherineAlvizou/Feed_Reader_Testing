# Project Overview

In this project I was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where I come in.


# Development Strategy
  
  * Using *Jasmine* to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

### Issues to be addressed:
 
1. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty
    
2. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty
    
3. Write a new test suite named `"The menu"`
    * Write a test that ensures the menu element is hidden by default
    * Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display itself when clicked, and does it hide when clicked again?
    
4. Write a test suite named `"Initial Entries"`
    *  Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container
    * the `loadFeed()` function in `app.js` is asynchronous.

5. Write a test suite named `"New Feed Selection"`
    * Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes
    

**Additional Remarks:**

 * No test should be dependent on the results of another
 * Callbacks should be used to ensure that feeds are loaded before they are tested
 * Error handling should be implemented for undefined variables and out-of-bound array access
 * When complete, all of my tests should pass

**RESOURCES**

* Jasmine Cheatsheet: https://devhints.io/jasmine

* Jasmine Asynchronous work: https://jasmine.github.io/tutorials/async

                                      ***

###Project Implementation

*This project was created by **Aikaterini Alvizou** for the Google Udacity Nanodegree FEND.*
