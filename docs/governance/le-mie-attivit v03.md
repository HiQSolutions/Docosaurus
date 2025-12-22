---
id: le-mie-attivita
title: Le mie attività
sidebar_label: Le mie attività
---

# Manuale Utente -- Le mie attività

## Nome della Funzione

Le mie attività

## Area GRC di riferimento

Admin -- Flussi di lavoro (Workflow Management)

## Versione Funzione

v1.1

## Introduzione alla Funzione

La funzione "Le mie attività" consente di visualizzare e gestire le attività assegnate all'utente nell'ambito dei flussi di lavoro della piattaforma SinergIA ICT. La schermata raccoglie in un'unica vista gli step (passi) operativi previsti dai processi, mostrando stato di avanzamento, date pianificate/effettive e indicatori di scadenza, così da permettere all'utente di prioritizzare le lavorazioni e completare gli adempimenti richiesti.

La funzione supporta l'operatività GRC ICT (Governance, Risk e Compliance) facilitando l'esecuzione ordinata delle attività e la tracciabilità delle evidenze (es. documenti da creare/approvare/condividere/archiviare), riducendo il rischio di ritardi e migliorando la trasparenza verso audit e ispezioni.

## Schermate di riferimento

Consultazione dati -- elenco attività e filtri (esempio).

![](/img/le-mie-attivita/image1.png)

Elaborazione processi -- dettaglio step e azioni disponibili (esempio).

![](/img/le-mie-attivita/image2.png)

Menu Flussi di Lavoro -- accesso alle sezioni (esempio).

![](/img/le-mie-attivita/image3.png)

## Attributi Chiave

Di seguito sono descritti i principali campi/colonne e gli elementi di interazione presenti nelle schermate della funzione.

### 1) Header e controlli comuni di piattaforma

In alto, la schermata presenta elementi standardizzati:
- Nome Ente (in alto a sinistra)
- Icone di navigazione: Menu (hamburger) e Home (casa) a sinistra
- Titolo pagina/funzione al centro
- Informazioni utente a destra: Email e Ruolo

### 2) Sezione "Ricerca" (Consultazione dati)

La parte superiore della schermata contiene un box "Ricerca" che permette di filtrare l'elenco delle attività.

Campi/filtri disponibili:
- Descrizione step
- Stato Step
- Cerca

### 3) Tabella "Processi" (elenco attività)

La sezione "Processi" mostra l'elenco delle attività assegnate all'utente.

Colonne:
- Nome processo
- Descrizione Step
- Nr Step
- Stato
- Data inizio pian
- Data inizio eff
- Data fine pian
- Data fine eff

Indicatori:
- Selettore riga
- Calendario colorato (verde / giallo / rosso)

### 4) Sezione "Elaborazione Processi"

Campi:
- Nome Processo
- Nr Step
- Descrizione
- Stato Step

Azioni:
- Prossimo step
- Aggiungi documento
- Elabora Documenti

## UXD della Funzione

- Accesso dall'area "Flussi di Lavoro"
- Selezione attività → dettaglio → azione

## Informazioni Associate alla Funzione

Input:
- Processi
- Assegnazioni
- Date
- Documenti

Output:
- Stato aggiornato
- Evidenze tracciate

## Istruzioni sull'Uso della Funzione

1. Accedere a "Le mie attività"
2. Filtrare o cercare
3. Selezionare attività
4. Eseguire azione

## Regole di Calcolo della Funzione

- Calendario:
  - Verde: nei tempi
  - Giallo: in scadenza
  - Rosso: in ritardo

## Note interne (NON PUBBLICATE)

- Verificare soglie calendario
