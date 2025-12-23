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
- eseguire le azioni operative previste sullo step corrente (creazione, approvazione, condivisione, archiviazione documentale).

La funzione è progettata per supportare un presidio efficace dei processi di governance, sicurezza ICT e compliance, garantendo piena tracciabilità operativa.

## Schermate di riferimento

### Consultazione – Le mie attività

![](/img/wfmlemieattivita-consultazionedati.png)

### Elaborazione – Attività di processo

![](/img/wfmlemieattività-elaborazioneattività.png)

## Attributi Chiave

### Filtri di Ricerca

La sezione di ricerca consente di filtrare dinamicamente le attività assegnate tramite:

- **Descrizione step**  
  Tipologia di attività operativa (es. Documento da creare, Documento da approvare).
- **Stato step**  
  Stato dello step (Attivo, Concluso).
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

La funzione utilizza una combinazione di **icone, colori e indicatori puntuali** per fornire una lettura immediata dello stato delle attività.

#### Colore del Calendario

Il colore dell’icona calendario indica lo stato temporale e operativo dello step:

- **Calendario verde**  
  Step attivo con tempo disponibile prima della scadenza.
- **Calendario giallo**  
  Step attivo prossimo alla data di scadenza.
- **Calendario rosso**  
  Step attivo in ritardo rispetto alla data di fine pianificata.
- **Calendario blu**  
  Step concluso. Le date effettive risultano valorizzate e lo step non richiede ulteriori azioni.

Questa codifica cromatica è coerente con i valori di stato e con le date presenti nella tabella.

#### Pallini di Stato accanto al Calendario

Accanto all’icona del calendario è presente un indicatore puntuale che segnala lo stato operativo dello step:

- **Pallino verde**  
  Step attivo e in carico all’utente.
- **Pallino bianco / trasparente**  
  Step non attivo o già completato.

La combinazione tra colore del calendario e pallino consente di distinguere rapidamente:
- step attivi,
- step conclusi,
- step critici per scadenza.

### Consultazione Attività

La schermata di consultazione consente:

- visione completa delle attività assegnate,
- identificazione immediata delle priorità,
- controllo dello stato di avanzamento dei processi.

### Elaborazione Processi

Selezionando una riga dell’elenco, l’utente accede alla sezione **Elaborazione Processi**, che mostra:

- **Nome processo**
- **Nr Step**
- **Descrizione dello step**
- **Stato step**

Azioni disponibili:

- **Prossimo step**  
  Avanza il workflow allo step successivo.
- **Aggiungi documento**  
  Consente di associare documentazione allo step.
- **Elabora documenti**  
  Esegue l’azione prevista dallo step (approvazione, validazione, condivisione).

Le azioni disponibili dipendono dallo stato dello step e dal ruolo dell’utente.

## Informazioni Associate alla Funzione

### Input

- Assegnazioni workflow
- Date pianificate ed effettive
- Documenti associati agli step

### Relazioni

- Collegamento ai processi di governance, sicurezza ICT e compliance
- Integrazione con la Document Library

### Output

- Avanzamento dei processi
- Aggiornamento dello stato degli step
- Tracciabilità delle attività svolte

## Istruzioni sull’Uso della Funzione

1. Accedere alla funzione **Le mie attività**.
2. Utilizzare i filtri per individuare le attività rilevanti.
3. Interpretare stato e priorità tramite colori e indicatori.
4. Selezionare l’attività da elaborare.
5. Completare le azioni previste dallo step.
6. Verificare l’aggiornamento dello stato nell’elenco.

## Regole di Calcolo della Funzione

La funzione non applica calcoli automatici.  
Lo stato e i colori degli indicatori derivano dal confronto tra:
- date pianificate,
- date effettive,
- stato dello step nel workflow.
