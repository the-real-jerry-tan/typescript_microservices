# Event-Driven Microservices with TypeScript and Kafka

## Project Description

This project demonstrates a microservices architecture built with Node.js and TypeScript, integrating Kafka for event-driven communication. It includes services for user registration, payments, and more.

## Features

- **Microservices Architecture**: Multiple services (User, Payment, etc.)
- **Kafka Integration**: Asynchronous communication between services using Kafka.
- **Dockerized**: Each service is containerized using Docker, with a Kafka setup.
- **Scalable Design**: Services can be easily scaled and deployed.

## Setup Instructions

### Prerequisites
- **Docker**: Install Docker to run the services.
- **Node.js**: Version 14 or later.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/the-real-jerry-tan/typescript-kafka-microservices.git
   cd typescript-kafka-microservices
   ```

2. Navigate to the Docker directory and start the services:
   ```bash
   cd docker
   docker-compose up
   ```

3. The **User Service** will be available at [http://localhost:3001](http://localhost:3001) and the **Payment Service** at [http://localhost:3002](http://localhost:3002).

4. Kafka will be running on port 9092.

## Future Enhancements

1. **Additional Services**: Inventory, notifications, and analytics services.
2. **Database Integration**: Add PostgreSQL for persistence.
3. **Kubernetes Deployment**: Scale services using Kubernetes.

## Author

This project is maintained by [Jerry Tan](https://github.com/the-real-jerry-tan).

## License

© 2024 Jerry Tan. All Rights Reserved. Unauthorized use or distribution is prohibited.
