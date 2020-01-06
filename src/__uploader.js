import React, { useState, useRef, useEffect } from 'react';
import JSZip from 'jszip';
//import fs from 'fs';
import { parseString } from 'whatsapp-chat-parser';

import Dropzone from './components/Dropzone/Dropzone';
import MessageViewer from './components/MessageViewer/MessageViewer';
import Credits from './components/Credits/Credits';
import * as S from './style';

import useDebounce from './hooks/useDebounce';

import exampleChat from './assets/whatsapp-chat-example.zip';
//import initialChat from './assets/_chat.txt';

const showError = (message, err) => {
  console.error(err || message); // eslint-disable-line no-console
  alert(message); // eslint-disable-line no-alert
};

const App = () => {
  const [messages, setMessages] = useState([]);
  const [messagesLimit, setMessagesLimit] = useState(5000);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeButtonRef = useRef(null);
  const openButtonRef = useRef(null);
  const isFirstRender = useRef(true);

  const starWars = ["Yoda","General Crix Madine","Shu Mai","Malakili (Rancor Keeper)","Baze Malbus","Mama the Hutt","Ody Mandrell","Darth Maul","Saelt-Marae (Yak Face)","Mawhonic","Droopy McCool","Pharl McQuarrie","ME-8D9","Lyn Me","Tion Medon","Del Meeko","Aks Moe","Sly Moore","Morley","Moff Delian Mors","Mon Mothma","Admiral Conan Antonio Motti","A'Koba","Admiral Gial Ackbar","Sim Aloo (Imperial Dignitary)","Almec","Mas Amedda","Amee","Padm√© Amidala","Cassian Andor","Fodesinbeed Annodue","Raymus Antilles","Wedge Antilles","AP-5","Queen Apailana","Sergeant Appo (CC-1119)","Doctor Chelli Lona Aphra","Faro Argyus","Aiolin and Morit Astarte","Ello Asty","Attichitcuk","AZI-3","Ponda Baba (Walrus Man)","Kitster Banai","Cad Bane","Darth Bane","Barada","Jom Barell","Moradmin Bast","BB-8","BB-9E","Tobias Beckett","Val Beckett","The Bendu","Shara Bey","Sio Bibble","Depa Billaba","Jar Jar Binks","Temiri Blagg","Commander Bly","Bobbajo","Dud Bolt","Mister Bones","Lux Bonteri","Mina Bonteri","Borvo the Hutt","Bossk","Ezra Bridger","BT-1 (a.k.a. Bee-Tee)","Sora Bulq","C1-10P (a.k.a. Chopper)","C-3PO","Lando Calrissian","Captain Moden Canady","Ransolm Casterfo","Chewbacca","Chief Chirpa","Rush Clovis","Commander Cody","Lieutenant Kaydel Ko Connix","Captain Jeremoch Colton","Cord√©","Salacious B. Crumb","Arvel Crynyd","Dr. Cylo","Commander Larma D'Acy","Figrin D'an","Kes Dameron","Poe Dameron","Vober Dand","Joclad Danva","Dapp","Biggs Darklighter","General Oro Dassyne","Gizor Dellso","Dengar","Bren Derlin","Ima-Gun Di","Rinnrivin Di","Tan Divo","DJ","Lott Dod","Jan Dodonna","Daultay Dofine","Lushros Dofine","Dogma","Count DookuDarth Tyranus","Dorm√©","Cin Drallig","Garven Dreis (a.k.a. Red Leader)","Droidbait (CT-00-2010)","Rio Durant","Lok Durd","Eirta√©","Dine√© Ellberger","Ell√©","Caluan Ematt","Embo","Emperor's Royal Guard","Jas Emari","Ebe E. Endocott","Galen Erso","Jyn Erso","Lyra Erso","EV-9D9","Moralo Eval","Doctor Cornelius Evazan","Onaconda Farr","Boba Fett","Jango Fett","Feral","Commander Fil","Finn","Kit Fisto","Clone Trooper Fives","FN-1824","FN-2003 (a.k.a. Slip)","FN-2199 (a.k.a. Nines)","Bib Fortuna","Commander Fox","FX-7","GA-97","Adi Gallia","Gardulla the Hutt","Yarna d'al' Gargan","Garindan (a.k.a. Long Snoot)","Gasgano","Saw Gerrera","Gonk droid (a.k.a. GNK power droid)","Commander Gree","Greedo","Janus Greejatus","Captain Gregor","General Grievous","Grummgar","Gungi","Nute Gunray","Mars Guo","Rune Haako","Hardcase","Rako Hardeen","Gideon Hask","Hevy","San Hill","Clegg Holdfast","Vice Admiral Amilyn Holdo","Tey How","Huyang","Armitage Hux","Brendol Hux","IG-88","Chirrut √émwe","Inquisitors (Inquisitorius)","Grand Inquisitor","Inquisitor: Fifth Brother","Inquisitor: Sixth Brother","Inquisitor: Seventh Sister","Inquisitor: Eighth Brother","Sidon Ithano","Jabba the Hutt","Queen Jamillia","Wes Janson","Kanan Jarrus","Jaxxon","Greeata Jendowanian","Moff Tiaan Jerjerrod","Commander Jet","Dexter Jettster","Qui-Gon Jinn","Jira","Jubnuk","K-2SO","Tee Watt Kaa","General Kalani","Agent Kallus","Harter Kalonia","Maz Kanata","Colonel Kaplan","Karbin","Karina the Great","Alton Kastle","King Katuunko","Coleman Kcaj","Obi-Wan Kenobi","Ki-Adi-Mundi","Klaatu","Klaud","Klik-Klak","Derek Hobbie Klivian","Agen Kolar","Plo Koon","Eeth Koth","Sergeant Kreel","Pong Krell","Orson Krennic","Black Krrsantan","Bo-Katan Kryze","Satine Kryze","Conder Kyl","Thane Kyrell","L3-37","L'ulo L'ampar","Aito Laff","Beru Whitesun Lars","Cliegg Lars","Owen Lars","Cut Lawquane","Tasu Leech","Xamuel Lennox","Tallissan Tallie Lintra","Slowen Lo","Lobot","Logray","Lumat","General Crix Madine","Shu Mai","Malakili (Rancor Keeper)","Baze Malbus","Mama the Hutt","Ody Mandrell","Darth Maul","Saelt-Marae (Yak Face)","Mawhonic","Droopy McCool","Pharl McQuarrie","ME-8D9","Lyn Me","Tion Medon","Del Meeko","Aks Moe","Sly Moore","Morley","Moff Delian Mors","Mon Mothma","Admiral Conan Antonio Motti","Jobal Naberrie","Pooja Naberrie","Ruwee Naberrie","Ryoo Naberrie","Sola Naberrie","Momaw Nadon (Hammerhead)","Boss Rugor Nass","Captain Lorth Needa","Queen Neeyutnee","Enfys Nest","Bazine Netal","Niima the Hutt","Jocasta Nu","Po Nudo","Nien Nunb","Has Obbit","Barriss Offee","Hondo Ohnaka","Ric Oli√©","Omi","Ketsu Onyo","Oola","OOM-9","Savage Opress","Bail Organa","Queen Breha Organa","Leia Organa","Garazeb Zeb Orrelios","Orrimaarko (Prune Face)","Admiral Kendal Ozzel","Odd Ball","Pablo-Jill","Teemto Pagalies","Jessika Jess Testor Pava","Sheev PalpatineDarth Sidious","Captain Quarsh Panaka","Casca Panzoro","Reeve Panzoro","Baron Papanoida","Che Amanwe Papanoida","Chi Eekway Papanoida","Paploo","Captain Phasma","Even Piell","Admiral Firmus Piett","Darth Plagueis","Sarco Plank","Unkar Plutt","Poggle the Lesser","Yarael Poof","Jek Tono Porkins","Nahdonnis Praji","Governor Arihnda Pryce","PZ-4CO","R2-D2","R2-KT","R3-S6","R4-P17","R5-D4","RA-7 (Death Star droid)","Rab√©","Admiral Raddus","Dak Ralter","Oppo Rancisis","Admiral Dodd Rancit","Rappertunie","Sinjir Rath Velus","Gallius Rax(a.k.a. The Operator)","Eneb Ray","Max Rebo","Ciena Ree","Ree-Yees","Kylo Ren","Captain Rex","Rey","General Carlist Rieekan","Riley","Rogue Squadron","Romba","Bodhi Rook","Pagetti Rook (Weequay)","Rotta the Hutt","Rukh","Sab√©","Sach√©","Admiral U.O. Statura","Joph Seastriker","Queen Miraj Scintel","Admiral Terrinald Screed","Sebulba","Aayla Secura","Korr Sella","Zev Senesca","Echuu Shen-Jon","Sifo-Dyas","Aurra Sing","Anakin SkywalkerDarth Vader","Luke Skywalker","Shmi Skywalker","Rae Sloane","The Smuggler","Snaggletooth","Supreme Leader Snoke","Sy Snootles","Osi Sobeck","Han Solo","Greer Sonnel","Sana Starros","Lama Su","Shriv Suurgav","Mercurial Swift","Gavyn Sykes","Cham Syndulla","Hera Syndulla","Jacen Syndulla","Orn Free Taa","General Cassio Tagge","Mother Talzin","Wat Tambor","Riff Tamson","Ahsoka Tano","Tarfful","Jova Tarkin","Grand Moff Wilhuff Tarkin","Captain Roos Tarpals","TC-14","Berch Teller","Teebo","Teedo","Mod Terrik","Tessek (Squid Head)","Lor San Tekka","Petty Officer Thanisson","Inspector Thanoth","Lieutenant Thire","Grand Admiral Thrawn","C'ai Threnalli","Shaak Ti","Paige Tico","Rose Tico","Saesee Tiin","Bala-Tik","Tikkes","Meena Tills","Quay Tolsite","Bargwill Tomder","Wag Too","Coleman Trebor","Admiral Trench","Strono Tuggs","Clone Trooper Tup","Letta Turmond","Longo Two-Guns","Captain Gregar Typho","Ratts Tyerell","Finis Valorum","Eli Vanto","Nahdar Vebb","General Maximilian Veers","Asajj Ventress","Evaan Verlaine","Garrick Versio","Iden Versio","Chancellor Lanever Villecham","Dr. Nuvo Vindi","Pre Vizsla","Tulon Voidgazer","Dryden Vos","Quinlan Vos"];
  const participants = [];
  shuffle(starWars);

  //const fileContents = fs.readFileSync({initialChat}, 'utf8');

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // const loginconsole = file => {
  //   console.log('msg: ' + file);
  // };

  function saveParsedMessages(messages) {
  	console.log(messages.length);

  	var sQuizPointers = [];
  	var eQuizPointers = [];

  	var quizzes = [];
  	var quiz = {};

  	var i = 0;

  	var hasQuizStarted = false;

  	for (var msg of messages) {
  		msg.date = msg.date + "";
  		if(!(msg.author === 'System')) {
  			msg.author = getCharactorName(msg.author);
  		}

  		/* ==== Has attachment? ===== */
  		if(msg.message.search(/(file attached)/g) > 0) {
  			msg.hasAttachment = true;
  		} else {
  			msg.hasAttachment = false;
  		}

  		if(msg.message.search(/#startquiz/g) >= 0) {
  			sQuizPointers.push(i);
  			hasQuizStarted = true;
  			quiz.start = i;
  		}
  		if(msg.message.search(/#endquiz/g) >= 0) {
  			eQuizPointers.push(i);
  			if(hasQuizStarted) {
  				quiz.end = i;
  				hasQuizStarted = false;
  				quizzes.push(quiz);
  				quiz = {};
  			}
  		}

  		/* ==== Is Question? ===== */
  		msg.isQuestion = isMessageQuestion(msg.message);
  		i++;
  	}

  	if(hasQuizStarted) {
  		quiz.end = messages.length - 1;
  		hasQuizStarted = false;
  		quizzes.push(quiz);
  	}

  	// var quizzes = getQuizRanges(sQuizPointers,eQuizPointers);

  	if(quizzes.length >= 1) {
  		var lastQuiz = quizzes[quizzes.length - 1];
  		messages = messages.slice(lastQuiz.start, lastQuiz.end + 1);
  		// for(var i=0; i<quizzes.length; i++) {

  		// }
  	}

 //  	var min = Math.min(sQuizPointers.length, eQuizPointers.length) - 1;
	// if(sQuizPointers[min] < eQuizPointers[min]) {
	// 	messages = messages.slice(sQuizPointers[min], eQuizPointers[min]+1);
	// 	// messages = messages.slice(sQuizPointers[0], eQuizPointers[min]+1);
	// }

  	var jsonFile = new Blob([JSON.stringify(messages)], {
		type: 'application/json'
	});
  	exportDataToFile(jsonFile, '__chat.json');
  	setMessages(messages);
  	console.log(messages);

  }

  function getQuizRanges(startPoints, endPoints) {

  	var quizzes = [];
  	var quiz = {};

  	for(var i=0; i<endPoints.length; i++) {
  		for(var j=1; startPoints.length; j++) {
  			if((endPoints[i] > startPoints[j-1]) && (endPoints[i] < startPoints[j])) {
  				quiz.start = startPoints[j-1];
  				quiz.end = endPoints[i];
  				quizzes.push(quiz);
  			}
  		}
  	}

  	return quizzes;

  }

  function getCharactorName(participant) {
  	if(participants.indexOf(participant) < 0) {
  		participants.push(participant);
  	}
  	return (starWars[participants.indexOf(participant)]);
  }

  function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

  function isMessageQuestion(msg) {
    var q_elements = ["who", "what", "when", "where", "why", "how", "identify", "id", "\\?", "fact"];
    var q_starters = ["which", "won't", "can't", "isn't", "aren't", "is", "do", "does", "will", "can"];
    var temp = msg.toLowerCase();
    var trustScore = 0;

    
    for (var i=0; i<q_elements.length; i++) {
    	var regex = new RegExp(q_elements[i], "g");
    	// trustScore =+ (temp.match(regex) || []).length;
    	if((temp.match(regex) || []).length > 0) {
    		trustScore++;
    	}
    }

    // for (var j=0; j<q_starters.length; j++) {
    // 	if(temp.search(q_starters[j])) {
    // 		trustScore--;
    // 	}
    // }

    if(trustScore > 2) {
    	//console.log("Possible Question: " + msg);
    	return true;
    }

  	return false;
  }

	/**
	* @param {Blob} file - File or Blob object. This parameter is required.
	* @param {string} fileName - Optional file name e.g. "image.png"
	*/
	function exportDataToFile(file, fileName) {
	    if (!file) {
	        throw 'Blob object is required.';
	    }

	    if (!file.type) {
	        try {
	            file.type = 'video/webm';
	        } catch (e) {}
	    }

	    var fileExtension = (file.type || 'video/webm').split('/')[1];

	    if (fileName && fileName.indexOf('.') !== -1) {
	        var splitted = fileName.split('.');
	        fileName = splitted[0];
	        fileExtension = splitted[1];
	    }

	    var fileFullName = (fileName || (Math.round(Math.random() * 9999999999) + 888888888)) + '.' + fileExtension;

	    if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
	        return navigator.msSaveOrOpenBlob(file, fileFullName);
	    } else if (typeof navigator.msSaveBlob !== 'undefined') {
	        return navigator.msSaveBlob(file, fileFullName);
	    }

	    var hyperlink = document.createElement('a');
	    hyperlink.href = URL.createObjectURL(file);
	    hyperlink.download = fileFullName;

	    hyperlink.style = 'display:none;opacity:0;color:transparent;';
	    (document.body || document.documentElement).appendChild(hyperlink);

	    if (typeof hyperlink.click === 'function') {
	        hyperlink.click();
	    } else {
	        hyperlink.target = '_blank';
	        hyperlink.dispatchEvent(new MouseEvent('click', {
	            view: window,
	            bubbles: true,
	            cancelable: true
	        }));
	    }

	    (window.URL || window.webkitURL).revokeObjectURL(hyperlink.href);
	}

  const processFile = file => {
    //loginconsole(file);

    if (!file) return;

    const reader = new FileReader();

    if (file.type === 'application/zip') {
      reader.onloadend = e => {
        const arrayBuffer = e.target.result;
        const jszip = new JSZip();

        jszip
          .loadAsync(arrayBuffer)
          .then(({ files }) => {
            const txtFiles = Object.entries(files).filter(([fileName]) =>
              fileName.endsWith('.txt'),
            );

            if (!txtFiles.length) {
              throw new Error('No txt files found in archive');
            }

            return txtFiles
              .sort(([a], [b]) => a.length - b.length)[0][1]
              .async('string');
          })
          .then(parseString)
          .then(setMessages)  
          .catch(showError);
      };
      reader.readAsArrayBuffer(file);
    } else if (file.type === 'text/plain') {
      reader.onloadend = () =>
        parseString(reader.result)
          //.then(setMessages)
          .then( messages => {
          	saveParsedMessages(messages);
          })
          .catch(err =>
            showError('An error has occurred while parsing the file', err),
          );
      reader.readAsText(file);
    } else {
      showError(`File type ${file.type} not supported`);
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      //processFile({fileContents});
      //console.log('initialChat: ' + {initialChat});

      return;
    }

    if (isMenuOpen) closeButtonRef.current.focus();
    else openButtonRef.current.focus();
  }, [isMenuOpen]);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  useEffect(() => {
    const keyDownHandler = e => {
      if (e.keyCode === 27) closeMenu();
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  }, []);

  return (
    <>
      <S.GlobalStyles />
      <S.Container>
        <S.Header>
          <Dropzone onFileUpload={processFile} id="dropzone" />
          <span>OR</span>
          <a href={exampleChat} download>
            Download example chat
          </a>
        </S.Header>
        <MessageViewer
          messages={messages}
          limit={useDebounce(messagesLimit, 5000)}
        />
        <S.MenuOpenButton type="button" onClick={openMenu} ref={openButtonRef}>
          Open menu
        </S.MenuOpenButton>
        <S.Overlay
          type="button"
          isActive={isMenuOpen}
          onClick={closeMenu}
          tabIndex="-1"
        />
        <S.Sidebar isOpen={isMenuOpen}>
          <S.MenuCloseButton
            type="button"
            onClick={closeMenu}
            ref={closeButtonRef}
          >
            Close menu
          </S.MenuCloseButton>
          <S.SidebarContainer>
            <S.Field>
              <S.Label htmlFor="limit">Messages limit</S.Label>
              <S.Input
                id="limit"
                type="number"
                min="0"
                max={messages.length}
                value={messagesLimit}
                onChange={e =>
                  setMessagesLimit(parseInt(e.currentTarget.value, 10))
                }
              />
              <S.InputDescription>
                A high number may freeze the page for a while, change this with
                caution
              </S.InputDescription>
            </S.Field>

            <div>
              <Credits />
            </div>
          </S.SidebarContainer>
        </S.Sidebar>
      </S.Container>
    </>
  );
};

export default App;