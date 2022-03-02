# Profil Daten Validieren

Die Route `POST /profiles` soll ein JSON Objekt mit user daten bekommen.
z.B.:  
```
{
    userId: 5,
    hobbies: ['Hobby 1', 'Hobby 2'],
    pets: ['PetName'],
    favoriteFood: '...',
    favoriteMovie: '...',
    favoriteSeries: '...',
},
```
### Validierung
Der Server soll testen ob die Daten den vorgegebenen Regeln entsprechen.

* Der Server soll mit **Success** antworten, wenn alles in Ordnung ist.  
* Wenn es invalide Daten gibt, sollen alle Fehler-Meldungen zurückgegeben werden.

### Regeln
#### userId
* Required
* Nur Ganze Zahlen
* Größer oder gleich 0
#### hobbies
* Required
* Ein Array
* Mindestens ein Hobby
* Hobbies sind Strings
#### pets
* NICHT Required
* Ein Array
* Pets sind Strings (Namen)
#### favoriteFood
* NICHT Required
* String
* Mindestens 5 Zeichen
* Höchsten 30 Zeichen
#### favoriteMovie
* NICHT Required
* String
* Mindestens 5 Zeichen
* Höchsten 30 Zeichen
#### favoriteSeries
* NICHT Required
* String
* Mindestens 5 Zeichen
* Höchsten 30 Zeichen