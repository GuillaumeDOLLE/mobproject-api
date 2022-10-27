-- Verify projet-02-tournoi-e-sport-back:4.modify_update_tournament on pg

BEGIN;

SELECT update_tournament('{
    "label": "tournoi de ouf mais on change",
    "type": "privé",
    "date": "30/09/2022",
    "game": "lol",
    "format": "premier elimination",
    "max_player_count": 14,
    "description": "best tournois ever c''est certain",
    "image": "image.com",
    "winner": "bobby",
    "user_id": "1"
}');

ROLLBACK;
