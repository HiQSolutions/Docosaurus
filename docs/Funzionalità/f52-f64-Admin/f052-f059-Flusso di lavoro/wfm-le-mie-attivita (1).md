---
id: wfm-le-mie-attivita
title: WFM – Le mie attività
sidebar_label: Le mie attività
---

# Manuale Utente – WFM – Le mie attività

## Introduzione alla Funzione

La funzione **Le mie attività** rappresenta il principale strumento operativo attraverso cui l’utente interagisce con i workflow di SinergIA ICT.

Essa consente di:
- visualizzare tutte le attività e gli step di processo assegnati,
- monitorarne stato, avanzamento e rispetto delle scadenze,
- eseguire le azioni operative previste sullo step corrente, incluse le attività di gestione e revisione documentale.

La funzione è progettata per supportare un presidio efficace dei processi di governance, sicurezza ICT e compliance, garantendo piena tracciabilità operativa e collaborazione tra gli utenti coinvolti nel workflow.

## Schermate di riferimento

### Consultazione – Le mie attività

![](/img/wfmlemieattivita-consultazionedati.png)

### Elaborazione – Attività di processo

![](/img/wfmlemieattività-elaborazioneattività.png)

## Attributi Chiave

### Filtri di Ricerca

La sezione di ricerca consente di filtrare dinamicamente le attività assegnate tramite:

- **Descrizione step**  
  Tipologia di attività operativa (es. Documento da creare, Documento da approvare, Documento da condividere, Documento da archiviare).
- **Stato step**  
  Stato dello step nel workflow (Attivo, Concluso).
- **Cerca**  
  Campo di ricerca testuale libera.

I filtri aggiornano in tempo reale l’elenco delle attività.

### Colonne – Elenco Processi

L’elenco delle attività è strutturato nelle seguenti colonne:

- **Nome processo**
- **Descrizione step**
- **Nr Step**
- **Stato**
- **Data inizio pianificata**
- **Data inizio effettiva**
- **Data fine pianificata**
- **Data fine effettiva**
- **Indicatore di stato**
- **Icona calendario**

## UXD della Funzione

### Header Comune

L’header applicativo include:

- **Centro**: titolo della pagina
- **Sinistra**: nome ente, icone Home e Menu
- **Destra**: email utente e ruolo applicativo

### Indicatori Visivi e Semantica dei Colori

La funzione utilizza una combinazione di icone e colori per fornire una lettura immediata dello stato delle attività.

#### Colore del Calendario

- **Calendario verde**  
  Step attivo con tempo disponibile prima della scadenza.
- **Calendario giallo**  
  Step attivo prossimo alla data di scadenza.
- **Calendario rosso**  
  Step attivo in ritardo rispetto alla data di fine pianificata.
- **Calendario blu**  
  Step concluso. Non sono richieste ulteriori azioni operative.

#### Pallini di Stato accanto al Calendario

- **Pallino verde**  
  Step attivo e attualmente in carico all’utente.
- **Pallino bianco / trasparente**  
  Step non attivo o già completato.

La combinazione tra calendario e pallino consente di distinguere rapidamente priorità e stato operativo.

### Consultazione Attività

La schermata di consultazione consente:

- visione completa delle attività assegnate,
- identificazione immediata delle priorità,
- controllo dello stato di avanzamento dei processi.

### Elaborazione Processi

Selezionando un’attività dall’elenco, l’utente accede alla sezione **Elaborazione Processi**, che mostra:

- **Nome processo**
- **Nr Step**
- **Descrizione dello step**
- **Stato step**

Sono disponibili le seguenti azioni operative:

- **Prossimo step**  
  Avanza il workflow allo step successivo, se consentito dallo stato.
- **Aggiungi documento**  
  Consente di caricare o associare un nuovo documento allo step corrente.
- **Elabora documenti**  
  Permette di aprire e consultare il documento associato allo step selezionato.

  Attraverso questa azione l’utente può:
  - visualizzare il contenuto del documento,
  - inserire **commenti**,
  - proporre **revisioni**.

  I commenti e le revisioni inseriti vengono salvati sul documento e risultano **immediatamente disponibili** per tutti gli altri utenti coinvolti nel workflow del documento, favorendo collaborazione, tracciabilità delle osservazioni e allineamento tra i diversi ruoli.

Le azioni disponibili dipendono dallo stato dello step e dal ruolo dell’utente.

## Informazioni Associate alla Funzione

### Input

- Assegnazioni workflow
- Date pianificate ed effettive
- Documenti associati agli step
- Commenti e revisioni inseriti dagli utenti

### Relazioni

- Collegamento ai processi di governance, sicurezza ICT e compliance
- Integrazione con la Document Library
- Condivisione delle revisioni tra gli utenti del workflow

### Output

- Avanzamento dei processi
- Aggiornamento dello stato degli step
- Storico di commenti e revisioni sui documenti
- Tracciabilità completa delle attività svolte

## Istruzioni sull’Uso della Funzione

1. Accedere alla funzione **Le mie attività**.
2. Utilizzare i filtri per individuare le attività rilevanti.
3. Interpretare stato e priorità tramite colori e indicatori.
4. Selezionare l’attività da elaborare.
5. Utilizzare **Elabora documenti** per consultare il file e inserire commenti o revisioni.
6. Avanzare lo step o completare l’attività secondo il workflow.
7. Verificare l’aggiornamento dello stato nell’elenco.

## Regole di Calcolo della Funzione

La funzione non applica calcoli automatici.  
Lo stato delle attività e degli indicatori visivi deriva dal confronto tra:
- date pianificate,
- date effettive,
- stato dello step nel workflow.
