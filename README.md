# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## How to run
- go to the project directory
- `npm init`
- `npm install --save-dev gulp@next`
- `npm install browser-sync`
- `sudo npm install -g eslint`
- `npm install --save-dev eslint-plugin-jasmine`
- Run `gulp` in terminal
- gulp will run lint to check the syntax error and handle error such as undefined variable, and than run browserSync to open the index.html
- I didn't use gulp-jasmine because it warns that '$' is not defined
- Or you can just open the `index.html` directly and it will show all test result

## Dependency
- Gulp
- gulp-eslint
- browser-sync