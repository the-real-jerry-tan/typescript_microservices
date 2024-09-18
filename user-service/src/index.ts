/**
 * © 2024 Jerry Tan. All Rights Reserved.
 *
 * This software is the confidential and proprietary information of Jerry Tan
 * ("Confidential Information"). You shall not disclose such Confidential Information
 * and shall use it only in accordance with the terms under which this software
 * was distributed or otherwise published, and solely for the prior express purposes
 * explicitly communicated and agreed upon, and only for those specific permissible purposes.
 *
 * This software is provided "AS IS," without a warranty of any kind. All express or implied
 * conditions, representations, and warranties, including any implied warranty of merchantability,
 * fitness for a particular purpose, or non-infringement, are disclaimed, except to the extent
 * that such disclaimers are held to be legally invalid.
 */

import express from 'express';
import bodyParser from 'body-parser';
import { Kafka } from 'kafkajs';

const app = express();
app.use(bodyParser.json());

// Kafka producer setup
const kafka = new Kafka({ brokers: ['localhost:9092'] });
const producer = kafka.producer();

const startKafka = async () => {
  await producer.connect();
};

startKafka().then(() => {
  console.log('Kafka connected for User Service');
});

// User registration endpoint
app.post('/users', async (req, res) => {
  const { username, email } = req.body;
  // Send user registration event to Kafka
  await producer.send({
    topic: 'user-registration',
    messages: [{ value: JSON.stringify({ username, email }) }],
  });
  res.send({ message: 'User registered successfully' });
});

app.listen(3001, () => {
  console.log('User service running on port 3001');
});
