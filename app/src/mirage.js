import { createServer } from "miragejs";
import {API_NAMESPACE, MIRAGE_HOST} from "./config";

export function startMirage() {
    console.log("MirageJS : ready.");

    createServer({
        routes() {
            this.urlPrefix = MIRAGE_HOST;
            this.namespace = API_NAMESPACE;
            this.timing = 1000;

            this.passthrough('/hello');
        },
    });}
