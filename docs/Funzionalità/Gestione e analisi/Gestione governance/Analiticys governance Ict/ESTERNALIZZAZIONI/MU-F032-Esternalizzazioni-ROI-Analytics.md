# Esternalizzazioni – ROI Analytics (F032)

## Descrizione della funzionalità
La funzionalità **Esternalizzazioni – ROI Analytics (F032)** fornisce una vista analitica integrata sul ritorno degli investimenti (ROI) legati ai contratti di esternalizzazione ICT.  
La dashboard consente di analizzare contratti, funzioni e incidenti correlati, supportando decisioni di governo ICT, vendor management e continuità operativa.

L’analisi è basata sull’integrazione dei dati provenienti dal **Data Repository** (contratti, asset, funzioni, incidenti) ed è progettata per evidenziare impatti economici, criticità operative e performance dei fornitori.

---

## Schermate di riferimento

### ROI – Contract Detail
![ROI Contract Detail](img/RoiContractDetail.png)

### ROI – Contratti
![ROI Contratti](img/Roicontratti.png)

### ROI – Funzioni
![ROI Funzioni](img/RoiFunzioni.png)

### ROI – Incidenti
![ROI Incidenti](img/Roiincidenti.png)

---

## Descrizione degli elementi della dashboard

La dashboard è composta da più sezioni analitiche interconnesse:

- **Filtri laterali**
  - *Critical Component*: identifica se il componente contrattuale è classificato come critico.
  - *Tipo Asset*: distinzione tra asset applicativi e infrastrutturali.
  - *Vendor Services*: tipologia di servizio erogato dal fornitore.
  - *Function Name / Business Process*: perimetro funzionale e di processo.

- **Indicatori KPI**
  - Conteggio contratti (ID_Contract).
  - Numero di vendor services coinvolti.
  - Valore medio dei contratti passivi.
  - Indicatori medi di SLA e RTO.

- **Grafici di distribuzione**
  - Analisi dei contratti per *Asset Component L2*.
  - Distribuzione del valore contrattuale per tipologia di servizio.
  - Numero di funzioni per dominio (Governance, Core Banking, Security, ecc.).

- **Tabelle di dettaglio**
  - Elenco contratti con riferimenti a:
    - ID_Contract
    - Vendor
    - Asset coinvolto
    - Indicatori di criticità
  - Elenco funzioni correlate con identificativo funzione e stato di criticità.
  - Elenco incidenti con severità, data di rilevazione e collegamento contrattuale.

- **Analisi incidenti**
  - Distribuzione per severità (*GRAVE*, *MOLTO GRAVE*).
  - Indicatori medi:
    - Average Time to Restart
    - SLA Resolution Time
    - SLA RTO Hours

---

## Relazioni con il Data Repository

La funzionalità utilizza e correla i seguenti domini dati:
- **Contratti di esternalizzazione** (ID_Contract, Vendor, Valore).
- **Asset ICT** (Asset_App, Asset_Node, Asset_Comp).
- **Funzioni aziendali** (Function_ID, Function_Name, Business_Process).
- **Incidenti ICT** (Incident_ID, Severity, RTO, SLA).

Le relazioni consentono una lettura trasversale tra impatti economici, operativi e di rischio.

---

## Valore per l’utente
Questa dashboard supporta:
- valutazione dell’efficacia dei contratti ICT;
- identificazione di fornitori e servizi critici;
- monitoraggio dell’impatto degli incidenti sui livelli di servizio;
- decisioni strategiche di outsourcing e remediation.

La vista integrata favorisce una governance proattiva delle esternalizzazioni ICT, in linea con i requisiti di resilienza operativa e controllo del rischio.
