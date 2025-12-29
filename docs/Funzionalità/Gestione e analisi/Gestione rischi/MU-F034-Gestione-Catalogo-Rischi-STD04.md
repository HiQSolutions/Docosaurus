---
id: roi-analytics-f0032
title: "ROI Analytics – Esternalizzazioni (F0032)"
sidebar_label: "ROI Analytics (F0032)"
description: "Analisi del ROI delle esternalizzazioni ICT tramite dashboard Power BI integrate"
---

# ROI Analytics – Esternalizzazioni (F0032)

## Introduzione alla Analytics

La funzionalità **ROI Analytics – Esternalizzazioni (F0032)** consente di analizzare in modo strutturato il ritorno sugli investimenti (ROI) associati ai contratti di esternalizzazione ICT, integrando dati economici, operativi e di rischio.

L’analytics supporta le attività di **governance ICT**, **vendor management** e **resilienza operativa**, permettendo di valutare l’impatto dei fornitori esterni sui livelli di servizio, sui costi e sulla gestione degli incidenti.  
Le informazioni visualizzate sono derivate dal **Data Repository di Sinergia ICT**, in coerenza con il data map e il data dictionary di piattaforma.

---

## Schermate di riferimento

### ROI – Contratti
![](/img/Roicontratti.png)

### ROI – Contract Detail
![](/img/RoiContractDetail.png)

### ROI – Funzioni
![](/img/RoiFunzioni.png)

### ROI – Incidenti
![](/img/Roiincidenti.png)

---

## Descrizione delle Analytics

### ROI – Contratti

Questa schermata fornisce una vista aggregata dei **contratti di esternalizzazione ICT**, consentendo di analizzare la distribuzione dei contratti per:
- tipologia di asset (applicativo o infrastrutturale);
- componente critica;
- tipologia di servizio erogato dal fornitore (*vendor services*).

I **KPI di sintesi** mostrano:
- numero totale di contratti attivi;
- numero di servizi di vendor associati;
- valore medio dei contratti passivi.

I grafici a barre evidenziano la concentrazione del valore contrattuale sui diversi servizi, permettendo di individuare fornitori o ambiti con maggiore impatto economico.

---

### ROI – Contract Detail

La schermata di dettaglio consente un’analisi puntuale dei contratti selezionati.  
La tabella centrale riporta informazioni quali:
- identificativo del contratto (*ID_Contract*);
- vendor associato;
- asset e componente di riferimento;
- criticità del contratto;
- metriche SLA e RTO.

I valori medi (es. *Media di SLA RTO Hours*, *Media di Time Incident in charge*) permettono di confrontare le performance contrattuali rispetto agli obiettivi di resilienza definiti.

---

### ROI – Funzioni

Questa analytics mette in relazione i contratti di esternalizzazione con le **funzioni aziendali** supportate.  
I grafici mostrano:
- il numero di funzioni per dominio (Governance, Core Banking, Security, Digital Channels, ecc.);
- la rilevanza delle funzioni critiche o importanti.

La rete di relazioni consente di visualizzare come i fornitori esterni incidono sui processi di business, supportando valutazioni di priorità e rischio operativo.

---

### ROI – Incidenti

La schermata **ROI Incidenti** analizza l’impatto degli incidenti ICT sui contratti esternalizzati.  
Sono visualizzati:
- distribuzione degli incidenti per severità (*GRAVE*, *MOLTO GRAVE*);
- tempi medi di ripristino (*Average Time to Restart*);
- *SLA Resolution Time*;
- *Target RTO*.

Questa vista consente di valutare l’efficacia dei fornitori nella gestione degli incidenti e il rispetto degli SLA contrattuali.

---

## Informazioni associate

### Input dati
- Contratti di esternalizzazione (ID_Contract, vendor, valore contrattuale)
- Asset ICT (applicativi e infrastrutturali)
- Funzioni aziendali
- Incidenti ICT e metriche SLA/RTO

### Relazioni
- Contratti ↔ Asset
- Contratti ↔ Funzioni
- Contratti ↔ Incidenti
- Vendor ↔ Servizi

### Output
- KPI di ROI e performance contrattuale
- Indicatori di rischio operativo
- Evidenze a supporto delle decisioni di governance

---

## Istruzioni per l’uso

1. Accedere alla sezione **Esternalizzazioni**.
2. Selezionare la tab **ROI Analytics**.
3. Utilizzare i filtri laterali per restringere l’analisi (criticità, asset, vendor service).
4. Analizzare i KPI di sintesi e approfondire tramite le tabelle di dettaglio.
5. Utilizzare le diverse schermate per una valutazione completa di costi, performance e rischio.
