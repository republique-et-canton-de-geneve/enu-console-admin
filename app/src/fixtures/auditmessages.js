export default [
    {
        "_id": {
            "idPrestation": "changementAdresse",
            "correlationId": "0740ce85-4a8b-4f17-a5ad-e177874b261d"
        },
        "_class": "ch.ge.ael.enu.mediation.auditsssss.AuditMessage",
        "date": {"$date": "2023-06-21T07:03:16.564Z"},
        "headers": {
            "amqp_correlationId": "0740ce85-4a8b-4f17-a5ad-e177874b261d",
            "amqp_receivedRoutingKey": "changementAdresse",
            "amqp_timestamp": {"$date": "2023-06-21T09:03:17.000Z"},
            "contentType": "application/demarche-deposee-v1.1+json",
            "hashcode": "changementAdresse_9199110a",
            "sequence": null,
            "total": null
        },
        "idDemarcheSiMetier": "6d836347-fd5e-4178-b5dc-92f159067760",
        "identifiant": "CHATTIF",
        "isHandled": true,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:03:17.000Z"},
                "stepEnum": "FIN_TRAITEMENT",
                "isException": false
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:03:17.000Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DemarcheDeposee"
    },
    {
        "_id": {
            "idPrestation": "OCSIN.DEMANDEPC",
            "correlationId": "7ce643c2-ee1e-411b-a1f7-0f46d8bd7a7c"
        },
        "_class": "ch.ge.ael.enu.mediation.auditsssss.AuditMessage",
        "date": {"$date": "2023-06-21T07:54:53.718Z"},
        "headers": {
            "amqp_correlationId": "7ce643c2-ee1e-411b-a1f7-0f46d8bd7a7c",
            "amqp_receivedRoutingKey": "OCSIN.DEMANDEPC",
            "amqp_timestamp": {"$date": "2023-06-21T09:54:54.000Z"},
            "contentType": "application/demarche-deposee-v1.1+json",
            "hashcode": "OCSIN.DEMANDEPC_2b0693b6"
        },
        "idDemarcheSiMetier": "56c17eaf-9ff8-4c6e-9738-c7ee4752a23a",
        "identifiant": "MATHEGUI",
        "isHandled": true,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:54:55.000Z"},
                "stepEnum": "FIN_TRAITEMENT",
                "isException": false
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:54:54.000Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DemarcheDeposee"
    },
    {
        "_id": {
            "idPrestation": "OCSIN.DECORATIONBUREAU",
            "correlationId": "098958f2-9e7c-4243-8789-cda28ed6fd26"
        },
        "_class": "ch.ge.ael.enu.mediation.auditsssss.AuditMessage",
        "date": {"$date": "2023-06-21T08:18:21.945Z"},
        "headers": {
            "amqp_correlationId": "098958f2-9e7c-4243-8789-cda28ed6fd26",
            "amqp_receivedRoutingKey": "OCSIN.DECORATIONBUREAU",
            "amqp_timestamp": {"$date": "2023-06-21T10:19:02.000Z"},
            "contentType": "application/demarche-deposee-v1.1+json",
            "hashcode": "OCSIN.DECORATIONBUREAU_a7e5328e"
        },
        "idDemarcheSiMetier": "66ee98a5-a830-41fe-b19f-8b597cbdaa74",
        "identifiant": "MATHEGUI",
        "isHandled": true,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T10:19:02.000Z"},
                "stepEnum": "FIN_TRAITEMENT",
                "isException": false
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T10:19:02.000Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DemarcheDeposee"
    },
    {
        "_id": {
            "idPrestation": "OCSIN.BUDGETPROJET",
            "correlationId": "6182b17b-3c6e-4370-ad84-675d66a3a1f7"
        },
        "_class": "ch.ge.ael.enu.mediation.auditsssss.AuditMessage",
        "date": {"$date": "2023-06-21T08:43:34.788Z"},
        "headers": {
            "amqp_correlationId": "6182b17b-3c6e-4370-ad84-675d66a3a1f7",
            "amqp_receivedRoutingKey": "OCSIN.BUDGETPROJET",
            "amqp_timestamp": {"$date": "2023-06-21T10:43:36.000Z"},
            "contentType": "application/demarche-deposee-v1.1+json",
            "hashcode": "OCSIN.BUDGETPROJET_513e808"
        },
        "idDemarcheSiMetier": "0d346f86-7642-42b5-b1f3-3e43f2521f4a",
        "identifiant": "MATHEGUI",
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T10:43:35.000Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DemarcheDeposee"
    },
    {
        "_id": {
            "idPrestation": "OCSIN.BUDGETPROJET",
            "correlationId": "f0fc911c-2c28-4d49-a8e2-89b390ee2c24"
        },
        "_class": "ch.ge.ael.enu.mediation.auditsssss.AuditMessage",
        "date": {"$date": "2023-06-21T08:43:36.090Z"},
        "headers": {
            "amqp_correlationId": "f0fc911c-2c28-4d49-a8e2-89b390ee2c24",
            "amqp_receivedRoutingKey": "OCSIN.BUDGETPROJET",
            "amqp_timestamp": {"$date": "2023-06-21T10:43:41.000Z"},
            "contentType": "application/demarche-en-traitement-v1.1+json",
            "delivery-attempts": 0,
            "exception-code": "A01",
            "exception-message": "Démarche introuvable: \"OCSIN.BUDGETPROJET_0d346f86-7642-42b5-b1f3-3e43f2521f4a\"",
            "exception-replay": "F_30_s"
        },
        "idDemarcheSiMetier": "0d346f86-7642-42b5-b1f3-3e43f2521f4a",
        "identifiant": "MATHEGUI",
        "isHandled": false,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T12:28:46.000Z"},
                "stepEnum": "RETRY_EXTERNAL",
                "detailException": "Démarche introuvable: \"OCSIN.BUDGETPROJET_0d346f86-7642-42b5-b1f3-3e43f2521f4a\"",
                "isException": true
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T10:43:41.000Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DemarcheEnTraitement"
    },
    {
        "_id": {
            "idPrestation": "OCSIN.BUDGETPROJET",
            "correlationId": "9365e594-f6ab-48d5-9b4c-b80bd259c833"
        },
        "_class": "ch.ge.ael.enu.mediation.audit.AuditMessage",
        "date": {"$date": "2023-06-21T09:27:51.952Z"},
        "headers": {
            "amqp_correlationId": "9365e594-f6ab-48d5-9b4c-b80bd259c833",
            "amqp_receivedRoutingKey": "OCSIN.BUDGETPROJET",
            "amqp_timestamp": {"$date": "2023-06-21T11:27:54.000Z"},
            "contentType": "application/demarche-deposee-v1.1+json",
            "dossier_correlation_id": "OCSIN.BUDGETPROJET_62bbbf65-1eb9-41c6-99fa-19c8bf7804bc",
            "hashcode": "OCSIN.BUDGETPROJET_2e7e893c"
        },
        "idDemarcheSiMetier": "62bbbf65-1eb9-41c6-99fa-19c8bf7804bc",
        "identifiant": "MATHEGUI",
        "isHandled": true,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:27:55.179Z"},
                "stepEnum": "FIN_TRAITEMENT",
                "isException": false
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:27:54.340Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DemarcheDeposee"
    },
    {
        "_id": {
            "idPrestation": "changementAdresse",
            "correlationId": "0146c1cf-9265-43fe-8be2-47b72b490ad7"
        },
        "_class": "ch.ge.ael.enu.mediation.audit.AuditMessage",
        "date": {"$date": "2023-06-21T09:34:52.362Z"},
        "headers": {
            "amqp_correlationId": "0146c1cf-9265-43fe-8be2-47b72b490ad7",
            "amqp_receivedRoutingKey": "changementAdresse",
            "amqp_timestamp": {"$date": "2023-06-21T11:34:53.000Z"},
            "contentType": "application/demarche-deposee-v1.1+json",
            "dossier_correlation_id": "changementAdresse_3d70440f-1209-4c5e-a00c-8b2b40a4ccf5",
            "hashcode": "changementAdresse_e29a6d49"
        },
        "idDemarcheSiMetier": "3d70440f-1209-4c5e-a00c-8b2b40a4ccf5",
        "identifiant": "MATHEGUI",
        "isHandled": true,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:34:53.344Z"},
                "stepEnum": "FIN_TRAITEMENT",
                "isException": false
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:34:53.226Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DemarcheDeposee"
    },
    {
        "_id": {
            "idPrestation": "changementAdresse",
            "correlationId": "1e2b7d42-39bd-4d50-9103-d995dd460701"
        },
        "_class": "ch.ge.ael.enu.mediation.audit.AuditMessage",
        "date": {"$date": "2023-06-21T09:34:53.231Z"},
        "headers": {
            "amqp_correlationId": "1e2b7d42-39bd-4d50-9103-d995dd460701",
            "amqp_receivedRoutingKey": "changementAdresse",
            "amqp_timestamp": {"$date": "2023-06-21T11:36:05.000Z"},
            "contentType": "application/demarche-en-traitement-v1.1+json",
            "delivery-attempts": 0,
            "exception-code": "A01",
            "exception-message": "Démarche introuvable: \"changementAdresse_3d70440f-1209-4c5e-a00c-8b2b40a4ccf5\"",
            "exception-replay": "F_30_s"
        },
        "idDemarcheSiMetier": "3d70440f-1209-4c5e-a00c-8b2b40a4ccf5",
        "identifiant": "MATHEGUI",
        "isHandled": false,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:36:05.203Z"},
                "stepEnum": "RETRY_EXTERNAL",
                "detailException": "Démarche introuvable: \"changementAdresse_3d70440f-1209-4c5e-a00c-8b2b40a4ccf5\"",
                "isException": true
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:36:05.077Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DemarcheEnTraitement"
    },
    {
        "_id": {
            "idPrestation": "changementAdresse",
            "correlationId": "a8bba39d-0efe-4f8a-80e1-69ef0aad24ed"
        },
        "_class": "ch.ge.ael.enu.mediation.audit.AuditMessage",
        "date": {"$date": "2023-06-21T11:37:50.998Z"},
        "headers": {
            "amqp_correlationId": "a8bba39d-0efe-4f8a-80e1-69ef0aad24ed",
            "amqp_receivedRoutingKey": "changementAdresse",
            "amqp_timestamp": {"$date": "2023-06-21T11:37:51.000Z"},
            "contentType": "application/courrier-v1.1+json",
            "delivery-attempts": 0,
            "exception-code": "A01",
            "exception-message": "Démarche introuvable: \"changementAdresse_3d70440f-1209-4c5e-a00c-8b2b40a4ccf5\"",
            "exception-replay": "F_30_s"
        },
        "idDemarcheSiMetier": "3d70440f-1209-4c5e-a00c-8b2b40a4ccf5",
        "identifiant": "MATHEGUI",
        "isHandled": false,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:37:51.145Z"},
                "stepEnum": "RETRY_EXTERNAL",
                "detailException": "Démarche introuvable: \"changementAdresse_3d70440f-1209-4c5e-a00c-8b2b40a4ccf5\"",
                "isException": true
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:37:51.029Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "Courrier"
    },
    {
        "_id": {
            "idPrestation": "OCSIN.BUDGETPROJET",
            "correlationId": "e0d08ab7-12fa-4b48-bd0d-5c5f86899146"
        },
        "_class": "ch.ge.ael.enu.mediation.audit.AuditMessage",
        "date": {"$date": "2023-06-21T09:49:24.235Z"},
        "headers": {
            "amqp_correlationId": "e0d08ab7-12fa-4b48-bd0d-5c5f86899146",
            "amqp_receivedRoutingKey": "OCSIN.BUDGETPROJET",
            "amqp_timestamp": {"$date": "2023-06-21T11:49:25.000Z"},
            "contentType": "application/demarche-deposee-v1.1+json",
            "dossier_correlation_id": "OCSIN.BUDGETPROJET_61a2db9d-d1ba-4026-b8a3-0f983ee49609",
            "hashcode": "OCSIN.BUDGETPROJET_273f4322"
        },
        "idDemarcheSiMetier": "61a2db9d-d1ba-4026-b8a3-0f983ee49609",
        "identifiant": "MATHEGUI",
        "isHandled": true,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:49:25.743Z"},
                "stepEnum": "FIN_TRAITEMENT",
                "isException": false
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:49:25.605Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DemarcheDeposee"
    },
    {
        "_id": {
            "idPrestation": "OCSIN.BUDGETPROJET",
            "correlationId": "e46a9660-d6fb-44eb-a6d8-8bb28de6441f"
        },
        "_class": "ch.ge.ael.enu.mediation.audit.AuditMessage",
        "date": {"$date": "2023-06-21T09:49:25.606Z"},
        "headers": {
            "amqp_correlationId": "e46a9660-d6fb-44eb-a6d8-8bb28de6441f",
            "amqp_receivedRoutingKey": "OCSIN.BUDGETPROJET",
            "amqp_timestamp": {"$date": "2023-06-21T11:49:27.000Z"},
            "contentType": "application/demarche-en-traitement-v1.1+json",
            "delivery-attempts": 0,
            "exception-code": "A01",
            "exception-message": "Démarche introuvable: \"OCSIN.BUDGETPROJET_61a2db9d-d1ba-4026-b8a3-0f983ee49609\"",
            "exception-replay": "F_30_s"
        },
        "idDemarcheSiMetier": "61a2db9d-d1ba-4026-b8a3-0f983ee49609",
        "identifiant": "MATHEGUI",
        "isHandled": false,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:49:35.670Z"},
                "stepEnum": "RETRY_EXTERNAL",
                "detailException": "Démarche introuvable: \"OCSIN.BUDGETPROJET_61a2db9d-d1ba-4026-b8a3-0f983ee49609\"",
                "isException": true
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:49:27.716Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DemarcheEnTraitement"
    },
    {
        "_id": {
            "idPrestation": "OCSIN.BUDGETPROJET",
            "correlationId": "1c1b5aa5-86c2-477e-8ed6-b6b8b2a05fc5"
        },
        "_class": "ch.ge.ael.enu.mediation.audit.AuditMessage",
        "date": {"$date": "2023-06-21T11:49:28.370Z"},
        "headers": {
            "amqp_correlationId": "1c1b5aa5-86c2-477e-8ed6-b6b8b2a05fc5",
            "amqp_receivedRoutingKey": "OCSIN.BUDGETPROJET",
            "amqp_timestamp": {"$date": "2023-06-21T11:49:28.000Z"},
            "contentType": "application/demarche-terminee-v1.1+json",
            "delivery-attempts": 0,
            "exception-code": "A01",
            "exception-message": "Démarche introuvable: \"OCSIN.BUDGETPROJET_61a2db9d-d1ba-4026-b8a3-0f983ee49609\"",
            "exception-replay": "F_30_s"
        },
        "idDemarcheSiMetier": "61a2db9d-d1ba-4026-b8a3-0f983ee49609",
        "identifiant": "MATHEGUI",
        "isHandled": false,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:49:45.665Z"},
                "stepEnum": "RETRY_EXTERNAL",
                "detailException": "Démarche introuvable: \"OCSIN.BUDGETPROJET_61a2db9d-d1ba-4026-b8a3-0f983ee49609\"",
                "isException": true
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:49:28.393Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DemarcheTerminee"
    },
    {
        "_id": {
            "idPrestation": "OCSIN.DEMANDEPC",
            "correlationId": "9e99a6b7-efd1-4a7b-ba6a-dea318131270"
        },
        "_class": "ch.ge.ael.enu.mediation.audit.AuditMessage",
        "date": {"$date": "2023-06-21T09:49:32.976Z"},
        "headers": {
            "amqp_correlationId": "9e99a6b7-efd1-4a7b-ba6a-dea318131270",
            "amqp_receivedRoutingKey": "OCSIN.DEMANDEPC",
            "amqp_timestamp": {"$date": "2023-06-21T11:49:35.000Z"},
            "contentType": "application/demarche-deposee-v1.1+json",
            "dossier_correlation_id": "OCSIN.DEMANDEPC_e6722049-271c-4508-8058-2e9d7cc0060d",
            "hashcode": "OCSIN.DEMANDEPC_1a238402"
        },
        "idDemarcheSiMetier": "e6722049-271c-4508-8058-2e9d7cc0060d",
        "identifiant": "MATHEGUI",
        "isHandled": true,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:49:35.545Z"},
                "stepEnum": "FIN_TRAITEMENT",
                "isException": false
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:49:35.468Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DemarcheDeposee"
    },
    {
        "_id": {
            "idPrestation": "OCSIN.DEMANDEPC",
            "correlationId": "60550369-1b2c-42da-9708-f19a70d806dd"
        },
        "_class": "ch.ge.ael.enu.mediation.audit.AuditMessage",
        "date": {"$date": "2023-06-21T11:49:52.241Z"},
        "headers": {
            "amqp_correlationId": "60550369-1b2c-42da-9708-f19a70d806dd",
            "amqp_receivedRoutingKey": "OCSIN.DEMANDEPC",
            "amqp_timestamp": {"$date": "2023-06-21T11:49:52.000Z"},
            "contentType": "application/document-v1.1+json",
            "delivery-attempts": 0,
            "exception-code": "A01",
            "exception-message": "Démarche introuvable: \"OCSIN.DEMANDEPC_e6722049-271c-4508-8058-2e9d7cc0060d\"",
            "exception-replay": "F_30_s"
        },
        "idDemarcheSiMetier": "e6722049-271c-4508-8058-2e9d7cc0060d",
        "identifiant": "MATHEGUI",
        "isHandled": false,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:49:52.364Z"},
                "stepEnum": "RETRY_EXTERNAL",
                "detailException": "Démarche introuvable: \"OCSIN.DEMANDEPC_e6722049-271c-4508-8058-2e9d7cc0060d\"",
                "isException": true
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:49:52.283Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DocumentUsager"
    },
    {
        "_id": {
            "idPrestation": "OCSIN.DEMANDEPC",
            "correlationId": "a7064075-6536-4bb1-8a77-96279553bc14"
        },
        "_class": "ch.ge.ael.enu.mediation.audit.AuditMessage",
        "date": {"$date": "2023-06-21T11:49:59.904Z"},
        "headers": {
            "amqp_correlationId": "a7064075-6536-4bb1-8a77-96279553bc14",
            "amqp_receivedRoutingKey": "OCSIN.DEMANDEPC",
            "amqp_timestamp": {"$date": "2023-06-21T11:49:59.000Z"},
            "contentType": "application/document-v1.1+json",
            "delivery-attempts": 0,
            "exception-code": "A01",
            "exception-message": "Démarche introuvable: \"OCSIN.DEMANDEPC_e6722049-271c-4508-8058-2e9d7cc0060d\"",
            "exception-replay": "F_30_s"
        },
        "idDemarcheSiMetier": "e6722049-271c-4508-8058-2e9d7cc0060d",
        "identifiant": "MATHEGUI",
        "isHandled": false,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:49:59.986Z"},
                "stepEnum": "RETRY_EXTERNAL",
                "detailException": "Démarche introuvable: \"OCSIN.DEMANDEPC_e6722049-271c-4508-8058-2e9d7cc0060d\"",
                "isException": true
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:49:59.910Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DocumentUsager"
    },
    {
        "_id": {
            "idPrestation": "OCSIN.DEMANDEPC",
            "correlationId": "24452e05-f545-48be-b5be-13190aac5990"
        },
        "_class": "ch.ge.ael.enu.mediation.audit.AuditMessage",
        "date": {"$date": "2023-06-21T11:50:25.931Z"},
        "headers": {
            "amqp_correlationId": "24452e05-f545-48be-b5be-13190aac5990",
            "amqp_receivedRoutingKey": "OCSIN.DEMANDEPC",
            "amqp_timestamp": {"$date": "2023-06-21T11:50:25.000Z"},
            "contentType": "application/courrier-v1.1+json",
            "delivery-attempts": 0,
            "exception-code": "A01",
            "exception-message": "Démarche introuvable: \"OCSIN.DEMANDEPC_e6722049-271c-4508-8058-2e9d7cc0060d\"",
            "exception-replay": "F_30_s"
        },
        "idDemarcheSiMetier": "e6722049-271c-4508-8058-2e9d7cc0060d",
        "identifiant": "MATHEGUI",
        "isHandled": false,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:50:26.011Z"},
                "stepEnum": "RETRY_EXTERNAL",
                "detailException": "Démarche introuvable: \"OCSIN.DEMANDEPC_e6722049-271c-4508-8058-2e9d7cc0060d\"",
                "isException": true
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T09:50:25.942Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "Courrier"
    },
    {
        "_id": {
            "idPrestation": "OCSIN.BUDGETPROJET",
            "correlationId": "f45b42e8-2601-42c2-80f0-a1997cfdb090"
        },
        "_class": "ch.ge.ael.enu.mediation.audit.AuditMessage",
        "date": {"$date": "2023-06-21T10:50:30.684Z"},
        "headers": {
            "amqp_correlationId": "f45b42e8-2601-42c2-80f0-a1997cfdb090",
            "amqp_receivedRoutingKey": "OCSIN.BUDGETPROJET",
            "amqp_timestamp": {"$date": "2023-06-21T12:50:32.000Z"},
            "contentType": "application/demarche-deposee-v1.1+json",
            "dossier_correlation_id": "OCSIN.BUDGETPROJET_f3f4e509-587e-439f-897d-ce0f754162f5",
            "hashcode": "OCSIN.BUDGETPROJET_3929f33"
        },
        "idDemarcheSiMetier": "f3f4e509-587e-439f-897d-ce0f754162f5",
        "identifiant": "MATHEGUI",
        "isHandled": true,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T10:50:33.057Z"},
                "stepEnum": "FIN_TRAITEMENT",
                "isException": false
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T10:50:32.175Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DemarcheDeposee"
    },
    {
        "_id": {
            "idPrestation": "OCSIN.BUDGETPROJET",
            "correlationId": "231b8aff-c367-4e06-b6d2-96f9181c9f84"
        },
        "_class": "ch.ge.ael.enu.mediation.audit.AuditMessage",
        "date": {"$date": "2023-06-21T10:50:32.065Z"},
        "headers": {
            "amqp_correlationId": "231b8aff-c367-4e06-b6d2-96f9181c9f84",
            "amqp_receivedRoutingKey": "OCSIN.BUDGETPROJET",
            "amqp_timestamp": {"$date": "2023-06-21T12:50:33.000Z"},
            "contentType": "application/demarche-en-traitement-v1.1+json",
            "delivery-attempts": 0,
            "exception-code": "A01",
            "exception-message": "Démarche introuvable: \"OCSIN.BUDGETPROJET_f3f4e509-587e-439f-897d-ce0f754162f5\"",
            "exception-replay": "F_30_s"
        },
        "idDemarcheSiMetier": "f3f4e509-587e-439f-897d-ce0f754162f5",
        "identifiant": "MATHEGUI",
        "isHandled": false,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T10:50:42.327Z"},
                "stepEnum": "RETRY_EXTERNAL",
                "detailException": "Démarche introuvable: \"OCSIN.BUDGETPROJET_f3f4e509-587e-439f-897d-ce0f754162f5\"",
                "isException": true
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T10:50:33.316Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DemarcheEnTraitement"
    },
    {
        "_id": {
            "idPrestation": "OCSIN.BUDGETPROJET",
            "correlationId": "2ad12f63-cc89-4a29-9e4f-ddb1f31b9843"
        },
        "_class": "ch.ge.ael.enu.mediation.audit.AuditMessage",
        "date": {"$date": "2023-06-21T12:50:34.525Z"},
        "headers": {
            "amqp_correlationId": "2ad12f63-cc89-4a29-9e4f-ddb1f31b9843",
            "amqp_receivedRoutingKey": "OCSIN.BUDGETPROJET",
            "amqp_timestamp": {"$date": "2023-06-21T12:50:34.000Z"},
            "contentType": "application/demarche-terminee-v1.1+json",
            "delivery-attempts": 0,
            "exception-code": "A01",
            "exception-message": "Démarche introuvable: \"OCSIN.BUDGETPROJET_f3f4e509-587e-439f-897d-ce0f754162f5\"",
            "exception-replay": "F_30_s"
        },
        "idDemarcheSiMetier": "f3f4e509-587e-439f-897d-ce0f754162f5",
        "identifiant": "MATHEGUI",
        "isHandled": false,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T10:50:52.270Z"},
                "stepEnum": "RETRY_EXTERNAL",
                "detailException": "Démarche introuvable: \"OCSIN.BUDGETPROJET_f3f4e509-587e-439f-897d-ce0f754162f5\"",
                "isException": true
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T10:50:34.548Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DemarcheTerminee"
    },
    {
        "_id": {
            "idPrestation": "OCSIN.BUDGETPROJET",
            "correlationId": "d26c1e1b-3267-4f6d-9a13-e749d2f2f855"
        },
        "_class": "ch.ge.ael.enu.mediation.audit.AuditMessage",
        "date": {"$date": "2023-06-21T12:50:53.358Z"},
        "headers": {
            "amqp_correlationId": "d26c1e1b-3267-4f6d-9a13-e749d2f2f855",
            "amqp_receivedRoutingKey": "OCSIN.BUDGETPROJET",
            "amqp_timestamp": {"$date": "2023-06-21T12:50:53.000Z"},
            "contentType": "application/document-v1.1+json",
            "delivery-attempts": 0,
            "exception-code": "A01",
            "exception-message": "Démarche introuvable: \"OCSIN.BUDGETPROJET_f3f4e509-587e-439f-897d-ce0f754162f5\"",
            "exception-replay": "F_30_s"
        },
        "idDemarcheSiMetier": "f3f4e509-587e-439f-897d-ce0f754162f5",
        "identifiant": "MATHEGUI",
        "isHandled": false,
        "steps": [
            {
                "dateEnregistrement": {"$date": "2023-06-21T10:50:53.488Z"},
                "stepEnum": "RETRY_EXTERNAL",
                "detailException": "Démarche introuvable: \"OCSIN.BUDGETPROJET_f3f4e509-587e-439f-897d-ce0f754162f5\"",
                "isException": true
            },
            {
                "dateEnregistrement": {"$date": "2023-06-21T10:50:53.400Z"},
                "stepEnum": "ARRIVEE_MESSAGE",
                "isException": false
            }
        ],
        "type": "DocumentUsager"
    }
];