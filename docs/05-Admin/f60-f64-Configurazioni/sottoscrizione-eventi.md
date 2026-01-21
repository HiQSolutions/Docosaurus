---
id: sottoscrizione-eventi
title: Sottoscrizione Eventi
sidebar_label: f61-Sottoscrizione Eventi
---

# Manuale Utente – Sottoscrizione Eventi

## Introduzione alla Funzione

La funzione **Sottoscrizione Eventi** consente di configurare e gestire le notifiche associate agli eventi definiti nel sistema SinergIA ICT, permettendo di associare utenti, ruoli e canali di comunicazione agli eventi rilevanti.

La funzionalità garantisce che i soggetti corretti vengano informati tempestivamente al verificarsi di specifici eventi, supportando i processi di incident management, risk management, compliance e controllo operativo.

## Schermate di riferimento

### Dashboard BI – Sottoscrizione Eventi

![](/img/sottoscrizioneeventi-dashboardBI.png)

### Consultazione – Sottoscrizione Eventi

![](/img/sottoscrizioneeventi-consultazionedati.png)

![](/img/sottoscrizioneeventi-consultazionedocumenti2.png)

### Editing – Sottoscrizione Eventi

![](/img/sottoscrizioneeventi-editing.png)

## Attributi Chiave

### Filtri di Ricerca

La sezione di consultazione consente di filtrare le sottoscrizioni configurate tramite:

- **Tipo Evento**
- **Tipo Rilevazione Evento**
- **Cerca**

I filtri agiscono dinamicamente sull’elenco delle sottoscrizioni.

### Colonne – Elenco Sottoscrizione Eventi

La tabella di consultazione presenta i seguenti attributi:

- **Tipo Evento**
- **Nome Evento**
- **Nome Ruolo**
- **Nome Utente**
- **Canale**
- **cd Evento**
- **Data Inizio**
- **Data Fine**

## UXD della Funzione

### Header Comune

L’header applicativo visualizza:

- Nome della funzionalità al centro
- Nome ente, email utente e icone Home/Menu a sinistra
- Ruolo applicativo a destra

### Dashboard BI

La dashboard Power BI, quando presente nella parte superiore della pagina, fornisce:

- Numero complessivo di utenti sottoscritti
- Distribuzione delle sottoscrizioni per canale di notifica
- Numero di ruoli ed eventi coinvolti

### Consultazione Dati

La sezione di consultazione consente:

- Analisi delle sottoscrizioni configurate
- Navigazione tramite elenchi tabellari
- Coerenza UX con le altre funzionalità di configurazione eventi

### Editing e Operazioni CRUD

Le operazioni disponibili sono:

- **➕ Aggiungi**  
  Creazione di una nuova sottoscrizione evento.
- **✏️ Modifica**  
  Aggiornamento di una sottoscrizione esistente.
- **🗑️ Elimina**  
  Rimozione di una sottoscrizione, previa conferma.

Le operazioni di eliminazione sono irreversibili.

## Informazioni Associate alla Funzione

### Input

- Evento da sottoscrivere
- Ruolo organizzativo
- Utente destinatario
- Canale di notifica (Email, Teams, Webhook, InApp, SMS)
- Periodo di validità della sottoscrizione

### Relazioni

- Le sottoscrizioni sono basate sugli eventi definiti nella funzione **Definizione Eventi**
- I ruoli e gli utenti determinano i destinatari delle notifiche

### Output

- Configurazione strutturata delle notifiche evento
- Tracciabilità delle sottoscrizioni attive e storiche

## Istruzioni sull’Uso della Funzione

1. Accedere alla sezione **Sottoscrizione Eventi** dal menu Configurazioni.
2. Utilizzare i filtri per individuare eventi o ruoli specifici.
3. Inserire una nuova sottoscrizione tramite l’icona **➕**.
4. Selezionare evento, ruolo, utente e canale di notifica.
5. Definire il periodo di validità.
6. Salvare la configurazione.

## Regole di Calcolo della Funzione

La funzione non prevede regole di calcolo automatiche.  
Le notifiche vengono generate in base alle configurazioni di sottoscrizione attive e agli eventi rilevati dal sistema.
