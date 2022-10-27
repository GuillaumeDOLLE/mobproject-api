-- Revert projet-02-tournoi-e-sport-back:4.modify_update_tournament from pg

BEGIN;

CREATE OR REPLACE FUNCTION update_tournament(json) RETURNS "tournament" AS $$
    UPDATE "tournament" SET
    label=$1->>'label',  
    type=$1->>'type',
    date=($1->>'date')::timestamptz,
    game=$1->>'game',
    format=$1->>'format',
    max_player_count=($1->>'max_player_count')::int,
    description=$1->>'description',
    image=$1->>'image'
    WHERE id=($1->>'id')::int
    RETURNING *;
$$ LANGUAGE SQL STRICT;

COMMIT;
