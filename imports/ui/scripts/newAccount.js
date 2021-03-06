/* eslint-disable no-alert */
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

import '../../../client/css/purpose.css';

Template.newAccount.events({
  'click #creation'(event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');

    const mail = document.getElementById('mail').value;
    const mdp = document.getElementById('mdp').value;
    const mdpConf = document.getElementById('mdpConf').value;
    const checkTerms = document.getElementById('check-terms');

    if (mail.includes('@unil.ch') && mail.length > 10) {
      if (mdp.length > 4) {
        if (mdp === mdpConf) {
          if (checkTerms.checked === true) {
            Accounts.createUser({
              username: mail,
              password: mdp,
              email: mail,
              profile: { towers: [] },
            },
            (error) => {
              if (error) {
                alert(error.message);
              } else {
                setTimeout(() => FlowRouter.go('connexion', { id: url }), 200);
              }
            });
          } else {
            alert('Vous devez accepter les conditions d\'utilisation.');
          }
        } else {
          alert('Vérifiez votre mot de passe.');
        }
      } else {
        alert('Votre mot de passe est trop court.');
      }
    } else {
      alert('Veuillez entrer une adresse UNIL.');
    }
  },
});
