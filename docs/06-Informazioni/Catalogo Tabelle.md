---
id: mu-std8-catalogo-tabelle
title: Catalogo delle Tabelle
sidebar_label: Catalogo Tabelle
---

# Catalogo delle Tabelle

## Introduzione
Il presente catalogo descrive le tabelle del **Data Repository** di SinergIA ICT, organizzate per **Area Dati**. Per ciascuna tabella sono riportati il nome e una descrizione funzionale, coerente con il glossario e il data dictionary di piattaforma.

## Titolo Area: Asset

### Nome Tabella: Asset_Act_Org

**Descrizione Tabella**
Tabella Asset_Act_Org nell’area Asset: supporta Sinergia ICT per GRC, permettendo di registrare e collegare informazioni operative rilevanti. Contiene dati coerenti con i controlli e i processi di riferimento dell’area, abilitando reportistica e tracciabilità in ottica audit/DORA.

### Nome Tabella: Asset_Actor_User

**Descrizione Tabella**
Raccoglie informazioni sugli utenti o ruoli interni associati agli asset ICT. Serve per il tracciamento degli utilizzatori o responsabili tecnici.

### Nome Tabella: Asset_Actor_Vendor

**Descrizione Tabella**
Contiene i riferimenti ai fornitori esterni collegati a ciascun asset o servizio ICT.

### Nome Tabella: Asset_Process

**Descrizione Tabella**
Descrive i processi aziendali supportati dagli asset ICT.

### Nome Tabella: Asset__App

**Descrizione Tabella**
Raccoglie le informazioni sulle applicazioni ICT, versioni, componenti e dipendenze.

### Nome Tabella: Asset_App_Detail

**Descrizione Tabella**
Approfondisce i dettagli applicativi (versioni, componenti, licenze, ambienti).

### Nome Tabella: Asset_Node

**Descrizione Tabella**
Elenca i nodi infrastrutturali, server o host gestiti dal sistema.

### Nome Tabella: Asset_Node_Detail

**Descrizione Tabella**
Fornisce i dettagli tecnici e operativi dei nodi ICT censiti.

### Nome Tabella: Asset_User_Services

**Descrizione Tabella**
Elenca i servizi ICT forniti agli utenti finali.

### Nome Tabella: Asset_Vendor_Services

**Descrizione Tabella**
Elenca i servizi erogati da fornitori esterni.

### Nome Tabella: Asset

**Descrizione Tabella**
Tabella principale dell’inventario asset ICT.

### Nome Tabella: Asset_Relations

**Descrizione Tabella**
Gestisce le relazioni logiche e fisiche tra gli asset ICT.

### Nome Tabella: T20_Business_Process

**Descrizione Tabella**
Tabella dei processi di business. Contiene la classificazione gerarchica dei processi aziendali (Livello 1–4) e supporta l’analisi di impatto, la mappatura asset–processi e le valutazioni di rischio e resilienza in ambito DORA.


## Titolo Area: CMDB_App

### Nome Tabella: CMDB_01_App

**Descrizione Tabella**
Tabella applicativa del CMDB. Contiene l’inventario delle applicazioni ICT con le principali caratteristiche tecniche e metriche annuali (LoC, Function Points, complessità). Supporta la valutazione del rischio applicativo, la reportistica DORA e la tracciabilità degli asset software critici.


## Titolo Area: CMDB_Infra

### Nome Tabella: CMDB_02_Infra

**Descrizione Tabella**
Tabella infrastrutturale del CMDB. Raccoglie le metriche operative dei nodi e cluster ICT (CPU, storage, affidabilità, tempi di risposta) per anno e ambiente. È collegata agli asset applicativi e abilita analisi di resilienza operativa, monitoraggio delle performance e compliance DORA.


## Titolo Area: Compliance

### Nome Tabella: Compliance_AreaNorm_RifNormativi

**Descrizione Tabella**
Tabella Compliance_AreaNorm_RifNormativi nell’area Compliance: consente di associare le aree di riferimento normativo (es. DORA, GDPR, EBA ICT Guidelines) alle strutture aziendali e ai processi.

### Nome Tabella: Compliance_RifNormativi

**Descrizione Tabella**
Elenca le normative e i regolamenti ICT di riferimento applicabili all’organizzazione.

### Nome Tabella: Compliance_RifNorm_TestoNorm

**Descrizione Tabella**
Memorizza il testo o i paragrafi normativi di dettaglio.

### Nome Tabella: Compliance_Area_NormVerifiche

**Descrizione Tabella**
Mappa le verifiche di conformità previste per ciascuna area normativa.

### Nome Tabella: Compliance_ArNorm_VerifNorm_Plan

**Descrizione Tabella**
Contiene il piano annuale o periodico delle verifiche di conformità ICT.

### Nome Tabella: Compliance_Elenco_non_Conformita

**Descrizione Tabella**
Registra le non conformità individuate durante audit o self-assessment.


## Titolo Area: Config

### Nome Tabella: Config_Criteri_Class_Docs

**Descrizione Tabella**
Gestisce i criteri con cui i documenti vengono classificati nel sistema (es. tipo documento, riservatezza, stato).

### Nome Tabella: Config_Topic_SubTopic

**Descrizione Tabella**
Definisce la struttura tematica per la classificazione dei dati e dei contenuti ICT.


## Titolo Area: DataM

### Nome Tabella: DataM_Data_Map

**Descrizione Tabella**
Tabella DataM_Data_Map nell’area DataM: rappresenta la mappa delle entità informative del sistema, dei domini applicativi e dei legami logici fra tabelle.

### Nome Tabella: DataM_Data_Dictionary

**Descrizione Tabella**
Elenco strutturato di tutti i campi presenti nel database, con nome tecnico, descrizione funzionale e mapping di utilizzo.

### Nome Tabella: DataM_Domains

**Descrizione Tabella**
Gestisce le liste di valori, codici e domini di classificazione utilizzati nel database (es. tipo rischio, categoria asset, stato flusso).


## Titolo Area: Diligence

### Nome Tabella: T60_Fornitori

**Descrizione Tabella**
Anagrafica completa dei fornitori utilizzati nell’ambito della due diligence. Contiene identificativi, dati societari e collegamenti documentali utili alla valutazione dei rischi ICT e operativi.

### Nome Tabella: T61_DD_Financial_Indicators

**Descrizione Tabella**
Raccoglie gli indicatori economico-finanziari dei fornitori per anno di bilancio. Supporta le analisi di solidità, redditività e liquidità, fondamentali per la classificazione dei rischi secondo DORA.

### Nome Tabella: T62_DD_ESG_Indicators

**Descrizione Tabella**
Contiene i punteggi e le informazioni ESG dei fornitori, inclusi rating ambientali, sociali e di governance. Supporta la valutazione del rischio legato alla sostenibilità e alle politiche aziendali.

### Nome Tabella: T63_DD_Reputational_Risk

**Descrizione Tabella**
Gestisce i dati reputazionali dei fornitori, tra cui notizie negative, casi legali e fonti di monitoraggio. Serve a valutare il rischio reputazionale complessivo ai fini della classificazione DORA.

### Nome Tabella: T64_DD_Certifications

**Descrizione Tabella**
Elenco delle certificazioni tecniche e di conformità possedute dai fornitori (ISO, SOC2, ecc.). Aiuta a determinare la maturità dei controlli e il livello di affidabilità operativa.

### Nome Tabella: T65_DD_Scoring

**Descrizione Tabella**
Tabella di scoring complessivo dei fornitori, aggrega indicatori finanziari, ESG, reputazionali e certificazioni. Produce una classe di rischio DORA per ogni fornitore.


## Titolo Area: Event

### Nome Tabella: Vendors_SLA

**Descrizione Tabella**
Registra i risultati dei Service Level Agreement dei fornitori ICT, inclusi tempi di risposta, RTO, RPO, penali e giudizi di audit.

### Nome Tabella: Event_Contract_Vendors

**Descrizione Tabella**
Mappa gli eventi contrattuali relativi ai fornitori ICT, come revisioni SLA o aggiornamenti contrattuali.

### Nome Tabella: Event_Asset_Deploy_Mngt

**Descrizione Tabella**
Gestisce gli eventi di rilascio e deployment di asset o componenti ICT.

### Nome Tabella: Event_Asset_Deploy_Impacts

**Descrizione Tabella**
Contiene i dati relativi agli impatti su servizi o processi durante deployment o aggiornamenti ICT.

### Nome Tabella: Event_Asset_Deploy_Packages

**Descrizione Tabella**
Elenca i pacchetti o rilasci gestiti nei processi di deployment ICT.

### Nome Tabella: Event_ Asset_Monitoring

**Descrizione Tabella**
Registra i dati di monitoraggio delle componenti ICT e dei loro stati di disponibilità.

### Nome Tabella: Event_Incidents

**Descrizione Tabella**
Raccoglie le segnalazioni e le classificazioni di incidenti ICT.

### Nome Tabella: Event_Maintenance_Actions

**Descrizione Tabella**
Registra le attività di manutenzione correttiva, evolutiva o preventiva sugli asset ICT.

### Nome Tabella: Event_Log_Demand

**Descrizione Tabella**
Raccoglie le richieste o esigenze ICT provenienti dal business o dai piani strategici.

### Nome Tabella: Event_Log_Projects

**Descrizione Tabella**
Gestisce le informazioni sui progetti ICT in corso o pianificati.

### Nome Tabella: Event_Log_Ticket_CustoService

**Descrizione Tabella**
Traccia i ticket di assistenza o richieste utenti gestite dal Service Desk ICT.

### Nome Tabella: Event_Bgt_Costi_MD

**Descrizione Tabella**
Gestisce i dati economici e di budget ICT (man-day e costi).


## Titolo Area: Eventi Utente

### Nome Tabella: Eventi_Definizione

**Descrizione Tabella**
Questa tabella costituisce il catalogo centrale degli eventi gestiti all’interno della piattaforma Sinergia.
Ogni riga rappresenta un tipo di evento riconosciuto dal sistema, con le sue regole di generazione, i metadati descrittivi e le condizioni di attivazione.
È la fonte primaria da cui derivano tutte le altre tabelle del modulo eventi.
Contiene sia gli aspetti funzionali (nome, tipo, descrizione) sia quelli tecnici (condizioni, regole e sorgenti dati per la rilevazione).
I campi come Condizioni_Rilevamento_Evento e Tipo_Rilevazione_Evento permettono di configurare se l’evento è automatico, manuale o generato da processi di integrazione.
È possibile specificare intervalli di validità (Data_inizio_rilevazione_evento, data_fine_Rilevazione_evento) per gestire versioni temporali delle regole.
Ogni evento definito qui può essere associato a più ruoli (in TEV002) e sottoscrizioni utente (in TEV003).
In sintesi: questa tabella modella la conoscenza statica e configurabile del sistema di eventi. È l’equivalente di un “registro degli eventi rilevabili”.

### Nome Tabella: Eventi_Ruoli

**Descrizione Tabella**
La tabella Eventi_Ruoli stabilisce la relazione tra i ruoli utente e gli eventi definiti nel catalogo.
Permette di controllare chi è interessato a un determinato evento, in base alle responsabilità operative o alle funzioni ricoperte nel sistema.
Ogni record collega un evento (cd_Evento) a un ruolo (cd_Ruolo).
Serve sia per filtrare la visibilità degli eventi nel modulo notifiche, sia per automatizzare la distribuzione degli avvisi.
È utile per definire policy di alert mirate: ad esempio, i ruoli di tipo Risk Manager potranno ricevere solo eventi di categoria “Incidenti ICT”.
Il campo Data_fine_Validita_record consente di gestire storicità e variazioni organizzative (ruoli che cambiano nel tempo).
In breve, TEV002 realizza la mappatura organizzativa del sistema eventi, collegando la dimensione tecnica dell’evento a quella organizzativa dei ruoli.

### Nome Tabella: Eventi_Sottoscrizione

**Descrizione Tabella**
La tabella Eventi_Sottoscrizione registra le preferenze individuali di notifica degli utenti.
Rappresenta la connessione tra utenti reali e il catalogo eventi, ereditando i diritti dai ruoli ma consentendo personalizzazioni.
Ogni sottoscrizione specifica quali eventi un utente desidera ricevere e con quale canale (Canale_Notifica_Evento).
Le date di inizio e fine (Data_inizio_notifica_evento, Data_fine_notifica_evento) permettono di sospendere temporaneamente le notifiche.
Permette alla piattaforma di differenziare i flussi comunicativi: un CIO può ricevere via email, un analyst solo in-app.
È strettamente collegata alla tabella Eventi_Inbox (TEV005), dove le notifiche effettive vengono poi recapitate.
In sintesi: TEV003 definisce la configurazione personalizzata del sistema di notifiche, traducendo la logica dei ruoli in regole operative per utente.

### Nome Tabella: Eventi_log

**Descrizione Tabella**
La tabella Eventi_log raccoglie i record storici degli eventi realmente accaduti o registrati nel sistema.
Contiene quindi le istanze dinamiche di ciò che è stato definito in TEV001.
Ogni riga rappresenta un evento effettivo, con un proprio id_Evento univoco.
Include informazioni cronologiche (DataOra_Evento), di origine (Fonte_Evento) e il payload tecnico o funzionale (Dati_Evento).
I log permettono di ricostruire la sequenza temporale degli eventi, utile per audit, tracciabilità, AI predittiva e analisi comportamentale.
Il campo Eventi_log_Note consente di aggiungere messaggi diagnostici o contestuali (es. esito della regola di rilevazione).
È la tabella che trasforma le definizioni statiche in evidenze dinamiche, fungendo da “registro eventi” operativo e storico.
Serve anche come base dati per reporting, dashboard e motori AI di correlazione eventi.

### Nome Tabella: Eventi_Inbox

**Descrizione Tabella**
La tabella Eventi_Inbox rappresenta la coda di consegna delle notifiche verso gli utenti finali.
Ogni riga è un messaggio (notifica) visualizzabile o ricevuto da un utente, derivato da un evento reale (TEV004).
Contiene tutti i metadati utili alla rappresentazione: tipo, fonte, timestamp, dati sintetici e canale di notifica.
Permette di sapere chi ha ricevuto cosa, e se una notifica è stata archiviata o eliminata (Flag_Cancellazione_Inbox).
Può contenere il payload ridotto o mascherato dei dati dell’evento (Dati_Evento), per garantire la privacy e la contestualizzazione.
Supporta la visualizzazione in-app, l’invio di email o la sincronizzazione con sistemi di messaggistica esterni.
In sintesi: TEV005 è la vista utente del sistema di eventi, traducendo i log tecnici in notifiche leggibili e gestibili dagli attori dell’organizzazione.


## Titolo Area: Flussi Lavoro

### Nome Tabella: Ruoli

**Descrizione Tabella**
Definisce l’elenco dei ruoli operativi e gestionali utilizzati nei processi di workflow.
Ogni ruolo è associato a un insieme di permessi e responsabilità (es. redazione, approvazione, pubblicazione, validazione).
La tabella è utilizzata come base per l’attribuzione dei privilegi agli utenti e per la configurazione dei flussi di lavoro documentali.
Include campi come ID_Ruolo, NomeRuolo, Configura, Tipo_Autorizzazione.

### Nome Tabella: Utenti

**Descrizione Tabella**
Contiene le informazioni anagrafiche e organizzative degli utenti della piattaforma.
Per ogni utente vengono memorizzati l’identificativo, il nome completo, l’unità organizzativa di appartenenza, l’indirizzo email e il ruolo associato.
La tabella consente la tracciabilità delle azioni nei workflow e l’associazione diretta tra utenti, ruoli e processi ICT.
È integrata con il sistema di gestione identità (IAM/Active Directory).

### Nome Tabella: Flussi_Informativi

**Descrizione Tabella**
Rappresenta i flussi informativi e documentali che definiscono come i dati e i documenti vengono prodotti, elaborati e condivisi nella piattaforma.
Ogni flusso specifica la tipologia di informazione trattata (es. incidenti, vulnerabilità, report normativi), le fonti, i ruoli coinvolti e le modalità di distribuzione.
È utilizzato per configurare le catene informative ICT e per garantire la coerenza e tempestività delle comunicazioni ai sensi del DORA.

### Nome Tabella: Descrizione_Flussi

**Descrizione Tabella**
Contiene la descrizione dettagliata delle fasi operative di ciascun flusso informativo definito in TW03.
Per ogni flusso vengono indicati: gli step, le condizioni di attivazione, i ruoli responsabili, i tempi di esecuzione e le azioni previste.
Rappresenta la base di definizione dei workflow documentali automatizzati, consentendo la tracciabilità completa delle attività e delle approvazioni.

### Nome Tabella: Flussi_Lavoro_in_Corso

**Descrizione Tabella**
Raccoglie i dati relativi ai workflow attualmente in esecuzione o in stato intermedio.
Per ciascun flusso vengono registrati lo stato di avanzamento, l’utente attivo, le date di avvio e completamento delle singole fasi e gli eventuali errori o ritardi.
Consente di monitorare in tempo reale i processi documentali e di identificare i colli di bottiglia operativi.
È integrata con il motore di workflow per il tracking dinamico delle attività ICT.

### Nome Tabella: Flussi_Lavoro_Documenti

**Descrizione Tabella**
Tabella di collegamento tra workflow e documenti.
Permette di associare a ciascun flusso di lavoro i documenti creati, modificati o approvati durante la sua esecuzione.
Conserva informazioni su versione, stato, autore, data di pubblicazione e tipo di documento.
È fondamentale per la tracciabilità end-to-end dei processi documentali ICT, assicurando che ogni documento sia riconducibile al flusso che lo ha generato.


## Titolo Area: Kbase

### Nome Tabella: Kbase_Glossary

**Descrizione Tabella**
Contiene la definizione e classificazione dei termini, acronimi e concetti utilizzati in Sinergia ICT.

### Nome Tabella: Document Library

**Descrizione Tabella**
Archivio centrale dei documenti gestiti all’interno della piattaforma Sinergia ICT.
Raccoglie tutte le versioni dei documenti prodotti o caricati, ne conserva i metadati principali (titolo, autore, data di creazione, versione, stato di pubblicazione, categoria) e garantisce la tracciabilità delle modifiche.
Supporta le funzioni di ricerca, classificazione e audit documentale, in linea con i requisiti di compliance DORA e le normative interne ICT.
È integrata con i moduli di workflow per consentire l’accesso controllato ai documenti in base al ruolo utente.

### Nome Tabella: Library_Tipo_Documento

**Descrizione Tabella**
Contiene la classificazione delle tipologie documentali presenti nella piattaforma (es. Policy, Procedura, Piano, Report, Registro).
Ogni tipo documento è associato a regole di approvazione, template, periodicità di aggiornamento e flusso di pubblicazione.
Permette di uniformare la produzione documentale e di automatizzare la generazione dei metadati e delle versioni.
È utilizzata come riferimento nelle funzioni di workflow (WFM) e nella gestione della documentazione regolamentata.

### Nome Tabella: Tipo_Documenti_Topics

**Descrizione Tabella**
Definisce la mappatura tematica dei documenti, collegandoli ai topic e subtopic ICT (es. Business Continuity, Cybersecurity, Risk Management, Outsourcing).
Serve per organizzare i contenuti secondo un modello semantico coerente con i domini regolamentari e gestionali.
Consente di effettuare ricerche tematiche avanzate e di alimentare i report di conformità o di audit per aree ICT specifiche.

### Nome Tabella: Tipi_Documenti_Contenuti

**Descrizione Tabella**
Archivia i metadati estesi e i contenuti indicizzabili dei documenti gestiti (abstract, keywords, riferimenti normativi, indicatori di rischio collegati, allegati, link a sistemi esterni).
Supporta le funzioni di analisi semantica e AI, consentendo alla piattaforma di correlare automaticamente documenti simili o appartenenti allo stesso dominio ICT.
È utilizzata anche per la generazione automatica di sintesi e per la costruzione del knowledge graph documentale interno alla piattaforma Sinergia

### Nome Tabella: Gap_Analysis

**Descrizione Tabella**
Archivia i i risultati di una gap analysis fatti da un gap agent


## Titolo Area: Registro_Esternalizzazioni

### Nome Tabella: Registro_Esternalizza_Entity_Info

**Descrizione Tabella**
Contiene le informazioni dell’entità o gruppo soggetto a DORA.

### Nome Tabella: Registro_Esternalizza_Providers

**Descrizione Tabella**
Registra le informazioni legali e di classificazione dei fornitori ICT.

### Nome Tabella: Registro_Esternalizza_Contracts

**Descrizione Tabella**
Contiene i dati contrattuali principali e gli SLA associati.

### Nome Tabella: Registro_Esternalizza_Functions

**Descrizione Tabella**
Mappa le funzioni aziendali critiche affidate a terzi.

### Nome Tabella: Registro_Esternalizza_Service_Cats

**Descrizione Tabella**
Elenca le categorie di servizi ICT fornite dai terzi (es. SaaS, IaaS, PaaS, On-prem).

### Nome Tabella: Registro_Esternalizza_Criticality

**Descrizione Tabella**
Determina se un servizio o funzione è critico o importante.

### Nome Tabella: Registro_Esternalizza_SupplyChain

**Descrizione Tabella**
Descrive i rapporti di subfornitura fra provider e subcontractor.

### Nome Tabella: Registro_Esternalizza_Data_Locations

**Descrizione Tabella**
Specifica i paesi di trattamento e archiviazione dei dati ICT.

### Nome Tabella: Registro_Esternalizza_Security

**Descrizione Tabella**
Registra le misure tecniche e organizzative adottate dai fornitori.

### Nome Tabella: Registro_Esternalizza_Service_Levels

**Descrizione Tabella**
Raccoglie i livelli di servizio concordati (RTO, RPO, disponibilità).

### Nome Tabella: Registro_Esternalizza_Concentration

**Descrizione Tabella**
Analizza la concentrazione del rischio ICT per fornitore.

### Nome Tabella: Registro_Esternalizza_Incidents_Severe

**Descrizione Tabella**
Registra incidenti di elevata gravità legati ai servizi esternalizzati.

### Nome Tabella: Registro_Esternalizza_PIR_Incidents

**Descrizione Tabella**
Documenta le analisi post-incidente e le azioni correttive.

### Nome Tabella: Registro_Esternalizza_Audit_Testing

**Descrizione Tabella**
Gestisce le informazioni su audit, test BCP/DR e verifiche periodiche.

### Nome Tabella: Registro_Esternalizza_Data_IPR

**Descrizione Tabella**
Gestisce le informazioni su proprietà, restituzione e IPR nei contratti.

### Nome Tabella: Registro_Esternalizza_Exit

**Descrizione Tabella**
Registra i trigger, i test e le durate dei piani di uscita.

### Nome Tabella: Registro_Esternalizza_Attachments

**Descrizione Tabella**
Archivia link, note o allegati ai contratti ICT.


## Titolo Area: RiskM

### Nome Tabella: RiskM_Categoria_Rischio

**Descrizione Tabella**
Elenca le macro-categorie di rischio (es. Cyber, Operativo, Fornitore, Conformità).

### Nome Tabella: RiskM_Rischio_Evento

**Descrizione Tabella**
Descrive i tipi di eventi di rischio e le loro caratteristiche.

### Nome Tabella: RiskM_Asset_RischioEvento

**Descrizione Tabella**
Mappa la relazione tra asset e gli eventi di rischio che li coinvolgono.

### Nome Tabella: RiskM_Controllo_RischioEvento

**Descrizione Tabella**
Associa i controlli o le misure mitigative agli eventi di rischio.

### Nome Tabella: RiskM_Asset_RischioEvento_Contr

**Descrizione Tabella**
Registra le relazioni dirette tra asset, evento e controllo applicato.

### Nome Tabella: RiskM_RischioEvento_FattRischi

**Descrizione Tabella**
Collega gli eventi di rischio ai fattori scatenanti.

### Nome Tabella: RiskM_Fattori_Rischio

**Descrizione Tabella**
Elenca i fattori di rischio interni ed esterni.

### Nome Tabella: RiskM_Controllo_FattoriRischio

**Descrizione Tabella**
Associa controlli preventivi e mitigativi ai fattori di rischio.

### Nome Tabella: RiskM_Asset_FattoriRischio

**Descrizione Tabella**
Mappa i fattori di rischio applicabili a ciascun asset.

### Nome Tabella: RiskM_Asset_FattoriRischio_Contr

**Descrizione Tabella**
Dettaglia i controlli applicati su asset esposti a fattori di rischio.

### Nome Tabella: RiskM_Valutazione_RischioEvento

**Descrizione Tabella**
Raccoglie le valutazioni di probabilità, impatto e rischio residuo per ogni evento.


## Titolo Area: Test_Resilienza

### Nome Tabella: Test_Resilienza_TLTP_ICT_RiskMgmt_BCP_DR

**Descrizione Tabella**
Registra le informazioni sui piani di Business Continuity e Disaster Recovery.

### Nome Tabella: Test_Resilienza_TLTP_Incid_ICT_Reporting

**Descrizione Tabella**
Raccoglie tutti gli incidenti ICT da segnalare all’Autorità competente.

### Nome Tabella: Test_Resilienza_TLTP_Test_Resilienza

**Descrizione Tabella**
Gestisce i test di resilienza basati su scenari (Threat-Led).

### Nome Tabella: Test_Resilienza_TLTP_Info_Sharing_Art45

**Descrizione Tabella**
Registra le attività di scambio informativo con community o CSIRT.

### Nome Tabella: Test_Resilienza_TLTP_Autorita_Interazioni

**Descrizione Tabella**
Gestisce i flussi di comunicazione con autorità e supervisori.

