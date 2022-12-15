-- Verify projet-02-tournoi-e-sport-back:3.add_winner_tournament on pg

BEGIN;

SELECT winner FROM tournament;

ROLLBACK;
