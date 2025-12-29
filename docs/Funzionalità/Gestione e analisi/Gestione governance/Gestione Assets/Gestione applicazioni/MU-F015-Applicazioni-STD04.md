---
id: mu-f015-applicazioni
title: Applicazioni (MU-F015)
sidebar_label: Applicazioni
---

# Applicazioni (MU-F015)

## Introduzione alla Funzione
La funzione **Applicazioni** consente di consultare, analizzare e gestire il catalogo delle applicazioni ICT censite nella piattaforma Sinergia ICT.  
Supporta le attività di governance, risk management e continuità operativa permettendo agli utenti di identificare componenti critiche, valutare l’impatto operativo e monitorare indicatori chiave come il Recovery Time Objective (RTO).

## Schermate di riferimento
![](/img/Applicazioni-DashboardBI.png)
![](/img/Applicazioni-consultazionedati.png)
![](/img/Applicazioni-Dettaglioeelenco.png)
![](/img/Editing-applicazioni.png)

## Descrizione della Funzione
La schermata **Applicazioni** segue i pattern UXD standard di Sinergia ICT, con una struttura che integra analisi visuale, consultazione dati e funzionalità di editing.

Nella parte superiore è presente una **dashboard Power BI** che fornisce una vista sintetica del panorama applicativo. I principali indicatori includono il numero di domini applicativi distinti (CompName L1 e L2), il numero di componenti critiche e il valore medio di RTO espresso in ore. I grafici consentono una lettura immediata della distribuzione delle applicazioni critiche per dominio e delle relazioni tra aree funzionali, supportando l’analisi del rischio e delle dipendenze ICT.

La sezione di **consultazione dati** permette di filtrare l’elenco delle applicazioni tramite:
- **CompName L1**: dominio applicativo di primo livello
- **CompName L2**: componente o sottodominio applicativo
- **Componente Critica**: indicatore di criticità dell’applicazione

L’elenco applicazioni è organizzato in una tabella che espone attributi coerenti con il data dictionary della piattaforma:
- **Cd Comp L2**: identificativo univoco della componente
- **Asset**: tipologia di asset (es. App)
- **CompName L1 / L2**: classificazione applicativa
- **Comp. Critica**: indicazione Yes/No
- **Distrib. %**: peso percentuale dell’applicazione
- **RTO (h)**: tempo massimo di ripristino

La selezione di un record consente l’accesso al **dettaglio applicativo**, che approfondisce le informazioni operative e tecniche, tra cui funzionalità aziendali supportate, numero di programmi, localizzazione applicativa e carichi di elaborazione (CPU totale, batch e online).

La sezione di **editing** abilita, per gli utenti autorizzati, le operazioni di aggiunta, modifica ed eliminazione delle applicazioni. Le azioni sono coerenti con le regole di governance e tracciate secondo il modello dati definito.

Dal punto di vista informativo:
- **Input**: anagrafiche applicative, classificazioni di criticità, parametri di continuità operativa
- **Output**: viste analitiche, elenchi filtrati, dettaglio applicativo
- **Relazioni**: asset ICT, processi GRC, moduli di resilienza e continuità operativa

## Istruzioni sull’Uso
1. Accedere alla funzione **Applicazioni** dal menu principale.
2. Analizzare i KPI e i grafici presenti nella dashboard.
3. Applicare i filtri per restringere il perimetro di analisi.
4. Selezionare un’applicazione per visualizzarne il dettaglio.
5. Effettuare operazioni di editing solo se in possesso delle autorizzazioni.

## Regole di Calcolo
- Il **RTO medio** è calcolato come media aritmetica dei valori RTO delle applicazioni selezionate.
- Gli indicatori di criticità derivano dalle classificazioni definite nel data dictionary.
- Le aggregazioni e i KPI della dashboard rispettano i filtri attivi impostati dall’utente.
