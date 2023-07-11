export const MIRAGE_HOST = "http://localhost:8086";
export const API_NAMESPACE = "enu-console-admin/api"
export const API_PATH=
    (window.location.origin === "http://localhost:1234" ? MIRAGE_HOST : window.location.origin)
    + "/" + API_NAMESPACE;
