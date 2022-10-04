const debug = require('debug')('CONTROLLER');

const { Tournament } = require('../model');

const tournamentController = {

     // return a list of tournaments from DB 
     async getAllTournaments(req, res) {
        try {
            const tournaments = await Tournament.findAllTournaments();
            return res.json(tournaments);
        } catch (err) {
            console.error(err);
        }
    },

    // add new tournament in DB
    async addTournament(req, res){
        try{
            const newTournament = await Tournament.addTournament({
                label: req.body.label,
                type: req.body.type,
                date: req.body.date,
                game: req.body.game,
                format: req.body.format,
                moderator: req.body.moderator,
                user_id: req.body.user_id,

            });
            res.json(newTournament)
            
        }catch (err) {
            console.error(err);
        }
    },


    // return info of tourrnament by id
  async deleteTournament(req, res){
      try{
        const tournament = await Tournament.deleteTournament(req.params.id);
        return res.json({message: 'le tournois à bien été supprimé'})

      }catch(err) {
        console.error(err);
    }
  },

    // return one tournament from DB 
    async getTournament(req, res) {
        try {
            const tournament = await Tournament.getTournamentByID(req.params.id);
            return res.json(tournament);
        } catch (err) {
            console.error(err);
        }
    },

    async patchTournament(req, res) {
       
        try{
            const editedTournament = await Tournament.updateTournament(req.body)
            return res.json(editedTournament)
        }catch(err){
                console.error(err);
        }
    },

    async postUserToTournament(req, res){
        const tournamentId = req.params.id; // extract tournament ID from params
        const userId = req.body.user_id; // extract user ID from body

        try{
            // Get all users ID from one tournament via his ID
            const userTournamentList = await Tournament.getUsers(tournamentId); 
            // Check if the userID is in the list of all users ID in the tournament ID
            const existingUserInTournament = userTournamentList.find(({user_id}) => user_id === userId); 

            // If the user is already registered on the tournament we send an error
            if(existingUserInTournament) {
                return res.status(400).json({error: `L'utilisateur d'id ${userId} est déjà inscrit au tournoi d'id ${tournamentId}`});
            }
            // datas to be sent to the database
            const data = {
                tournament_id: req.body.tournament_id,
                user_id: req.body.user_id
            }
            // the user is being added to the tournament
            const addedUser = await Tournament.addUserToTournament(data);
            return res.json(addedUser);

        } catch (err) {
            console.error(err);
        }
    },

    async getUserTournamentList(req, res) {
        try{
            const userTournamentList = await Tournament.getUsers(req.params.id);
            return res.json(userTournamentList);

        } catch (err) {
            console.error(err);
            }

    },

    async deleteUserFromTournament(req, res){
        try{
            const data = {
                tournament_id: parseInt(req.body.tournament_id),
                user_id: parseInt(req.body.user_id)
            }
            const userToDelete = await Tournament.deleteUser(data);
            return res.json({message: 'l\'utilisateur à bien etait supprimé du tournoi'});
        } catch (err) {
            console.error(err);
    }
    },
}

module.exports = tournamentController;
