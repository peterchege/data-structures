 function harnlessRansomNote(noteText, magazineText) {
     var noteArr = noteText.split(' ');
     var magazineArr = magazineText.split(' ');
     var magazineObject = {}

     magazineArr.forEach(word => {
         if (!magazineObject[word])
             magazineObject[word] = 0;
         magazineObject[word]++
     });

     var noteIsPossile = true;
     noteArr.forEach(word => {
         if (magazineObject[word]) {
             magazineObject[word]--;
             if (magazineObject[word] < 0) {
                 noteIsPossile = false;
             }
         } else {
             noteIsPossile = false;
         }

     });

     return noteIsPossile;
 }

 harnlessRansomNote('', 'this is all the magazine text in the magazine')