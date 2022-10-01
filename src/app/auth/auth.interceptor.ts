import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { AuthGuardGuard } from "./auth-guard.guard";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private authGuard: AuthGuardGuard){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.authGuard.authToken != null){
            const modifiedReq = req.clone({
                headers: req.headers.append('x-auth-token', this.authGuard.authToken)
            });
            return next.handle(modifiedReq);
        }else{
            return next.handle(req);
        }
        
        
    }
}