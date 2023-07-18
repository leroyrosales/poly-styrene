*The below dev environment is set up for Mac.*

My Current OS:

* macOS Catalina 10.15.7

My Current Hardware:

* iMac Retina 5k Late 2014
* MB Air Retina 13-inch 2018

## Chrome Extensions

- Bitwarden
- Wappalyzer
- Full Page Screen Capture
- Better OneTab
- Marinara: Pomodoro Assistant

## Xcode

- You have two options for installing xcode.  The full package or just the command line tools but at a minimum the command line tools are required.
- Install just the xcode command line tools with:
- `xcode-select --install` -or-
- Go to the app store and download the full package.  The full package is great for if you do any sort of mobile development.

## Bash-it
- Git: [https://github.com/Bash-it/bash-it](https://github.com/Bash-it/bash-it)

## Homebrew
- Download and install Homebrew: [https://brew.sh/](https://brew.sh/)

## Manual Download Applications

- Google Chrome (https://www.google.com/intl/en/chrome/browser/)
- Firefox (https://www.mozilla.org/en-US/firefox/new/)
- Slack (App store)
- Discord (App store)

## Pre Install Configuration

- Setup SSH Key
- Setup SSH Key on GitHub
- Setup SSH Key on Digital Ocean

## iTerm2

- Download iTerm2 [https://iterm2.com/downloads/stable/iTerm2-2_1_4.zip](https://iterm2.com/downloads/stable/iTerm2-2_1_4.zip)
- Move the unarchived app to your Applications/Utilities directory
- Open the app
- Open preferences
- Uncheck confirm "closing multiple sessions"
- Uncheck confirm "Quit iTerm2 (Cmd+Q)"

## ZSH

- Install Oh My Zsh [https://ohmyz.sh/](https://ohmyz.sh/)
- Install Cobalt2 theme for iTerm2 [https://github.com/wesbos/Cobalt2-iterm](https://github.com/wesbos/Cobalt2-iterm) (download the whole folder to not run into issues with installation)
- Screw the Powerline font, use Hack! [https://sourcefoundry.org/hack/](https://sourcefoundry.org/hack/)

## Nano
- Take 5 minutes to learn the nano text editor and save yourself the hassle of learning VIM
- Fine, I'll learn VIM in 2021

## VIM
- Learn how to get out of vim use the following:
- `:q`
- To close and save use:
- `:wq`

## Visual Studio Code

[https://code.visualstudio.com/](https://code.visualstudio.com/)

Set up shell command: [https://code.visualstudio.com/docs/setup/mac](https://code.visualstudio.com/docs/setup/mac)

## VS Code Extensions

* Bracket Pair Colorizer 2
* indent-rainbow
* Live Sass Compiler
* Javascript ES6 code snippets
* Live Server
* Prettier - Code Formatter
* stylelint
* Twig
* VS Color Picker
* vscode-icons
* GitLens
* markdownlint
* stylelint


## VS Code Settings

The settings are configured via 'Settings' and are maintained via JSON.
To override, just click on the pencil icon next to the code-to-be-overwritten and select 'Replace in settings'. This adds a line to the custom settings JSON on the right.

**Settings**

```
	"window.zoomLevel": 1,
	"explorer.confirmDragAndDrop": false,
	"python.pythonPath": "python3",
	"editor.fontSize": 14,
	"editor.tabSize": 4,
	"editor.wordWrap": "on",
	"terminal.integrated.fontSize": 16,
	"workbench.colorTheme": "Yoncé",
	"workbench.iconTheme": "vscode-icons",
	"vsicons.projectDetection.autoReload": true,
	"workbench.startupEditor": "newUntitledFile",
	"liveServer.settings.donotShowInfoMsg": true,
	"liveServer.settings.donotVerifyTags": true,
	"vsicons.dontShowNewVersionMessage": true,
	"liveSassCompile.settings.generateMap": false,
```

## Lando Installation

Spin up containers via the command line without having to mess with MAMP, Vagrant, and so forth. (Don't forget to install Docker beforehand!)

[https://docs.devwithlando.io/installation/macos.html](https://docs.devwithlando.io/installation/macos.html)

## Node Version Manager

- Repo: [https://github.com/creationix/nvm](https://github.com/creationix/nvm)
- `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash`
- `npm install gulp -g`
- `npm install grunt -g`

## Ruby Version Manager

- Site: [https://rvm.io/](https://rvm.io/)
- `\curl -sSL https://get.rvm.io | bash -s stable`

## Tips & Cheatsheets & Cool Docs

* Gist of Generators: [https://gist.github.com/leroyrosales/0d74b3adf2c0ff3af041c7c9f8cd7c70](https://gist.github.com/leroyrosales/0d74b3adf2c0ff3af041c7c9f8cd7c70)
* Markdown Cheatsheet: [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* SSH Cheatsheet: [https://gist.github.com/bradtraversy/f03df587f2323b50beb4250520089a9e](https://gist.github.com/bradtraversy/f03df587f2323b50beb4250520089a9e)
* Awesome Self Hosted tools: [https://github.com/awesome-selfhosted/awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted)
* Full-stack web dev notes: [https://github.com/8483/notes](https://github.com/8483/notes)
* Awesome Design Tools: [https://github.com/LisaDziuba/Awesome-Design-Tools](https://github.com/LisaDziuba/Awesome-Design-Tools)
* Women Made It: [https://github.com/LisaDziuba/Women-Made-It](https://github.com/LisaDziuba/Women-Made-It)
* Awesome Stacks: [https://github.com/stackshareio/awesome-stacks](https://github.com/stackshareio/awesome-stacks)
* Front-end Dev Handbook for 2019: [https://frontendmasters.com/books/front-end-handbook/2019/](https://frontendmasters.com/books/front-end-handbook/2019/) -- *SUPER AWESOME*
* The Documentation Compendium: [https://github.com/kylelobo/The-Documentation-Compendium/](https://github.com/kylelobo/The-Documentation-Compendium/)
* Free Technology Books: [https://github.com/arpitjindal97/technology_books](https://github.com/arpitjindal97/technology_books)
* Computer Science Illustrated: [http://csillustrated.berkeley.edu](http://csillustrated.berkeley.edu)
* Crontab Guru: [https://crontab.guru/](https://crontab.guru/)
* Learn X in Y minutes: [https://learnxinyminutes.com](https://learnxinyminutes.com)
* Web Development in 2020 (Udemy courses list): [https://github.com/andrews1022/web-development-2020-course-list](https://github.com/andrews1022/web-development-2020-course-list)
* A list of places in Austin that hire developers [https://codementorship.github.io/austin-tech-list/](https://codementorship.github.io/austin-tech-list/)
* Figma Crash Course: [https://www.figmacrashcourse.com/](https://www.figmacrashcourse.com/)
* Curated list of design resources for devs: [https://github.com/bradtraversy/design-resources-for-developers](https://github.com/bradtraversy/design-resources-for-developers)
* 2021 Web Development Coures List - [https://github.com/andrews1022/web-development-2021-course-list](https://github.com/andrews1022/web-development-2021-course-list)
* 70+ Job Websites for Devs - [https://medium.com/@traversymedia/70-job-find-websites-for-developers-other-tech-professionals-34cdb45518be](https://medium.com/@traversymedia/70-job-find-websites-for-developers-other-tech-professionals-34cdb45518be)
* 1,600 Free Coursera courses: [https://www.freecodecamp.org/news/coursera-free-online-courses-6d84cdb30da/](https://www.freecodecamp.org/news/coursera-free-online-courses-6d84cdb30da/)
* Server Admin for Programmers - [https://serversforhackers.com/](https://serversforhackers.com/)
* Software Engineering at Google (free book): [https://abseil.io/resources/swe-book](https://abseil.io/resources/swe-book)
* FuturePedia - AI Tools directory [https://www.futurepedia.io/](https://www.futurepedia.io/)

### PHP
* PHP The Right Way: [https://phptherightway.com/](https://phptherightway.com/)

### Resources
* Theme Wagon templates: [https://themewagon.com/](https://themewagon.com/)
* Create Tim templates: [https://www.creative-tim.com/](https://www.creative-tim.com/)
* HTML 5Up templates: [https://html5up.net/](https://html5up.net/)
* Kaggle Datasets: [https://www.kaggle.com/datasets](https://www.kaggle.com/datasets)

### Accessibility

* Stark Accessibility Tips for Devs: [https://www.getstark.co/library/collections/accessibility-tips,-tricks,-and-resources-for-developers/](https://www.getstark.co/library/collections/accessibility-tips,-tricks,-and-resources-for-developers/)

### WordPress

* Database optimization WP-CLI commands: [https://www.liquidweb.com/kb/8-wp-cli-commands-to-clean-up-and-optimize-your-site/](https://www.liquidweb.com/kb/8-wp-cli-commands-to-clean-up-and-optimize-your-site/)
* Useful WordPress snippets: [https://github.com/dalenguyen/wordpress-snippets](https://github.com/dalenguyen/wordpress-snippets)

### Helpful Documentation

* DigitalOcean Optimization [https://www.digitalocean.com/community/questions/how-to-optimize-the-server-for-getting-high-traffic-even-in-5-droplet-plan](https://www.digitalocean.com/community/questions/how-to-optimize-the-server-for-getting-high-traffic-even-in-5-droplet-plan)

### Performance Tools

* HTML Analyzer [https://www.debugbear.com/html-size-analyzer](https://www.debugbear.com/html-size-analyzer)
* WebPageTest [https://www.webpagetest.org/](https://www.webpagetest.org/)
* Yellow Lab Tools [https://yellowlab.tools/](https://yellowlab.tools/)

### Job Boards

* Hired.com [https://hired.com/](https://hired.com/)