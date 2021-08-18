 function harnlessRansomNote(noteText, magazineText) {
     var noteArr = noteText.split(' ');
     var magazineArr = magazineText.split(' ');
     var magazineObject = {};

     magazineArr.forEach(word => {
         if (!magazineObject[word])
             magazineObject[word] = 0;
         magazineObject[word]++
     });

     var noteIsPossile = true;
     noteArr.forEach(word => {
         if (magazineObject[word]) {
             magazineObject[word]--;
             if (magazineObject[word] < 0)
                 noteIsPossile = false;
         } else noteIsPossile = false;
     });

     return noteIsPossile;
 }

 harnlessRansomNote('this is a secret note from a secret admirer',
     'this is where all a secret note who is from a secret admirer stays');