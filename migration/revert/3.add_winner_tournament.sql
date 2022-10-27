-- Revert projet-02-tournoi-e-sport-back:3.add_winner_tournament from pg

BEGIN;

ALTER TABLE tournament
DROP winner;

COMMIT;
