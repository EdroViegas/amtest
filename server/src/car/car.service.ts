import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CarServiceBase } from "./base/car.service.base";

@Injectable()
export class CarService extends CarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
