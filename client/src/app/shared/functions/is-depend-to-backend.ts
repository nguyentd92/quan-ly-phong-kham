import { environment } from "src/environments/environment";

export function isDependToBackEnd() {
    return (environment.devfs || environment.production)
}