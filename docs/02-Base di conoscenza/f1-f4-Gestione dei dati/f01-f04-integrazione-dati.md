---
id: f009
title: F009 – Gestione Dati (Import / Export)
description: Manuale operativo della funzione Gestione Dati per l’importazione e l’esportazione dei dati tramite pipeline ETL e database SQL
sidebar_label: f1-4 – Gestione Dati
---

## 1. Scopo della Funzione

Le funzioni **f1-f4 – Gestione Dati** consente di governare l’intero ciclo di **importazione ed esportazione dei dati** all’interno della piattaforma **Sinergia ICT**, garantendo:

- tracciabilità dei flussi informativi  
- coerenza strutturale dei dati  
- integrità referenziale  
- supporto a processi analitici e di reporting  

La funzione è articolata in **due sotto-funzioni principali**, accessibili dal menu laterale:

- **Import** – Integrazione dati nel database
- **Export** – Estrazione controllata dei dati dal database

---

## 2. Accesso e Navigazione

L’utente accede alla funzione dal menu principale **Gestione Dati**, che presenta due azioni disponibili:

- **Import**
- **Export**

### Vista generale della funzione

![Gestione Dati – Import / Export](/img/f1-4-navigazione.png)

Da questa vista è possibile:
- selezionare la funzione desiderata
- tornare al menu principale
- operare in modo guidato sui flussi dati

---

## 3. Funzione Import – Integrazione Dati

La funzione **Import** consente di caricare dati strutturati nel sistema attraverso una **pipeline ETL controllata**, basata su database SQL.

![Importazione Dati – Pipeline ETL](/img/f1-4-import.png)

### 3.1 Configurazione Database

Prima di avviare l’importazione, l’utente deve configurare la connessione al database:

- **Server**
- **Database**
- **Utente**
- **Password**
- **Dizionario Dati associato**

È disponibile il pulsante **“Testa Connessione”** per verificare la correttezza dei parametri.

---

### 3.2 Pipeline di Importazione

L’importazione segue una pipeline strutturata in **7 fasi sequenziali**:

1. **Dizionario Dati**  
   Caricamento del file Excel contenente la definizione semantica e strutturale dei dati.

2. **Caricamento in Staging**  
   Inserimento temporaneo dei dati per controlli preliminari.

3. **Integrità Referenziale**  
   Verifica delle relazioni tra entità (chiavi, dipendenze, vincoli).

4. **Aggregazione Intelligente**  
   Applicazione di regole di consolidamento e normalizzazione.

5. **Analisi ML (opzionale)**  
   Applicazione di modelli di analisi o classificazione sui dati.

6. **Caricamento in Produzione**  
   Inserimento definitivo nel database operativo.

7. **Aggiornamenti Incrementali**  
   Gestione degli aggiornamenti successivi senza reinserimento completo.

---

### 3.3 Caricamento Dizionario Dati

Il sistema supporta:
- **Drag & Drop**
- selezione manuale file

Formati supportati:
- `.XLS`
- `.XLSX`

Limite massimo: **200 MB per file**

---

### 3.4 Funzionalità Opzionali

- **Abilita Aggregazione**  
  Permette di attivare logiche avanzate di sintesi dati durante l’import.

---

## 4. Funzione Export – Esportazione Tabelle SQL

La funzione **Export** consente di estrarre dati dal database in modo controllato e tracciato.

![Esportazione Tabelle SQL](/img/f1-4-export.png)

---

### 4.1 Configurazione Connessione

La configurazione del database avviene tramite la barra laterale e include:

- Server SQL
- Database di origine
- Utente
- Dizionario Dati associato

L’esportazione è consentita **solo dopo connessione valida**.

---

### 4.2 Selezione Tabelle

L’utente può:
- visualizzare le tabelle disponibili
- selezionare una o più tabelle
- definire l’ambito di esportazione

Il sistema segnala eventuali errori di configurazione o assenza di connessione.

---

### 4.3 Modalità di Esportazione

- **Formato di output**: CSV
- **Download diretto**
- **Registro Attività** per tracciamento operazioni

Ogni operazione di export viene registrata per finalità di audit e controllo.

---

## 5. Sicurezza e Controlli

Le funzioni f1-f4 garantiscono:

- separazione tra ambienti (staging / produzione)
- controllo accessi per utente
- tracciabilità delle operazioni
- coerenza con il Dizionario Dati ufficiale

---

## 6. Benefici Operativi

- riduzione errori di caricamento
- standardizzazione dei flussi dati
- supporto a reporting e analytics
- integrazione strutturata con sistemi esterni

---

## 7. Riepilogo Funzionalità

| Sotto-funzione | Descrizione |
|---------------|-------------|
| Import | Integrazione dati tramite pipeline ETL guidata |
| Export | Estrazione controllata di tabelle SQL in CSV |
| Dizionario Dati | Governo semantico e strutturale dei dati |
| Tracciabilità | Registro attività per audit |

---

**Fine Manuale – Funzione F009**
