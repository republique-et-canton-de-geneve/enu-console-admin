SELECT datastore.name,datastore.workflow_status
FROM dashboard.datastore
         JOIN (SELECT resource_id
               FROM (SELECT resource_id, access_type.*
                     FROM dashboard.party_has_resource
                              JOIN dashboard.access_type ON party_has_resource.access_type_id = access_type.id
                              JOIN dashboard.usertable on party_has_resource.party_id = usertable.party_id
                     WHERE usertable.name LIKE 'TSTQA%'
                     UNION
                     SELECT resource_id, access_type.*
                     FROM dashboard.party_relationship
                              JOIN dashboard.party_has_resource
                                   ON party_relationship.role_group_party_id = party_has_resource.party_id
                              JOIN dashboard.access_type ON party_has_resource.access_type_id = access_type.id
                              JOIN dashboard.usertable on party_has_resource.party_id = usertable.party_id
                     WHERE usertable.name LIKE 'TSTQA%') AS file_access
               GROUP BY resource_id) AS file_access
              ON datastore.id = file_access.resource_id
         LEFT JOIN (SELECT min(party_id) AS party_id, resource_id
                    FROM dashboard.party_has_resource
                             JOIN dashboard.party ON party.id = party_has_resource.party_id AND party.type = 'U'
                    WHERE owner = 1
                    GROUP BY resource_id) AS party_owner
                   ON party_owner.resource_id = datastore.id
         LEFT JOIN dashboard.usertable AS owner_user ON owner_user.party_id = party_owner.party_id
         JOIN dashboard.datastore_step
              ON datastore.id = datastore_step.datastore_id AND datastore.current_order = datastore_step.step_order
                  AND datastore.workflow_status = 'CORRECTION'
                  AND ( CAST(datastore_step.lastupdate AS DATE) = '2023-07-17' OR CAST(datastore_step.lastupdate AS DATE) = '2023-07-18' )
         JOIN dashboard.form_version ON form_version.id = datastore_step.form_version_id
         JOIN dashboard.form ON form.id = form_version.form_id
         JOIN dashboard.application ON application.id = datastore.application_id
         LEFT JOIN dashboard.usertable AS last_user ON datastore_step.last_party_id = last_user.party_id
         LEFT JOIN dashboard.file_group ON datastore.group_id = file_group.id
         LEFT JOIN dashboard.datastore_step AS first_step ON first_step.datastore_id = datastore.id
    AND first_step.step_order = 1 AND datastore.current_order > 1;