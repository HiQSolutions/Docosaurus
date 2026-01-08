---
id: configurazione-documenti
title: Configurazione documenti
sidebar_label: Configurazione documenti
---

# Manuale Utente – Configurazione documenti

## Introduzione alla Funzione

La funzione **Configurazione documenti** consente di definire, organizzare e gestire i documenti utilizzati all’interno dei workflow di SinergIA WFM.

Attraverso questa funzionalità l’utente può:
- consultare l’elenco dei documenti configurabili,
- visualizzare e modificare i metadati del documento,
- caricare, aggiornare o rimuovere il file associato,
- rendere il documento disponibile ai processi e agli step del workflow.

La funzione costituisce un punto centrale di governo della documentazione operativa e di supporto ai processi di governance, sicurezza ICT e compliance.

## Schermate di riferimento

### Configurazione documenti – Editing

![](/img/wfmconfigurazionedocumenti-editing.png)

## Attributi Chiave

### Elenco Documenti

Nella parte sinistra della schermata è presente l’elenco dei documenti configurati.

**Elementi disponibili**
- **Campo “Cerca documento”**  
  Permette di filtrare l’elenco dei documenti tramite ricerca testuale.
- **Lista documenti**  
  Ogni voce mostra:
  - nome del documento
  - area tematica di appartenenza

La selezione di un documento aggiorna automaticamente il pannello di dettaglio.

### Dettaglio Documento

Nel pannello centrale/destra sono visualizzati i metadati del documento selezionato.

**Campi visualizzati**
- **Tipo documento**  
  Classificazione del documento (es. Report).
- **Nome documento**  
  Denominazione univoca del documento.
- **Area tematica**  
  Ambito funzionale di riferimento (es. Performance e Gestione Operativa).

## UXD della Funzione

### Header Comune

L’header applicativo è comune a tutte le funzionalità di SinergIA e include:

- **Centro**: nome della funzione
- **Sinistra**: nome ente, icone Home e Menu
- **Destra**: email utente e ruolo applicativo

### Area di Caricamento Documento

Nel pannello di dettaglio è presente l’area **Carica documento**, che consente di associare un file al documento configurato.

- L’icona a graffetta indica la possibilità di caricare un file.
- Il file caricato diventa il documento di riferimento per i workflow associati.

### Azioni di Editing

Nella parte inferiore del pannello sono disponibili le azioni CRUD:

- **➕ Aggiungi**
  - Crea una nuova configurazione documento.
- **✏️ Modifica**
  - Aggiorna i metadati o il file associato.
- **🗑️ Elimina**
  - Rimuove la configurazione del documento.

Le azioni possono richiedere conferma, in particolare per le operazioni di eliminazione.

## Informazioni Associate alla Funzione

### Input

- Definizione dei metadati del documento
- File associato al documento
- Area tematica di riferimento

### Relazioni

- I documenti configurati sono utilizzati nei workflow WFM
- Ogni documento può essere associato a più processi e step
- Integrazione con la Document Library e con la funzione **Le mie attività**

### Output

- Disponibilità dei documenti nei processi
- Aggiornamento centralizzato delle versioni documentali
- Coerenza e standardizzazione della documentazione utilizzata

## Istruzioni sull’Uso della Funzione

1. Accedere alla funzione **Configurazione documenti** dal menu WFM.
2. Utilizzare il campo **Cerca documento** per individuare il documento desiderato.
3. Selezionare un documento dall’elenco.
4. Verificare o aggiornare i metadati nel pannello di dettaglio.
5. Utilizzare **Carica documento** per associare o aggiornare il file.
6. Salvare le modifiche oppure utilizzare le azioni di aggiunta o eliminazione.

## Regole di Calcolo della Funzione

La funzione non applica regole di calcolo automatiche.  
Le informazioni visualizzate derivano dalla configurazione dei metadati e dai file associati ai documenti.
