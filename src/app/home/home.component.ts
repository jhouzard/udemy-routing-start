import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    authenticated: boolean = false;

    constructor(private router: Router, private authService: AuthService) {
    }

    onLoadServers() {
        this.router.navigate(['/servers'])
    }

    onLoadServer(id: Number) {
        this.router.navigate(
            ['/servers', id, 'edit'],
            {
                queryParams: {allowEdit: '1'},
                fragment: 'loading'
            },
        )
    }


    ngOnInit(): void {

        this.authService.isAuthenticated().then((authenticated: boolean) => {
            console.log("is authenticated? " + authenticated);
            this.authenticated = authenticated;
        });

        this.authService.statusChanged.subscribe((authenticated: boolean) => {
            this.authenticated = authenticated;
        });

    }

    onLogin() {
        this.authService.login();
    }

    onLogout() {
        this.authService.logout();
    }

}
