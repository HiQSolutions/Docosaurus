---
id: wfm-le-mie-attivita
title: WFM – Le mie attività
sidebar_label: Le mie attività
---

# Manuale Utente – WFM – Le mie attività

## Introduzione alla Funzione

La funzione **Le mie attività** costituisce il principale punto operativo di interazione dell’utente con il sistema di Workflow Management (WFM) di SinergIA ICT.

Attraverso questa funzionalità, l’utente può:
- visualizzare tutte le attività e gli step di processo a lui assegnati,
- monitorare stato, avanzamento e scadenze,
- eseguire le azioni previste sullo step corrente del workflow (creazione, approvazione, condivisione, archiviazione documentale).

La funzione garantisce tracciabilità operativa, controllo delle tempistiche e presidio dei processi di governance, sicurezza ICT e compliance.

## Schermate di riferimento

### Consultazione – Le mie attività

![](/img/wfmlemieattivita-consultazionedati.png)

### Elaborazione – Attività di processo

![](/img/wfmlemieattività-elaborazioneattività.png)

## Attributi Chiave

### Filtri di Ricerca

La sezione di ricerca, posizionata nella parte superiore della schermata, consente di filtrare dinamicamente le attività assegnate all’utente tramite:

- **Descrizione step**  
  Identifica la tipologia di attività da svolgere (es. Documento da creare, Documento da approvare, Documento da condividere, Documento da archiviare).
- **Stato step**  
  Stato operativo dello step (es. Attivo, Concluso).
- **Cerca**  
  Campo di ricerca testuale libera che consente di individuare rapidamente attività specifiche.

I filtri agiscono in tempo reale sull’elenco delle attività sottostante.

### Colonne – Elenco Processi

L’elenco centrale presenta le attività sotto forma di tabella strutturata, con le seguenti colonne:

- **Nome processo**  
  Processo di riferimento (es. Gestione della Governance e della Sicurezza ICT).
- **Descrizione step**  
  Attività operativa richiesta all’utente.
- **Nr Step**  
  Numero progressivo dello step nel workflow.
- **Stato**  
  Stato corrente dello step.
- **Data inizio pianificata**
- **Data inizio effettiva**
- **Data fine pianificata**
- **Data fine effettiva**
- **Indicatore di stato visivo**
- **Icona calendario**

## UXD della Funzione

### Header Comune

L’header applicativo è comune a tutte le funzionalità di SinergIA ICT e include:

- **Centro**: titolo della pagina
- **Sinistra**: nome ente, icone Home e Menu
- **Destra**: email utente e ruolo applicativo

### Indicatori Visivi e Semantica dei Colori

Gli indicatori cromatici presenti nella schermata forniscono una lettura immediata dello stato temporale delle attività:

- **Calendario verde**  
  Attività nei tempi, con scadenza futura e margine temporale disponibile.
- **Calendario giallo**  
  Attività prossima alla data di scadenza, che richiede attenzione e priorità.
- **Calendario rosso**  
  Attività in ritardo rispetto alla data di fine pianificata.

Questa codifica cromatica consente all’utente di prioritizzare rapidamente le attività più critiche.

### Consultazione Attività

La schermata di consultazione consente:

- una visione completa delle attività assegnate,
- il controllo immediato dello stato di avanzamento,
- l’individuazione rapida di ritardi o scadenze imminenti.

### Elaborazione Processi

Selezionando un’attività dall’elenco, l’utente accede alla sezione di **Elaborazione Processi**, che mostra i dettagli dello step corrente:

- **Nome processo**
- **Nr Step**
- **Descrizione dello step**
- **Stato step**

Sono disponibili le seguenti azioni operative:

- **Prossimo step**  
  Avanza il workflow allo step successivo.
- **Aggiungi documento**  
  Consente di caricare o associare documenti allo step.
- **Elabora documenti**  
  Avvia l’azione prevista dallo step (es. approvazione, validazione, condivisione).

Le azioni disponibili dipendono dallo stato dello step e dal ruolo dell’utente.

## Informazioni Associate alla Funzione

### Input

- Attività assegnate all’utente dal workflow
- Stati e date pianificate ed effettive
- Documenti associati agli step di processo

### Relazioni

- Le attività sono collegate ai processi di governance, sicurezza ICT, compliance e altri workflow aziendali
- Ogni step può interagire con la Document Library

### Output

- Avanzamento controllato dei processi
- Aggiornamento dello stato degli step
- Tracciabilità completa delle attività svolte

## Istruzioni sull’Uso della Funzione

1. Accedere alla funzione **Le mie attività** dal menu applicativo.
2. Utilizzare i filtri per individuare l’attività di interesse.
3. Verificare lo stato e le scadenze tramite gli indicatori visivi.
4. Selezionare l’attività da elaborare.
5. Utilizzare i pulsanti disponibili per completare lo step.
6. Verificare l’aggiornamento dello stato nell’elenco.

## Regole di Calcolo della Funzione

La funzione non prevede regole di calcolo automatiche.  
Lo stato delle attività è determinato dall’avanzamento del workflow e dalle date pianificate ed effettive associate agli step.
