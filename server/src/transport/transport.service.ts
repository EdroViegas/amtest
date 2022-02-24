import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TransportServiceBase } from "./base/transport.service.base";

@Injectable()
export class TransportService extends TransportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
