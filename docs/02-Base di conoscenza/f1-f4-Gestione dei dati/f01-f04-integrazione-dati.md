---
id: f01-f04-integrazione-dati-pipeline-etl
title: "F01–F04 – Integrazione Dati (Pipeline ETL)"
sidebar_label: "f1-f4 – Integrazione Dati"
description: "Modulo per l’integrazione, validazione e consolidamento dei dati ICT tramite pipeline ETL strutturata, a supporto delle funzioni di Governance, Risk e Compliance."
---

## Panoramica del modulo

Il modulo **Integrazione Dati** consente di governare l’intero ciclo di caricamento, validazione e consolidamento dei dati all’interno della piattaforma **Sinergia ICT-GRC**, attraverso una pipeline ETL strutturata e guidata.

La pipeline è articolata in **fasi sequenziali**, ciascuna con uno scopo specifico, che accompagnano l’utente dal caricamento del dizionario dati fino alla produzione del dataset finale pronto per analisi, reporting e controlli GRC.

![](/img/integrazionedati.png)

---

# F01 – Dizionario Dati

## Scopo della funzione

La funzione **F01 – Dizionario Dati** consente di caricare e mappare il **dizionario dati** che descrive la struttura informativa di riferimento per l’integrazione nel database SQL.

Questa fase definisce il **significato semantico**, la struttura logica e le relazioni attese tra i dati che verranno successivamente caricati.

## Descrizione dettagliata

L’utente può:
- selezionare il **database di destinazione**;
- caricare un file Excel contenente il dizionario dati;
- avviare il processo di mappatura iniziale.

Il dizionario dati rappresenta la base di coerenza dell’intera pipeline, poiché garantisce che i dati caricati siano interpretati correttamente e utilizzabili nei processi di Governance, Risk e Compliance.

## Come operare

1. Selezionare il database di riferimento
2. Caricare il file Excel del dizionario dati
3. Avviare la fase di mappatura

---

# F02 – Caricamento in Staging

## Scopo della funzione

La funzione **F02 – Caricamento in Staging** consente di caricare i dati grezzi all’interno dell’area di **staging**, separata dal database di produzione.

Questa fase permette di eseguire controlli preliminari prima dell’integrazione definitiva.

## Descrizione dettagliata

Durante il caricamento in staging:
- i dati vengono acquisiti secondo la struttura definita dal dizionario;
- vengono eseguiti controlli di formato e coerenza di base;
- i dati restano isolati dall’ambiente produttivo.

Questa separazione riduce il rischio operativo e consente di intercettare anomalie prima che impattino le analisi e la reportistica.

## Come operare

1. Avanzare alla fase **Caricamento in Staging**
2. Avviare il caricamento dei dati sorgente
3. Verificare l’esito del caricamento preliminare

---

# F03 – Integrità Referenziale

## Scopo della funzione

La funzione **F03 – Integrità Referenziale** verifica la **coerenza logica e relazionale** dei dati caricati in staging.

Questa fase assicura che le relazioni tra entità, chiavi e domini siano rispettate.

## Descrizione dettagliata

Il sistema esegue controlli automatici su:
- relazioni tra tabelle;
- chiavi primarie e chiavi esterne;
- coerenza dei valori di riferimento;
- completezza dei campi obbligatori.

Eventuali anomalie vengono evidenziate, consentendo all’utente di intervenire prima del consolidamento finale.

## Come operare

1. Avviare la verifica di integrità referenziale
2. Analizzare eventuali segnalazioni di errore
3. Correggere i dati sorgente, se necessario

---

# F04 – Aggregazione Intelligente

## Scopo della funzione

La funzione **F04 – Aggregazione Intelligente** consente di consolidare e arricchire i dati validati, rendendoli pronti per l’analisi e la reportistica GRC.

Questa fase rappresenta il passaggio dal dato operativo al **dato informativo**.

## Descrizione dettagliata

Durante l’aggregazione:
- i dati vengono normalizzati e consolidati;
- vengono calcolate metriche e indicatori;
- il dataset finale viene preparato per le successive fasi di analisi avanzata e reporting.

I dati aggregati alimentano dashboard, analisi di rischio, indicatori di compliance e report regolamentari.

## Come operare

1. Avviare la fase di aggregazione intelligente
2. Attendere il completamento dell’elaborazione
3. Procedere con le fasi successive (analisi ML, produzione, aggiornamenti)

---

## Risultato per l’utente

L’utilizzo delle funzioni **F01–F04 – Integrazione Dati** consente di:
- garantire qualità e coerenza dei dati ICT;
- ridurre errori nelle analisi GRC;
- supportare decisioni basate su informazioni affidabili;
- alimentare in modo strutturato dashboard e report regolamentari.
