# Client Gateway README

## Overview
The Client Gateway serves as an interface for interacting with various microservices, streamlining the process of communication and data exchange.

## Getting Started

### Prerequisites
- Docker installed on your machine
- Node.js and npm installed
- Access to the microservices that the gateway will interact with

### Development Setup

1. **Clone the Repository**
  - Obtain the project by cloning the repository to your local machine.
    ```
    git clone <repository-url>
    ```

2. **Install Dependencies**
  - Navigate to the project directory and install the necessary dependencies.
    ```
    cd client-gateway
    npm install
    ```

3. **Environment Configuration**
  - Create a `.env` file in the root of the project directory. Use the `.env.template` as a reference for the required environment variables.

4. **Run the NATS Server**
  - Start a NATS server instance using Docker. This will be used for message passing between microservices.
    ```
    docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
    ```

5. **Start Required Microservices**
  - Ensure that all microservices the gateway will interact with are running. This step may vary depending on the microservices you're using.

6. **Launch the Gateway**
  - Start the Client Gateway in development mode.
    ```
    npm run start:dev
    ```

### Running in Production

To deploy the Client Gateway in a production environment, build the Docker image using the provided Dockerfile.

```
docker build -f dockerfile.prod -t client-gateway .
```

## Additional Information

### NATS Server

The NATS server is a simple, high-performance messaging system for microservices, IoT devices, and cloud native systems. If you need to run a NATS server instance, you can use the following Docker command:
```
docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
```

For more information on NATS, visit [the NATS official documentation](https://docs.nats.io/).

## Support

For support, please open an issue in the GitHub repository or contact the project maintainers directly.
