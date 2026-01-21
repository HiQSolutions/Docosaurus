---
id: f05-f07-document-upload-processing
title: "F05–F07 – Document Upload & Processing"
sidebar_label: f5-f7 – Document Upload & Processing
description: "Funzioni per il caricamento, l’indicizzazione e la ricerca intelligente dei documenti tramite Azure AI Search, con supporto a gerarchie, scoring e filtri avanzati."
---

## Panoramica del modulo

Il modulo **Document Upload & Processing** consente di caricare, indicizzare e interrogare documenti normativi, procedurali e di governance tramite un motore di ricerca avanzato basato su **Azure AI Search**.

Le funzioni supportano:
- caricamento e processamento dei documenti;
- indicizzazione con gerarchie, temi e punteggi;
- consultazione della libreria documentale;
- ricerca rapida semantica e vettoriale.

Il modulo è progettato per facilitare l’accesso alle informazioni e supportare le attività di **Governance, Risk, Compliance e Audit**.

---

# F05 – Carica & Processa Documenti

## Scopo della funzione

La funzione **F05 – Carica & Processa Documenti** consente di caricare documenti e avviare il processo di indicizzazione automatica all’interno del motore di ricerca.

I documenti caricati vengono analizzati, strutturati e resi disponibili per la consultazione e la ricerca intelligente.

## Descrizione dettagliata

L’utente può:
- caricare documenti nei formati **PDF, TXT, DOCX**;
- scegliere la lingua del contenuto;
- configurare le opzioni di processamento, tra cui:
  - estrazione della gerarchia del documento;
  - applicazione dello scoring;
  - utilizzo di criteri e temi definiti a database.

Durante il processamento, il sistema esegue:
- analisi del contenuto testuale;
- classificazione per tema e sottotema;
- attribuzione di punteggi di rilevanza e confidenza.

## Schermata di riferimento

![](/img/documentuploadandprocessing-caricaeprocessa.png)

## Come operare

1. Accedere alla sezione **Carica & Processa**
2. Selezionare la lingua del documento
3. Trascinare o selezionare il file da caricare
4. Verificare le opzioni di configurazione attive
5. Avviare il processamento del documento

---

# F06 – Libreria Documenti

## Scopo della funzione

La funzione **F06 – Libreria Documenti** consente di consultare l’elenco dei documenti già indicizzati nel sistema e disponibili nel motore di ricerca.

Questa funzione rappresenta il punto di accesso centralizzato al patrimonio documentale indicizzato.

## Descrizione dettagliata

La libreria mostra:
- l’elenco dei documenti indicizzati;
- il nome del documento;
- lo stato di disponibilità nel motore di ricerca.

L’utente può verificare rapidamente quali documenti sono stati correttamente caricati e processati, assicurando la completezza della base informativa.

## Schermata di riferimento

![](/img/documentuploadandprocessing-libreriadocumenti.png)

## Come operare

1. Accedere alla sezione **Libreria Documenti**
2. Consultare l’elenco dei documenti indicizzati
3. Verificare la presenza dei documenti di interesse

---

# F07 – Ricerca Rapida

## Scopo della funzione

La funzione **F07 – Ricerca Rapida** consente di interrogare il repository documentale tramite una ricerca intelligente, combinando ricerca testuale, semantica e vettoriale.

L’obiettivo è individuare rapidamente contenuti rilevanti all’interno della documentazione indicizzata.

## Descrizione dettagliata

La funzione mette a disposizione:
- un campo di **query libera**;
- la possibilità di attivare la **ricerca vettoriale**;
- filtri avanzati per affinare i risultati, tra cui:
  - normativa di riferimento;
  - lingua;
  - capitolo/capo;
  - articolo;
  - tema e sottotema;
  - documento specifico;
  - soglie minime di importanza e confidenza;
  - numero massimo di risultati.

I risultati restituiti sono ordinati in base alla rilevanza e ai criteri di scoring applicati.

## Schermata di riferimento

![](/img/documentuploadandprocessing-ricercarapida.png)

## Come operare

1. Accedere alla sezione **Ricerca Rapida**
2. Inserire la query di ricerca
3. (Opzionale) Attivare la ricerca vettoriale
4. Impostare i filtri desiderati
5. Avviare la ricerca con **Cerca**
6. Analizzare i risultati restituiti

---

## Risultato per l’utente

Utilizzando le funzioni **F05–F07 – Document Upload & Processing**, l’utente può:
- costruire una base documentale strutturata e indicizzata;
- accedere rapidamente a documenti normativi e di governance;
- individuare informazioni rilevanti tramite ricerca intelligente;
- migliorare l’efficacia delle attività di analisi, controllo e compliance.
