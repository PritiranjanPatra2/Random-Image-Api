
# Random Image API

This project is a Node.js API that serves random images from a third-party service. The API fetches a random image and returns the image URL in JSON format.

## Features

- Fetches a random image from a third-party API (e.g., Unsplash or Picsum).
- Serves the image URL as JSON data.
- Simple and lightweight API for random image generation.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/PritiranjanPatra2/Random-Image-Api.git
   cd Random-Image-Api
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the server**:

   ```bash
   npm start
   ```

   The server will start running on `http://127.0.0.1:6969`.

## API Endpoints

### GET /api/image/random

Fetches a random image URL.

#### Request

```bash
GET /api/image/random
```

#### Response

- **200 OK**

```json
"https://fastly.picsum.photos/id/290/200/200.jpg?hmac=-TTlqENxUe4ZacR5I1zAWsw9xtd-MOFEPRWogmAIKsw"
```

## License

This project is licensed under the MIT License.
