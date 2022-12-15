-- Deploy projet-02-tournoi-e-sport-back:3.add_winner_tournament to pg

BEGIN;

ALTER TABLE tournament
ADD winner text DEFAULT NULL;

COMMIT;
