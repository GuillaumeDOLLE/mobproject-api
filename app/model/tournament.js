const client = require("../config/db")

class Tournament {

    constructor(obj) {
        this.id = obj.id;
        this.label = obj.label;
        this.type = obj.type;
        this.date = obj.date;
        this.game = obj.game;
        this.format = obj.format;
        this.moderator = obj.moderator;
        this.user_id = obj.user_id;
    }

     /**
     * Add a new tournament in the database
     * @param {Object} tournamentTemp
     * @returns {Json} tournament
     */
      static async addTournament(tournamentTemp) {
        const result = await client.query(`SELECT * FROM create_tournament ($1)`, [tournamentTemp]);
        const tournament = new Tournament(result.rows[0]);
        return tournament;
    }

    /**
     * Recovery of tournament information via his id
     * @param {Integer} id 
     * @returns {Json} tournament
     */
     static async getTournamentByID(tournamentId) {
        const result = await client.query('SELECT * FROM public."tournament" WHERE tournament.id=$1', [tournamentId]);
        if (result?.rows.length > 0) {
            return new Tournament(result.rows[0]);
        } else {
            // error while recovering
            return;
        }
    }

    /**
     * Recovery list of all tournament
     * @returns {Json} tournament
     */
    static async findAllTournaments() {
        const result = await client.query('SELECT * FROM public."tournament";');
        return result.rows;
    }

    /**
     * Delete tournament with his id
     * @param {Integer} id 
     */
    static async deleteTournament(TournamentId) {
        const result = await client.query('DELETE FROM public."tournament" WHERE id=$1;', [TournamentId]);
        return result;
    }

    /**
     * Recovery of tournament information via his id
     * @param {Json} tournament
     * @returns {Json} tournament
     */
    static async updateTournament(infoTournament) {
        const result = await client.query('SELECT * FROM update_tournament ($1)', [infoTournament]);
        return result;
    }

}

module.exports = Tournament;