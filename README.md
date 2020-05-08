# Gallery

NodeJS Gallery built on Express.  
Feed it a directory of photos, get back a JSON object.

-   No database needed
-   Strictly no frills
-   Folders titles => Album titles
-   Image titles => Photo Titles

## Installation

1. clone this repository
2. copy development.env to .env
3. configure .env
4. npm install
5. npm run start

## Docker

docker run -p 1000:80 -v /var/my/folder:/var/lib/gallery

## Usage

Gallery can be used in an existing node.js application.

### Request

`http://YOUR_URL/?path=PATH_WITHIN_FOLDER`

_(if path is unset, it returns the configured root dir)_

### Response

#### Album Pages

    /:albumName/
    /:albumName/:subalbum
    /:albumName/:subalbum/:anothersubalbum

#### Image Files

    /:albumName/:subAlbum/:photoname.(png|jpg|tif|jpeg|gif)
