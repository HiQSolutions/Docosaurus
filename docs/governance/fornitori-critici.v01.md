---
id: fornitori-critici
title: Fornitori Critici
sidebar_label: Fornitori Critici
---

# Manuale Utente -- Fornitori Critici

## Nome della Funzione

Fornitori Critici

## Area GRC di riferimento

ICT Risk Management / ICT Compliance Management / Vendor Management

## Versione Funzione

v01

## Introduzione alla Funzione

La funzione **Fornitori Critici** consente di identificare, consultare e monitorare i fornitori ICT classificati come critici o importanti ai fini della continuità operativa, della sicurezza ICT e della conformità normativa (DORA, NIS2, disposizioni Banca d’Italia).

La funzione supporta le attività di Vendor Risk Management permettendo una visione integrata dei contratti, dei servizi ICT erogati, degli asset coinvolti e degli indicatori di criticità, facilitando le analisi di rischio, le attività di audit e il reporting verso le funzioni di controllo e gli Organi di Vigilanza.

## Schermate di riferimento

### Consultazione dati – Ricerca Fornitori Critici

![](/img/fornitori-critici/Consultazione dati.png)

### Consultazione dati – Elenco Fornitori Critici

![](/img/fornitori-critici/Consultazione dati 2.png)

### Dashboard BI – Analisi Fornitori Critici

![](/img/fornitori-critici/dashboard BI.png)

### Post Incident Review

![](/img/fornitori-critici/Post incidenti.png)

### Incidenti Gravi

![](/img/fornitori-critici/Incidenti Gravi.png)

## Attributi Chiave

### 1) Header e controlli comuni di piattaforma

In alto in ogni schermata sono presenti:
- Nome Ente
- Icone Home e Menu (a sinistra)
- Titolo della funzione “Fornitori Critici” (centrale)
- Email utente e Ruolo applicativo (a destra)

### 2) Sezione Ricerca – Fornitori Critici

La sezione **Ricerca – Fornitori Critici** consente di filtrare l’elenco tramite:
- **Servizi Fornitore**: selezione del servizio ICT erogato
- **Nome Fornitore**: selezione del fornitore
- **Fornitore Critico**: flag booleano (true/false)
- **Asset Critico**: flag booleano (true/false)
- **Cerca**: campo testuale per ricerca libera

I filtri agiscono dinamicamente sull’elenco sottostante.

### 3) Tabella Elenco – Fornitori Critici

La tabella riporta l’elenco dei fornitori e dei contratti associati. Colonne principali:
- Nome Fornitore
- Servizio
- Servizio Fornitore
- Data
- Durata
- Tipo Asset
- Asset Component
- Descrizione
- Fornitore Critico
- Asset Critico
- Passive (valore economico del contratto)

Ogni riga rappresenta un contratto o servizio rilevante ai fini del perimetro critico.

### 4) Dettaglio Fornitore Critico

La schermata di dettaglio mostra le informazioni complete del fornitore e del servizio, tra cui:
- Parametri SLA (Availability, Response Time, Resolution Time, RTO, RPO)
- Informazioni contrattuali (data, durata, penali, monitoring)
- Classificazione di criticità e impatto
- Tipologia di ICT Service e Service Model (Cloud / Non Cloud)
- Dati di sicurezza (crittografia, accessi privilegiati, accesso remoto)
- Informazioni di outsourcing e subfornitura
- Dati geografici (Data Processing Country, Data Storage Country)
- Presenza di Exit Plan, Audit Onsite, DR Testing

### 5) Dashboard BI – Fornitori Critici

La dashboard BI integrata fornisce:
- Distribuzione dei fornitori per tipologia di servizio
- Analisi degli asset critici
- Valore economico complessivo dei contratti
- Indicatori sintetici (conteggi, medie, ranking)

I filtri presenti permettono analisi mirate per componente critica e vendor service.

### 6) Post Incident Review

La sezione **Post Incident Review** consente di:
- documentare le analisi successive a incidenti ICT rilevanti
- collegare l’incidente al fornitore critico coinvolto
- inserire evidenze e valutazioni qualitative

### 7) Incidenti Gravi

La sezione **Incidenti Gravi** consente di:
- registrare incidenti ICT classificati come gravi
- associare fornitori critici e servizi impattati
- supportare gli obblighi di notifica previsti da DORA

## UXD della Funzione

- Accesso dalla sezione Vendor / Fornitori
- Flusso principale:
  1. Ricerca e filtro dei fornitori critici
  2. Consultazione elenco
  3. Accesso al dettaglio fornitore
  4. Analisi dashboard BI
  5. Gestione post-incident e incidenti gravi

## Informazioni Associate alla Funzione

### Input
- Dati contrattuali fornitori
- Classificazioni di criticità
- Parametri SLA
- Asset e servizi ICT
- Eventi di incidente

### Relazioni
- Collegamento con Asset ICT
- Collegamento con Incident Management
- Collegamento con Risk Assessment e Compliance

### Output
- Elenco fornitori critici
- Evidenze per audit e vigilanza
- Indicatori di rischio e concentrazione

## Istruzioni sull’Uso della Funzione

1. Accedere alla funzione **Fornitori Critici**
2. Applicare i filtri nella sezione Ricerca
3. Analizzare l’elenco dei fornitori
4. Selezionare un fornitore per il dettaglio
5. Consultare dashboard BI e sezioni incidenti
6. Inserire o aggiornare informazioni post-incident

## Regole di Calcolo della Funzione

- **Fornitore Critico** e **Asset Critico** sono determinati da regole di classificazione configurate (es. impatto, dipendenza, servizio critico)
- Gli indicatori BI aggregano:
  - numero di fornitori
  - valore dei contratti
  - distribuzione per servizio e asset
