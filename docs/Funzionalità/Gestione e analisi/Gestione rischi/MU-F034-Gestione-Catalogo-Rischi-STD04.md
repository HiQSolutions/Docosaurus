---
id: mu-f034-gestione-catalogo-rischi
title: Gestione Catalogo Rischi Evento e Fattori di Rischio (F034)
sidebar_label: Gestione Catalogo Rischi
---

# Gestione Catalogo Rischi Evento e Fattori di Rischio (F034)

## Introduzione alla Funzione
La funzione **Gestione Catalogo Rischi Evento e Fattori di Rischio** consente di amministrare il catalogo centralizzato dei rischi ICT all’interno della piattaforma Sinergia ICT.  
La funzione supporta le attività di Governance, Risk & Compliance permettendo di censire, consultare e mantenere allineati i **Rischi Evento** e i **Fattori di Rischio**, assicurando coerenza semantica con il data dictionary e tracciabilità nel tempo.

## Schermate di riferimento
![](/img/gestionecatalogorischieventoefattoririschio-consultazionedati.png)
![](/img/gestionecatalogorischieventoefattoririschio-consultazionedati2.png)
![](/img/gestionecatalogorischieventoefattoririschio-editing1.png)
![](/img/gestionecatalogorischieventoefattoririschio-editing2.png)

## Descrizione della Funzione
La schermata **Gestione Catalogo Rischi Evento e Fattori di Rischio** segue i pattern UXD standard di Sinergia ICT ed è articolata in sezioni di consultazione e di editing.

La sezione di **ricerca** consente di filtrare il catalogo tramite il campo **Categoria di Rischio**, permettendo di restringere la visualizzazione ai rischi afferenti a specifici domini, quali ad esempio Access Management, Cybersecurity, Continuità Operativa o Conformità. Il campo di ricerca testuale consente inoltre di individuare rapidamente uno specifico rischio o fattore.

L’**elenco dei Rischi Evento** presenta una tabella strutturata con i seguenti attributi principali:
- **Categoria Rischio**: classificazione del rischio secondo il modello GRC
- **Rischio Evento**: descrizione dell’evento di rischio potenziale
- **Tipo FR FE**: indicazione della tipologia (Rischio Evento)

In modo analogo, l’**elenco dei Fattori di Rischio** espone:
- **Categoria Rischio**: ambito di riferimento
- **Fattore Rischio**: causa o elemento che contribuisce al manifestarsi del rischio
- **Tipo FR FE**: indicazione della tipologia (Fattore di Rischio)

La selezione di un record abilita l’accesso alla sezione di **editing**, nella quale è possibile visualizzare e gestire il dettaglio informativo del rischio o del fattore selezionato.  
I campi principali includono:
- **Tipo FR FE**: distinzione tra Rischio Evento e Fattore di Rischio
- **Categoria Rischio**: dominio di appartenenza
- **Rischio Evento / Fattore Rischio**: descrizione estesa

La sezione di editing consente agli utenti autorizzati di effettuare operazioni CRUD:
- inserimento di nuovi rischi o fattori
- modifica delle informazioni esistenti
- eliminazione di elementi non più applicabili

Tutte le operazioni sono coerenti con il modello dati di Sinergia ICT e garantiscono l’allineamento con i processi di valutazione del rischio, gestione degli eventi e analisi di impatto.

Dal punto di vista informativo:
- **Input**: tassonomie di rischio, categorie GRC, definizioni di rischio e fattori
- **Output**: catalogo rischi evento e fattori di rischio aggiornato
- **Relazioni**: eventi di rischio, valutazioni di rischio, controlli, processi di continuità operativa e compliance

## Istruzioni sull’Uso
1. Accedere alla funzione **Gestione Catalogo Rischi Evento e Fattori di Rischio** dal menu applicativo.
2. Utilizzare i filtri per selezionare la categoria di rischio di interesse.
3. Consultare l’elenco dei rischi evento o dei fattori di rischio.
4. Selezionare un record per visualizzarne il dettaglio.
5. Effettuare operazioni di inserimento, modifica o cancellazione solo se autorizzati.

## Regole di Calcolo
- La classificazione **Tipo FR FE** è determinata in base alla tipologia dell’elemento censito.
- Le categorie di rischio sono definite secondo il data dictionary GRC della piattaforma.
- I dati del catalogo sono utilizzati come riferimento per i moduli di valutazione e monitoraggio del rischio.
