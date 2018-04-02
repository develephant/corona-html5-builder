# Corona HTML5 Builder

___A CLI tool to easily build, watch, and debug your Corona HTML5 projects.___

## Requirements

You will need __[NodeJS](https://nodejs.org/en/download/)__ installed for _macOS_ or _Windows_.

## Installation

```
npm install -g @develephant/corona-html5-builder
```

The CLI will available globally via command line as `coronahtml5`.

##Usage

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
coronahtml5 init --app <corona_app_name> --html full/path/to/<base_directory>/html5_output
```

This will create a _package.lua_ file in your __<corona_project>__ directory. ___Do not edit this file.___

It's a good idea to add this file to the __excludeFiles__ section, under the `all` key in your _build.settings_ file:

```
...
excludeFiles =
{
  -- Exclude unnecessary files for each platform
  all = { "Icon.png", "Icon-*dpi.png", "Images.xcassets", "package.lua" },
  ...
},
```

### Development

See the command line options below to start working with your project.

## CLI

All commands need to be run using a command line tool pointed at the __<base_directory>/<corona_project>__ directory.

## Commands

### init

Initialize the `package.lua` configuration file. See __[Initialze](#initialize)__ above.

```
coronahtml5 init --app <corona_app_name> --html </dest/to/html5/output_dir>
```

Note: _All arguments are required._

### build

Generate an HTML5 build of your project. The HTML5 files will be output to the __html5_output__ directory. See __[Setup](#setup)__ above.

```
coronahtml5 build
```

__Note for macOS users__: To use the `build` command you must run the "Setup Corona Native.app" found in the `/Applications/Corona-<build>/Native/` directory. You will need to do this for each new Corona build you install (if using dailies).

### watch

Start a live browser session of your HTML5 build. Add the `-d` flag to open a debug session.

```
coronahtml5 watch [-d|--debug] [--proxy <proxy-address>]
```

Note: _The watch process runs in its own shell session._

___

&copy;2018 C. Byerley ([develephant](https://develephant.com))