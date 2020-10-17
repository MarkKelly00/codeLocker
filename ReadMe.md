# CodeLocker 
![badgeLogo](https://img.shields.io/badge/CodeLocker-Version%201.1-blue?style=plastic&logo=undefined)
## Description

A place to save and share code snippets!

## Table of Contents

 * [Installation](#installation)

 * [Usage](#usage)

 * [License](#license)

 * [Badges](#badges)

## Installation

Dependancies:
1. Open the development folder and beginning by running the command "npm i".  
2. After those installations have ran, cd into the client folder and run the command "npm i". 

Next we need to check the development settings: 
1. In server.js, remove "process.env.MONGODB_URI ||" if it is there. 
2. in routes/api/.index.js comment out lines 7-9 if they are not already. 
3. in components/Auth0/Auth)providerWithHistory.js. set "http://localhost:3000/dashboard" as the redirectUri on line 19. 

To start the application, cd into the Devlop folder and run npm start.

## Usage

#### The Splash Page

<img width="600" alt="CodeLocker Splash" src="https://user-images.githubusercontent.com/62780709/96330951-1dc57b00-100e-11eb-878d-b30a4239894b.png">

When you arrive at the CodeLocker Splash page, there is a code editor for you to try writing and running a code snippet.  Click inside the code editor, write a javascript function and click run to show your result in the output window below the code editor.  To clear the code editor, you can click the reset button.  To save your Code Snippet, click the save button.  If you have an account, your code snippet will be save.  If you do not, you will be prompted to create an account or log in.  To log in or sign up for a free account with CodeLocker, Click the Log In or Sign Up button to be redirect to the Log In or Sign Up page.

#### The Dashboard

<img width="600" alt="CodeLocker Dash" src="https://user-images.githubusercontent.com/62780709/96331144-c1fbf180-100f-11eb-9376-68f512d26570.png">

After loggin in or signing up, you will be directed back to the Dashboard.  The Dashboard is the heart of CodeLocker and where most of the functionality lives.  Let's get familiar with the dashboard.  

##### The Code Editors

<img width="600" alt="CodeLocker Editors" src="https://user-images.githubusercontent.com/62780709/96330945-100ff580-100e-11eb-8024-3698268846d4.png">

In the main window, you will see two code editors side by side.  The left code editor is a read-only editor.  This is where you will view Code Snippets retrieved from your locker and and view public Code Snippets other members have saved in the public locker.  From here you can run the code by clicking the run button below the editor.  You can "like" the current code snippet by clicking the like button.  You can copy the Snippet by clicking the copy button and then paste it into the right editor.  There is also a share button if you would like to email a code snippet to someone.  The right code editor is where Code Snippets can be written, modified and saved to your locker.  This is where you will be creating or pasting in Code Snippets that you want to save.  Code can be written from scratch here or pasted in from another source and tested.  You can also copy and paste Code Snippets from the read-only editor into this code editor to be modified and saved.  At any time, you can click into the title input field and name your Code Snippet.  Once you are happy with the Code Snippet and are ready to save it, it is time to decide whether we want it to be shared with the CodeLocker community or saved privately.  If you would like the Snippet to be private and not viewed or accessed by others, click on the Keep Private toggle switch.  Once this has been decided, click the save button and it will be saved to your locker.  

##### Main CodeLocker Table

<img width="600" alt="CodeLocker Main Table" src="https://user-images.githubusercontent.com/62780709/96331163-eeb00900-100f-11eb-9644-13417d80434e.png">

Below the code editors, is the main codelocker table.  This is an easy and convenient place to retrieve code snippets.  Code Snippets that have been saved will show up here and can be filtered using the filter by toggle at the top right hand of the table.  Click on the filter by toggle and choose to show All Users, My CodeLocker or Favorites.  All Users will populate all public Code Snippets.  My CodeLocker will show all saved Code Snippets of the current user who is logged in.  Favorites will show only Code Snippets that have been favorited by the user. At any time, you can click on the column header titles to organize the table by user, title, date modified, favorites and likes.  

To view a Code Snippet, click on the Title of the Snippet and it will populate in the read-only code editor.

##### The Sidebar

<img width="256" alt="CodeLocker SideBar" src="https://user-images.githubusercontent.com/62780709/96330940-0be3d800-100e-11eb-9cf5-85ed8c42ba32.png">

The sidebar is located on the left side of the screen and is a static window making it easy to access at all times while using the site.  At the top of the side bar is your profile name and image and a quick link to the profile page.  Under your profile image, you can navigate to your personal locker, the about us page and the faq page by clicking the corresponding buttons.  There is also a short list of your favorite Snippets in the sidebar.  This allows you to quickly acces your most used or favorite snippets.

##### Search Field

<img width="407" alt="CodeLocker Search" src="https://user-images.githubusercontent.com/62780709/96330937-08505100-100e-11eb-8c28-0b5295b9889c.png">

At any time, you can type a query into the search field at the top or the page.  This field will search the body of code snippets and show all Snippets that contain that query.  For example, if you wanted to find a code snippet that used "array.length" you would type that in the search and return all Code Snippets with "array.lenght" in the code body.


## License

MIT License Copyright (c) 2020 Beki Gonzalez, Mark Kelley, Joseph Mengis, Josh Blank
            
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.

## Badges

![badgeLogo](https://img.shields.io/badge/CodeLocker-Version%201.1-blue?style=plastic&logo=undefined)

## Contributing


### Contributor Covenant Code of Conduct

#### Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, religion, or sexual identity
and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

#### Our Standards

Examples of behavior that contributes to a positive environment for our
community include:

* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
* Focusing on what is best not just for us as individuals, but for the
  overall community

Examples of unacceptable behavior include:

* The use of sexualized language or imagery, and sexual attention or
  advances of any kind
* Trolling, insulting or derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or email
  address, without their explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

#### Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

Community leaders have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, and will communicate reasons for moderation
decisions when appropriate.

#### Scope

This Code of Conduct applies within all community spaces, and also applies when
an individual is officially representing the community in public spaces.
Examples of representing our community include using an official e-mail address,
posting via an official social media account, or acting as an appointed
representative at an online or offline event.

#### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported to the community leaders responsible for enforcement at
[INSERT CONTACT METHOD].
All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the
reporter of any incident.

#### Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining
the consequences for any action they deem in violation of this Code of Conduct:

##### 1. Correction

**Community Impact**: Use of inappropriate language or other behavior deemed
unprofessional or unwelcome in the community.

**Consequence**: A private, written warning from community leaders, providing
clarity around the nature of the violation and an explanation of why the
behavior was inappropriate. A public apology may be requested.

##### 2. Warning

**Community Impact**: A violation through a single incident or series
of actions.

**Consequence**: A warning with consequences for continued behavior. No
interaction with the people involved, including unsolicited interaction with
those enforcing the Code of Conduct, for a specified period of time. This
includes avoiding interactions in community spaces as well as external channels
like social media. Violating these terms may lead to a temporary or
permanent ban.

##### 3. Temporary Ban

**Community Impact**: A serious violation of community standards, including
sustained inappropriate behavior.

**Consequence**: A temporary ban from any sort of interaction or public
communication with the community for a specified period of time. No public or
private interaction with the people involved, including unsolicited interaction
with those enforcing the Code of Conduct, is allowed during this period.
Violating these terms may lead to a permanent ban.

##### 4. Permanent Ban

**Community Impact**: Demonstrating a pattern of violation of community
standards, including sustained inappropriate behavior,  harassment of an
individual, or aggression toward or disparagement of classes of individuals.

**Consequence**: A permanent ban from any sort of public interaction within
the community.

#### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.0, available at
https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.

Community Impact Guidelines were inspired by [Mozilla's code of conduct
enforcement ladder](https://github.com/mozilla/diversity).

[homepage]: https://www.contributor-covenant.org

For answers to common questions about this code of conduct, see the FAQ at
https://www.contributor-covenant.org/faq. Translations are available at
https://www.contributor-covenant.org/translations.

## Questions

If you have any questions about the repo, please contact us directly!

#####CodeLocker Team

Beki Gonzalez 
rebgon93@gmail.com
Mark Kelley 
kellymark0101@gmail.com 
Joe Mengis 
joe.mengis@gmail.com 
Josh Blank 
Jmnblank@gmail.com 

#####More of our work

Beki Gonzalez 
https://github.com/Beki-G
Mark Kelley 
https://github.com/MarkKelly00
Joe Mengis 
https://github.com/joemengis
Josh Blank 
https://github.com/Jmnblnk54