import { from } from "rxjs";
import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from "@nestjs/common";
import { map } from "rxjs/operators";
import { classToPlain } from "class-transformer";

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(map((data) => classToPlain(data)));
    }
}