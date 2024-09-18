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
import { Kafka } from 'kafkajs';

const app = express();

// Kafka consumer setup
const kafka = new Kafka({ brokers: ['localhost:9092'] });
const consumer = kafka.consumer({ groupId: 'payment-group' });

const startKafka = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'user-registration' });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const userRegistration = JSON.parse(message.value.toString());
      console.log(`Processing payment for user: ${userRegistration.username}`);
      // Process payment logic here
    },
  });
};

startKafka().then(() => {
  console.log('Kafka connected for Payment Service');
});

app.listen(3002, () => {
  console.log('Payment service running on port 3002');
});
