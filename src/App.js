import React, { useState, useRef, useEffect } from 'react';
//import JSZip from 'jszip';
//import fs from 'fs';
//import { parseString } from 'whatsapp-chat-parser';

//import Dropzone from './components/Dropzone/Dropzone';

import MessageViewer from './components/MessageViewer/MessageViewer';
import Credits from './components/Credits/Credits';
import * as S from './style';

import useDebounce from './hooks/useDebounce';

// const resources = {
//   parsedChat: require('./assets/__chat.json')
// }

//import exampleChat from './assets/whatsapp-chat-example.zip';
//import initialChat from './assets/__chat.json';

// const showError = (message, err) => {
//   console.error(err || message); // eslint-disable-line no-console
//   alert(message); // eslint-disable-line no-alert
// };

const App = () => {
  const [messages, setMessages] = useState([]);
  const [messagesLimit, setMessagesLimit] = useState(5000);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeButtonRef = useRef(null);
  const openButtonRef = useRef(null);
  const isFirstRender = useRef(true);

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

  async function getData() {
    const res = await fetch("./__chat.json");
    const data = await res.text();
    //console.log(data);
    setMessages(JSON.parse(data));
    //return this.setState({ data });
  }

  useEffect(() => {
    if (isFirstRender.current) {
      //processFile({fileContents});
      //console.log('initialChat: ' + {initialChat});
      getData();
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
      <div className="header relative">
        <div className="container relative">
        <div className="card relative">
          <div>
          <span className="quiz">BigQuiz 💬</span>
          </div>
        </div>
        </div>
      </div>
      <div className="container relative">
      <div className="card box-shadow relative">
      <S.Container>
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
      </div>
      </div>
      <div className="container relative">
        <div className="card relative footer">
          Developed with 💜 by <a href="https://pratikshah.website" target="_blank">Pratik Shah</a>
        </div>
      </div>
    </>
  );
};

export default App;
