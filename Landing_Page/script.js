'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.tablink');
  const fieldsets = document.querySelectorAll('.search-doctor-tab');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      // Setze alle Buttons auf 'inactive' und alle fieldsets auf 'hidden'
      buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.classList.add('inactive');
      });

      fieldsets.forEach(fieldset => {
        fieldset.classList.remove('shown');
        fieldset.classList.add('hidden');
      });

      // Setze den geklickten Button auf 'active'
      this.classList.add('active');
      this.classList.remove('inactive');

      // Hole das target fieldset basierend auf dem data-target Attribut des Buttons
      const targetId = this.getAttribute('data-target');
      const targetFieldset = document.getElementById(targetId);

      // Setze das target fieldset auf 'shown'
      if (targetFieldset) {
        targetFieldset.classList.add('shown');
        targetFieldset.classList.remove('hidden');
      }
    });
  });
});


