"use strict";
exports.__esModule = true;
var Transaction = /** @class */ (function () {
    function Transaction(montant, solde) {
        var date_du_jour = new Date();
        this.date = date_du_jour.toLocaleDateString('fr-FR');
        this.montant = montant;
        this.solde = solde;
    }
    return Transaction;
}());
exports.Transaction = Transaction;
var Compte = /** @class */ (function () {
    function Compte(solde_initial) {
        if (solde_initial === void 0) { solde_initial = 0; }
        this.solde = solde_initial;
        this.historique = [];
    }
    Compte.prototype.depot = function (montant) {
        if (montant < 0)
            return "Montant invalide";
        this.solde += montant;
        var transaction = new Transaction(montant, this.solde);
        this.historique.push(transaction);
    };
    Compte.prototype.retrait = function (montant) {
        if (montant < 0)
            return "Montant invalide";
        if (this.solde - montant < -100)
            return "Vous êtes à découvert";
        this.solde -= montant;
    };
    return Compte;
}());
exports["default"] = Compte;
