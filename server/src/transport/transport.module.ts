import { Module } from "@nestjs/common";
import { TransportModuleBase } from "./base/transport.module.base";
import { TransportService } from "./transport.service";
import { TransportController } from "./transport.controller";
import { TransportResolver } from "./transport.resolver";

@Module({
  imports: [TransportModuleBase],
  controllers: [TransportController],
  providers: [TransportService, TransportResolver],
  exports: [TransportService],
})
export class TransportModule {}
