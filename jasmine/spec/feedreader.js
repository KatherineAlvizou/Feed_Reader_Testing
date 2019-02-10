 /* feedreader.js
  *
  * This is the spec file that Jasmine will read and contains
  * all of the tests that will be run against my application.
  */

 /* placing all of my tests within the $() function,
  * since some of these tests may require DOM elements.Want
  * to ensure they don't run until the DOM is ready.
  */
 $(function() {
    /*  This test suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe("RSS Feeds", function() {
        /* test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it("are defined", function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("URL is defined", function() {
            for (var feed of allFeeds) expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe("");
        });

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("name is defined", function() {
            for (var feed of allFeeds) expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe("");
        });
    });

    /* New test suite named "The menu" */

    describe("The menu", function() {
        /* test that ensures the menu element is
         * hidden by default.
         */
        let menu = document.querySelector("body");
        let menuIcon = document.querySelector(".menu-icon-link");
        it("menu is hidden", function() {
            expect(menu.classList.contains("menu-hidden")).toBe(true);
        });

        /* test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it("changes visibility onclick", function() {
            menuIcon.click();
            expect(menu.classList.contains("menu-hidden")).toBe(false);

            menuIcon.click();
            expect(menu.classList.contains("menu-hidden")).toBe(true);
        });
    });

    /* New test suite named "Initial Entries" */

    /*test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     *  loadFeed() is asynchronous.
     */

    describe("Initial Entries", function() {
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it("contains at least one element", function() {
            let entries = document.querySelector(".feed").querySelectorAll(".entry");

            expect(entries.length).toBeGreaterThan(0);
        });
    });

    /* New test suite named "New Feed Selection" */
    describe("New Feed Selection", function() {
        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         *  loadFeed() is asynchronous.
         */
        beforeEach(function(done) {
            loadFeed(1, function() {
                firtsfeed = document.querySelector(".feed").innerHTML;
                loadFeed(0, function() {
                    secondfeed = document.querySelector(".feed").innerHTML;

                    done();
                });
            });
        });
        it("content changed", function(done) {
            expect(firtsfeed).not.toBe(secondfeed);
            done();
        });
    });
});






