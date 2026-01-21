---
id: definizione-eventi
title: Definizione Eventi
sidebar_label: f60-Definizione Eventi
---

# Manuale Utente – Definizione Eventi

## Introduzione alla Funzione

La funzione **Definizione Eventi** consente di configurare e governare gli eventi rilevanti per i processi di controllo, rischio, compliance e continuità operativa di SinergIA ICT.

Attraverso questa funzionalità è possibile definire le caratteristiche degli eventi, le modalità di rilevazione (automatica, manuale, batch o stream), le condizioni di attivazione e i ruoli organizzativi coinvolti, garantendo un presidio strutturato e tracciabile degli eventi significativi ai fini di governance ICT e normativa (es. DORA).

## Schermate di riferimento

### Navigazione – Configurazioni

![](/img/configurazioni-alberodinavigazione.png)

![](/img/configurazioni-alberodinavigazione1.png)

### Dashboard BI – Eventi

![](/img/definizioneeventi-dashboardbi.png)

### Consultazione – Definizione Eventi

![](/img/Definizioneeventi-consultazione1.png)

![](/img/Definizioneeventi-consultazionedati2.png)

### Editing – Definizione Eventi

![](/img/Definizioneeventi-editing1.png)

### Editing – Eventi Ruoli

![](/img/Definizioneeventi-editing2.png)

## Attributi Chiave

### Filtri di Ricerca

La sezione di consultazione presenta un box filtri che consente di analizzare l’elenco degli eventi definiti attraverso:

- **Tipo Evento**
- **Tipo Rilevazione Evento**
- **Cerca**

### Colonne – Elenco Definizione Eventi

- Tipo Evento
- Nome Evento
- Descrizione Evento
- Condizioni Rilevamento
- Rilevazione Evento
- Data Inizio
- Data Fine

### Colonne – Elenco Eventi Ruoli

- Tipo Evento
- Nome Evento
- Nome Ruolo
- cd Evento
- Data Fine Validità Record

## UXD della Funzione

### Header Comune

Header standard con nome funzione, informazioni utente, menu e ruolo applicativo.

### Dashboard BI

Dashboard Power BI in alto con analisi eventi per ruolo e tipologia.

### Editing e Operazioni CRUD

- ➕ Aggiungi
- ✏️ Modifica
- 🗑️ Elimina (con conferma)

## Informazioni Associate alla Funzione

### Input

Dati evento, condizioni, ruoli e periodo di validità.

### Relazioni

Eventi collegati ai processi di Incident, Risk, Compliance e SLA.

### Output

Catalogo eventi strutturato e tracciabile.

## Istruzioni sull’Uso della Funzione

1. Accedere a Configurazioni → Definizione Eventi.
2. Consultare o filtrare gli eventi.
3. Gestire eventi e ruoli tramite le icone di editing.

## Regole di Calcolo della Funzione

Le condizioni di rilevamento determinano l’attivazione automatica degli eventi.
