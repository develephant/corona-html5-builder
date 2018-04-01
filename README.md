# Corona HTML5 Builder

___A CLI tool to easily build, watch, and debug your Corona HTML5 projects.___

## Requirements

You will need __[NodeJS](https://nodejs.org/en/download/)__ installed for _macOS_ or _Windows_.

## Installation

```
npm install -g @develphant/corona-html5-builder
```

## Usage

### Setup

 - Create a new base directory for your Corona project and HTML5 output.
 - Using Corona, create a new project and select the base directory as the destination.
 - Create a directory called __html5_output__ (or whatever) in the base directory as well.

The directory tree should end up looking something like:

```
<base_directory>/
  <corona_project>/
    main.lua
    ...
  html5_output/
```

_Do not create the __html5_output__ directory in the <corona_project> directory._

### Initialize

Using a command line tool, navigate to the __<base_directory>/<corona_project>__ directory and run:

```
corona-html5 init --app <corona_app_name> --html full/path/to/<base_directory>/html5_output
```

### Build

### Watch/Debug

## CLI

The commands need to be run in the project folder using a terminal shell.

_CLI name_

```
corona-html5
```

## Commands

### init

Initialize the `package.lua` configuration file.

```
corona-html5 init --app <corona_app_name> --html </dest/to/html5/output_dir>
```

### build

Generate an HTML5 build of your project.

```
corona-html5 build
```

### watch

Start a live browser session of your HTML5 build.

```
corona-html5 watch
```

### debug

Start a live browser session of your HTML5 debug build.

```
corona-html5 debug
```
___

&copy;2018 C. Byerley ([develephant](https://develephant.com))