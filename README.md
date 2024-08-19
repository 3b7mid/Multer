# Node.js File Upload API with Multer

This project provides a Node.js Express server with Multer middleware for handling file uploads.

## Installation
1. Clone the repository: `git clone https://github.com/3b7mid/Multer.git`
2. Install dependencies: `npm install `

## Usage
1. Start the server: `npm start`   

2. Send a POST request to the `/user` endpoint with the file as multipart/form-data.

## Configuration
* The default upload directory is `user/`.
* You can customize the storage options in the `multer` configuration.

## Examples
```javascript
// Example request
curl -X POST -F file=@path/to/file http://localhost:3000/user
