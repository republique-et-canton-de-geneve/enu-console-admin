import { createServer } from "miragejs";
import {API_NAMESPACE, MIRAGE_HOST} from "./config";
import auditmessages from "./fixtures/auditmessages";

export function startMirage() {
    console.log("MirageJS : ready.");

    createServer({
        routes() {
            this.urlPrefix = MIRAGE_HOST;
            this.namespace = API_NAMESPACE;
            this.timing = 1000;

            this.passthrough('/hello');
            this.passthrough('/systems/list');
            this.passthrough('/systems/check');
            this.passthrough('/rabbit/topology');
            this.get("/audit/messages", () => {return auditmessages;}, {timing: 500});
        },
    });}
