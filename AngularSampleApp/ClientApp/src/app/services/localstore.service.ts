import { InjectionToken, Injectable, Inject } from "@angular/core";

export let LOCAL_STORAGE_TOKEN = new InjectionToken<Storage>("localStorage");

@Injectable()
export class LocalStore {
    constructor(@Inject(LOCAL_STORAGE_TOKEN) private winLocalStorage: Storage) {
    }

    private USER_NAME: string = "USER_NAME";

    getLoggedInUserName(): string {
        return this.winLocalStorage.getItem(this.USER_NAME);
    }

    setLoggedInUserName(userName: string) {
        this.winLocalStorage.setItem(this.USER_NAME, userName);
    }
}

