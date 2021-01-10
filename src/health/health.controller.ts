import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, DNSHealthIndicator } from '@nestjs/terminus';


@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private dns: DNSHealthIndicator,
  ) {}

  @Get()
  check() {
    return this.health.check([
      () => this.dns.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }
}