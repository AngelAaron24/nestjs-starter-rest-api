/*import { Injectable, OnModuleInit, Inject, Logger } from '@nestjs/common';
import { ClientKafka, EventPattern, Payload } from '@nestjs/microservices';
import { AppLogger } from 'src/shared/logger/logger.service';
import { RequestContext } from 'src/shared/request-context/request-context.dto';

@Injectable()
export class KafkaConsumerService implements OnModuleInit {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf('article.deleted');
    await this.kafkaClient.connect();
  }

  @EventPattern('article.deleted')
  async handleArticleDeleted(@Payload() message: any) {
    Logger.log(`Received Kafka message: ${JSON.stringify(message.value)}`);
  }
}*/
