---
id: fornitori-due-diligence
title: Fornitori Due Diligence
sidebar_label: Fornitori Due Diligence
---

# Manuale Utente – Fornitori Due Diligence

## Introduzione alla Funzione

La funzione **Fornitori Due Diligence** supporta il processo di valutazione strutturata dei fornitori ICT attraverso l’analisi di indicatori finanziari, ESG, reputazionali e di conformità.
La funzionalità consente di raccogliere, consultare e calcolare uno scoring complessivo del fornitore, utile per le attività di Vendor Risk Management, per la classificazione del rischio e per il supporto alle decisioni di sourcing e outsourcing ICT.

La funzione è utilizzata in conformità alle normative di riferimento (es. DORA, linee guida EBA e disposizioni Banca d’Italia) e contribuisce a garantire un presidio continuo del rischio di terze parti.

## Schermate di riferimento

### Consultazione dati – Elenco Fornitori

![](/img/fornitori-due-diligence/Consultazione dati.png)

### Valutazione Fornitore – Indicatori e Calcolo Scoring

![](/img/fornitori-due-diligence/Financial Indicators.png)

## Attributi Chiave

### 1) Header e controlli comuni di piattaforma

In alto nella schermata sono sempre presenti:
- Nome Ente
- Icone Home e Menu (a sinistra)
- Titolo della funzione “Fornitori Due Diligence”
- Email utente e Ruolo applicativo (a destra)

### 2) Sezione Ricerca – Fornitori

La sezione **Ricerca** consente di filtrare l’elenco dei fornitori tramite:
- **Nome Fornitore**: selezione del fornitore
- **Component L1**: componente organizzativa o categoria principale
- **Valutazione Fornitore**: punteggio o classe di valutazione
- **Anno**: anno di riferimento della valutazione
- **Cerca**: campo testuale per ricerca libera

I filtri applicati aggiornano dinamicamente l’elenco sottostante.

### 3) Tabella Elenco Fornitori

La tabella mostra l’elenco dei fornitori valutabili. Le principali colonne sono:
- Tipo Asset
- Nome Fornitore
- Component L1
- Cd Fornitore
- Cd Comp
- Valutazione Fornitore
- Anno

Ogni riga rappresenta un fornitore con una valutazione associata per l’anno selezionato.

### 4) Sezione Valutazione Fornitore

La schermata di valutazione consente di analizzare e calcolare lo scoring del fornitore tramite diverse dimensioni:

- **Financial**: indicatori economico-finanziari
- **ESG**: indicatori ambientali, sociali e di governance
- **Reputational**: rischio reputazionale
- **CERT**: certificazioni e requisiti di conformità

Sono inoltre presenti i seguenti campi riepilogativi:
- **Totale**: punteggio complessivo calcolato
- **Classe di Rischio**: classificazione finale del rischio del fornitore
- **Note**: campo testuale per osservazioni qualitative

Il pulsante **Calcola** avvia il calcolo dello scoring complessivo sulla base degli indicatori inseriti.

## UXD della Funzione

- Accesso dalla sezione Fornitori / Vendor Risk
- Flusso principale:
  1. Ricerca e selezione del fornitore
  2. Consultazione dell’elenco fornitori
  3. Accesso alla scheda di valutazione
  4. Inserimento o aggiornamento indicatori
  5. Calcolo dello scoring e della classe di rischio

L’interfaccia guida l’utente nella compilazione e rende immediatamente visibile il risultato della valutazione.

## Informazioni Associate alla Funzione

### Input
- Anagrafica fornitori
- Indicatori finanziari
- Indicatori ESG
- Informazioni reputazionali
- Certificazioni e requisiti di compliance

### Relazioni
- Collegamento con Vendor Management
- Collegamento con Risk Assessment ICT
- Supporto ai processi di outsourcing e third-party risk

### Output
- Valutazione strutturata del fornitore
- Classe di rischio assegnata
- Evidenze utilizzabili per audit e controlli

## Istruzioni sull’Uso della Funzione

1. Accedere alla funzione **Fornitori Due Diligence**
2. Applicare i filtri nella sezione Ricerca per individuare il fornitore
3. Selezionare il fornitore dall’elenco
4. Accedere alla sezione di valutazione
5. Compilare o aggiornare gli indicatori disponibili
6. Selezionare **Calcola** per ottenere il punteggio totale e la classe di rischio
7. Inserire eventuali note qualitative a supporto della valutazione

## Regole di Calcolo della Funzione

- Il punteggio **Totale** è calcolato aggregando i valori delle singole dimensioni (Financial, ESG, Reputational, CERT)
- La **Classe di Rischio** è determinata sulla base di soglie configurabili associate al punteggio totale
- Le regole di ponderazione e le soglie possono essere definite a livello di configurazione della piattaforma
