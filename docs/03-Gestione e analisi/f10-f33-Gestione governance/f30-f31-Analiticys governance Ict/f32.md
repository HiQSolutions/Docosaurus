---
id: mu-f032-esternalizzazioni-roi-analytics
title: "Esternalizzazioni – ROI Analytics (F032)"
sidebar_label: "ROI Esternalizzazioni (F032)"
description: "Dashboard analitica per l’analisi del ROI delle esternalizzazioni ICT"
---

# Esternalizzazioni – ROI Analytics (F032)

## Descrizione della funzionalità
La funzionalità **Esternalizzazioni – ROI Analytics (F032)** fornisce una vista analitica integrata sul ritorno degli investimenti (ROI) associati ai contratti di esternalizzazione ICT.

La dashboard consente di analizzare in modo correlato **contratti**, **funzioni**, **incidenti** e **asset**, supportando le attività di governance ICT, vendor management e resilienza operativa.

L’analisi è alimentata dai dati presenti nel **Data Repository di Sinergia ICT**, in coerenza con il glossario e il data dictionary di piattaforma.

---

## Schermate di riferimento

### ROI – Contract Detail
![ROI Contract Detail](/img/RoiContractDetail.png)

### ROI – Contratti
![ROI Contratti](/img/Roicontratti.png)

### ROI – Funzioni
![ROI Funzioni](/img/RoiFunzioni.png)

### ROI – Incidenti
![ROI Incidenti](/img/Roiincidenti.png)

---

## Descrizione degli elementi della dashboard

La dashboard è articolata in più sezioni analitiche interconnesse che consentono una lettura integrata delle esternalizzazioni ICT.

Sono presenti **filtri laterali** che permettono di restringere il perimetro di analisi in base a:
- criticità del componente (*Critical Component*);
- tipologia di asset (*applicativo* o *infrastrutturale*);
- servizi del fornitore (*vendor services*);
- funzioni aziendali e processi di business correlati.

Gli **indicatori KPI** sintetizzano le principali metriche di controllo, tra cui:
- numero di contratti di esternalizzazione;
- numero di servizi erogati dai vendor;
- valore medio dei contratti passivi;
- indicatori medi di SLA, RTO e tempi di ripristino.

I **grafici di distribuzione** consentono di analizzare:
- la concentrazione dei contratti per componente applicativa o infrastrutturale;
- la distribuzione del valore contrattuale per tipologia di servizio;
- il numero di funzioni aziendali coinvolte per dominio (Governance, Core Banking, Security, ecc.).

Le **tabelle di dettaglio** mostrano le informazioni puntuali relative a:
- contratti (ID_Contract, vendor, asset associato, criticità);
- funzioni aziendali correlate (Function_ID, nome funzione, rilevanza);
- incidenti ICT (severità, data di rilevazione, collegamento contrattuale).

La sezione **ROI Incidenti** evidenzia l’impatto operativo degli eventi, mostrando:
- distribuzione per severità (*GRAVE*, *MOLTO GRAVE*);
- valori medi di *Average Time to Restart*;
- *SLA Resolution Time*;
- *Target RTO* e *SLA RTO Hours*.

---

## Relazioni con il Data Repository

La funzionalità correla i seguenti domini informativi:
- **Contratti di esternalizzazione** (ID_Contract, Vendor, Valore contrattuale);
- **Asset ICT** (Asset_App, Asset_Node, Asset_Comp);
- **Funzioni aziendali** (Function_ID, Function_Name, Business_Process);
- **Incidenti ICT** (Incident_ID, Severity, RTO, SLA).

Queste relazioni consentono una valutazione integrata dell’impatto economico, operativo e di rischio delle esternalizzazioni.

---

## Valore per l’utente

La dashboard supporta:
- la valutazione dell’efficacia economica dei contratti ICT;
- l’identificazione di fornitori e servizi critici;
- il monitoraggio dell’impatto degli incidenti sui livelli di servizio;
- le decisioni strategiche in ambito di outsourcing e remediation.

La vista integrata consente una **governance proattiva delle esternalizzazioni ICT**, in linea con i requisiti di resilienza operativa, controllo del rischio e conformità normativa.
