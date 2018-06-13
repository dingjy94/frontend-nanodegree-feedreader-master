/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
/*global allFeeds*/
/*global loadFeed*/
/*eslint-env node */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* 
         * loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url defined and not empty', () => {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            }
        });
   
        /* 
         * Loops through each feed in the allFeeds object 
         * and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name defined and not empty', () => {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            }
        });
    });


    /* This test is about the menu bar*/
    describe('The menu', () => {
        /* 
         * Ensures the menu element is
         * hidden by default. 
         */
        it('hidden by default', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* 
         * Ensures the menu changes
         * visibility when the menu icon is clicked. 
         */
        it('changes when clicked', () => {
            const menuIcon = $('.menu-icon-link');
            menuIcon.trigger('click');

            expect($('body').hasClass('menu-hidden')).toBe(false);
            
            menuIcon.trigger('click');

            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Test about loudFeed */
    describe('Initial Entries', () => {
        /* 
         * Ensures when the loadFeed function is called and completes its work, 
         * there is at least a single .entry element within the .feed container.
         */
        beforeEach(done => {
            loadFeed(0, () => {
                done();
            });
        });

        it('at least a single entry in .feed container', () => {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
        

    /* Test new feed can be added */
    describe('New Feed Selection', () => {
        /* 
         * Ensures when a new feed is loaded by the loadFeed function 
         * that the content actually changes.
         */
        let beforeHTML = null;
        let newHTML = null;

        beforeEach(done => {
            loadFeed(0, () => {
                beforeHTML = $('.feed').find('h2')[0].innerHTML;
                loadFeed(1, () => {
                    newHTML = $('.feed').find('h2')[0].innerHTML;
                    done();
                });
            });
        });

        it('feed content changes', done => {
            expect(newHTML).not.toBe(beforeHTML);
            done();
        });
    });
}());
