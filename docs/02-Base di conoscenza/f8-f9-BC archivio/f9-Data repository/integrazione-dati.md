---
id: integrazione-dati
title: Integrazione Dati
sidebar_label: Integrazione Dati
---

# Manuale Utente – Integrazione Dati

## Introduzione alla Funzione

La funzionalità **Integrazione Dati** consente di gestire il processo di caricamento, validazione e integrazione dei dati all’interno del database SQL di SinergIA ICT tramite una pipeline ETL strutturata.

La funzione guida l’utente attraverso una sequenza ordinata di fasi, dalla mappatura del dizionario dati fino al caricamento in produzione e agli aggiornamenti incrementali, garantendo controllo, qualità e coerenza dei dati integrati.

## Schermata di riferimento

![](/img/Integrazionedati.png)

## Configurazione iniziale

Nella parte sinistra della schermata è presente il pannello di **Configurazione**, che consente di selezionare il database di destinazione.

### Database
- Campo a selezione (dropdown)
- Permette di scegliere il database SQL su cui eseguire il processo di integrazione
- Esempio: `test-sql-2`

La selezione del database è obbligatoria per l’avvio della pipeline.

## Fasi della Pipeline di Integrazione

### 1. Dizionario Dati
Fase iniziale dedicata alla **mappatura del dizionario dati**.

- Formati supportati: `.XLSX`, `.XLS`
- Dimensione massima: 200 MB

### 2. Caricamento in Staging
Caricamento preliminare dei dati nell’area di staging.

### 3. Integrità Referenziale
Verifica delle relazioni e coerenza dei dati.

### 4. Aggregazione Intelligente
Creazione di aggregazioni automatiche.

### 5. Analisi ML
Analisi opzionale tramite modelli di Machine Learning.

### 6. Caricamento in Produzione
Integrazione finale dei dati validati.

### 7. Aggiornamenti Incrementali
Gestione degli aggiornamenti successivi.

## Istruzioni operative

1. Selezionare il database
2. Caricare il dizionario dati
3. Avanzare tra le fasi
4. Completare il caricamento

## Output della Funzione

- Dati integrati nel database SQL
- Dati pronti per analisi e reporting
