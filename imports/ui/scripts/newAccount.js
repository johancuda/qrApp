/* eslint-disable no-alert */
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';


Template.newAccount.events({
  'click #creation'(event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');

    const mail = document.getElementById('mail').value;
    const mdp = document.getElementById('mdp').value;
    const mdpConf = document.getElementById('mdpConf').value;

    if (mail.includes('@unil.ch') && mail.length > 10) {
      if (mdp.length > 4) {
        if (mdp === mdpConf) {
          Accounts.createUser({
            username: mail,
            password: mdp,
            email: mail,
          },
          (error) => {
            if (error) {
              alert(error.message);
            } else {
              setTimeout(() => FlowRouter.go('connexion', { id: url }), 200);
            }
          });
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
