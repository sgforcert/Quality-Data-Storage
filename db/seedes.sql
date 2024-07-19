INSERT INTO machines (id, machine_name, machine_registration_date)
VALUES (201, 'A', 'April 15th, 2008'),
       (202, 'B', 'April 15th, 2008'),
       (203, 'C', 'April 15th, 2008'),
       (204, 'D', 'April 15th, 2008');

INSERT INTO samples (id, sample_name, machine_id)
VALUES (401, 'Visual Sample', 201),
       (402, 'Visual Sample', 202),
       (403, 'Weight Sample', 202),
       (404, 'Visual Sample', 203),
       (405, 'Correct Assembly Sample', 203),
       (406, 'Visual Sample', 204),
       (407, 'Water Leak Sample', 204);