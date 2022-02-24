import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TransportService } from "./transport.service";
import { TransportControllerBase } from "./base/transport.controller.base";

@swagger.ApiTags("transports")
@common.Controller("transports")
export class TransportController extends TransportControllerBase {
  constructor(
    protected readonly service: TransportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
