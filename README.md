Descrizione del Progetto

Titolo: Avventura 2D con un Personaggio Animato

Questo è un piccolo gioco 2D creato per sperimentare l'utilizzo delle classi JavaScript e del Canvas. L'obiettivo è fornire una struttura semplice e divertente, che permetta a un giocatore di controllare un personaggio animato e navigare in un mondo a scorrimento orizzontale.
Gameplay

    Il giocatore controlla un personaggio (un piccolo astronauta) che deve muoversi a destra e a sinistra utilizzando la tastiera.
    Lo scopo è superare le piattaforme senza cadere e raggiungere la fine del percorso.
    Il personaggio può saltare e interagire con le piattaforme grazie alla gestione della fisica (gravità e collisioni).

Dettagli Tecnici

    Framework utilizzato: JavaScript puro con Canvas.

    Gestione del movimento:
        Le variabili velocity e gravity definiscono il comportamento fisico del personaggio.
        Collisioni con le piattaforme vengono rilevate tramite controlli di posizione e dimensione (position.x, position.y, width e height).

    Sprites Animati:
        Il personaggio utilizza spritesheet diversi per rappresentare:
            Stato fermo (spriteStandRight, spriteStandLeft)
            Stato in movimento (spriteRunRight, spriteRunLeft)
        L'animazione è implementata tramite il metodo draw():

    c.drawImage(
        this.currentSprite, 
        this.currentCropWidth * this.frames, // posizione nella sprite
        0,
        this.currentCropWidth, // larghezza del frame
        400, 
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height
    );

    La variabile frames incrementa ad ogni aggiornamento per "scorrere" tra i frame della sprite.

Gestione del Mondo:

    Il mondo è a scorrimento orizzontale: il personaggio rimane centrato mentre le piattaforme e gli oggetti di sfondo scorrono.
    La logica dello scroll è controllata da scrollOffset, che modifica le coordinate delle piattaforme e degli oggetti generici (come lo sfondo e le colline).

Fisica e Collisioni:

    Il movimento verticale è influenzato dalla gravità:

        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        }

        Le collisioni con le piattaforme fermano il movimento verticale del giocatore.

    Input da Tastiera:
        I controlli principali sono:
            Tasto R: Movimento a sinistra
            Tasto F: Movimento a destra
            Spazio: Salto

Funzioni Chiave

    Player: La classe principale che definisce il personaggio, le sue animazioni e il movimento.
    Platform: Rappresenta le piattaforme su cui il giocatore può camminare.
    GenericObject: Gestisce oggetti di sfondo (es. immagini come colline e cielo) per dare profondità alla scena.
    animate(): Il ciclo principale che aggiorna il canvas, disegna tutti gli elementi e gestisce il movimento/scorrimento del mondo.

Obiettivo

Arriva alla fine del percorso senza cadere! 🎮

A breve inserirò il link di gioco, per adesso puoi clonare la repository e esegui questi due comendi:

1. npm install
2. npm start

Questa versione del gioco può essere facilmente espansa aggiungendo nuovi livelli, ostacoli, nemici o miglioramenti grafici. Il progetto è perfetto per comprendere concetti come:

    Uso delle classi in JavaScript.
    Animazione con spritesheet.
    Gestione della fisica di base.
    Input utente tramite tastiera.

Buon divertimento e programmazione! 🚀