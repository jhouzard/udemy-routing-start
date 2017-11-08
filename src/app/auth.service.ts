import {EventEmitter} from "@angular/core";

export class AuthService {
    loggedIn = false;

    statusChanged = new EventEmitter<boolean>();

    login() {
        this.loggedIn = true;
        this.statusChanged.emit(this.loggedIn);
    }

    logout() {
        this.loggedIn = false;
        this.statusChanged.emit(this.loggedIn);
    }

    isAuthenticated(): Promise<boolean> {
        const promise = new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
                console.log('timeout expired');
                resolve(this.loggedIn)
            }, 800)
        });
        return promise;
    }
}