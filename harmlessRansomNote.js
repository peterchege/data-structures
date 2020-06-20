 function harnlessRansomNote(noteText, magazineText) {
     var noteArr = noteText.split(' ');
     var magazineArr = magazineText.split(' ');
     var magazineObject = {}

     magazineArr.forEach(word => {
         if (!magazineObject[word])
             magazineObject[word] = 0;
         magazineObject[word]++
     });
     console.log(magazineObject)
 }

 harnlessRansomNote('', 'this is all the magazine text in the magazine')