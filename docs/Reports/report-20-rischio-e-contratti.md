---
id: report-20-rischio-e-contratti
title: Report di Analisi Integrata – Rischio, Incidenti e Contratti
sidebar_label: Rischio & Contratti
description: Analisi integrata tra rischio residuo, incidenti ICT e contratti di esternalizzazione per il supporto alle decisioni di governance e remediation.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## 📌 Descrizione generale

Il **Report di Analisi Integrata – Rischio, Incidenti e Contratti** fornisce una valutazione comparata dei principali indicatori di **rischio residuo**, **incident management** e **copertura contrattuale**, con l’obiettivo di evidenziare disallineamenti, anomalie e priorità di intervento in ambito ICT e di governance.

Il documento integra dati provenienti da più sorgenti (valutazioni di rischio, registri incidenti e contratti di esternalizzazione) per supportare decisioni strategiche su mitigazione del rischio, revisione dei contratti e rafforzamento dei controlli operativi.

---

## 🎯 Obiettivi del report

Il report consente di:

- analizzare la distribuzione del **rischio residuo** sugli asset ICT;
- confrontare il rischio stimato con l’evidenza reale degli **incidenti**;
- valutare l’allineamento tra asset critici e **copertura contrattuale**;
- individuare anomalie e disallineamenti nei modelli di rischio;
- supportare la definizione di priorità di remediation e governance.

---

## 📊 KPI e dataset analizzati

L’analisi si basa sui seguenti dataset principali:

- **R11 – Valutazione del rischio residuo**
  - 48 record analizzati
  - Rischio residuo medio: ~6,32
  - 81,25% dei record classificati come *Critico*

- **T55 – Incidenti ICT**
  - 252 incidenti complessivi
  - 77% associati a componenti critici
  - Assenza di incidenti con severity formalmente classificata come elevata

- **T50 – Contratti**
  - ~100 contratti analizzati
  - Presenza di asset ad alto rischio non coperti da contratti attivi

---

## 🔎 Evidenze principali

Dall’analisi emergono alcune evidenze rilevanti:

- **concentrazione significativa del rischio residuo** su un numero limitato di componenti;
- **debole correlazione** tra rischio residuo medio e frequenza degli incidenti;
- presenza di componenti con **alto rischio ma assenza di incidenti recenti**, indicativi di rischio latente o di limiti nella tracciatura;
- **disallineamento tra asset ad alto rischio e contratti attivi**, con potenziali gap di responsabilità e SLA;
- possibili criticità nella **classificazione della severity** degli incidenti.

---

## ⏱️ Coerenza temporale e qualità dei dati

L’analisi evidenzia una discrepanza temporale tra:

- periodo di registrazione degli incidenti (prevalentemente 2024);
- finestra di osservazione utilizzata per l’analisi “ultimi 12 mesi” (2025).

Questo disallineamento genera un effetto di apparente assenza di incidenti recenti e deve essere considerato un **artefatto di filtro temporale**, non una reale riduzione del rischio operativo.

---

## ⚠️ Implicazioni operative e di governance

Le principali implicazioni includono:

- necessità di **prioritizzare interventi** sugli asset con rischio residuo critico, anche in assenza di eventi recenti;
- revisione dell’allineamento tra **rischio, incidenti e contratti**;
- miglioramento della qualità dei dati su severity, incidenti e fornitori;
- integrazione di indicatori operativi aggiuntivi nel modello di valutazione del rischio;
- rafforzamento della governance contrattuale per gli asset più critici.

---

## 🛠️ Raccomandazioni operative

Il report suggerisce, tra le principali azioni:

- riallineare le finestre temporali di analisi per una lettura coerente dei trend;
- rivedere e rafforzare la tassonomia di **severity degli incidenti**;
- integrare dati di rischio con KPI operativi (MTTR, patching, controlli);
- verificare la copertura contrattuale per gli asset ad alto rischio;
- introdurre dashboard integrate per il monitoraggio continuo di rischio, incidenti e SLA.

---

## 👥 Destinatari

Il documento è rivolto a:

- ICT Governance;
- Risk Management e Compliance;
- Vendor & Contract Management;
- Cyber Security;
- Direzione e Organi di Governo.

---

## 📄 Download del report

<a
  className="button button--primary"
  href={useBaseUrl('/files_per_download/20-Report-RIschio-e-COntratti-v01.docx')}
  download
>
  📥 Scarica il report (DOCX)
</a>
