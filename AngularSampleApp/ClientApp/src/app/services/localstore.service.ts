import { InjectionToken, Injectable, Inject } from "@angular/core";
import { AccountService } from "./account.service";
import { LoginPayload } from "../model/LoginPayload";

export let LOCAL_STORAGE_TOKEN = new InjectionToken<Storage>("localStorage");

@Injectable()
export class LocalStore {
    constructor(@Inject(LOCAL_STORAGE_TOKEN) private winLocalStorage: Storage,
        private accountService: AccountService) {
    }

    private LoginPayload: string = "LoginPayload";

    getLoginPayload(): LoginPayload {
        return JSON.parse(this.winLocalStorage.getItem(this.LoginPayload)) as LoginPayload;
    }

    setLoginPayload(value: LoginPayload) {
        this.winLocalStorage.setItem(this.LoginPayload, JSON.stringify(value));
    }

    removePayload() {
        this.winLocalStorage.removeItem(this.LoginPayload);
    }
}

