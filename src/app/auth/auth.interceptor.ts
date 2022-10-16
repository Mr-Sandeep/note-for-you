import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { AuthGuardGuard } from "./auth-guard.guard";
import {catchError, map} from 'rxjs/operators';
import { throwError } from "rxjs";
import { Router } from "@angular/router";
import { ServicesService } from "../service/services.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private authGuard: AuthGuardGuard, private router: Router, private serv: ServicesService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.authGuard.authToken != null){
            var modifiedReq = req.clone({
                headers: req.headers.append('x-auth-token', this.authGuard.authToken)
            });
            
            modifiedReq = req.clone({
                headers: req.headers.append('Access-Control-Allow-Origin', '*')
            });
            return next.handle(modifiedReq).pipe(
                catchError((error)=>{
                    console.log('error is intercept');
                    console.error(error)
                    if(error.status == 401 && error.statusText == "Unauthorized"){
                        this.router.navigate(['/login']);
                        this.serv.hideSpinner();
                        sessionStorage.setItem('x-auth-token-note', ''); 
                    }else{
                        this.serv.hideSpinner();
                        alert(error.statusText +". "+ "Try after sometime.");
                        window.location.reload();
                    }
                    return throwError(error.message);
                })
            )
        }else{  
            return next.handle(req);
        }
        
        
    }
}