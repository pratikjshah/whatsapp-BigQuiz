import React from 'react';
import PropTypes from 'prop-types';

import Message from '../Message/Message';
import * as S from './style';

import { authorColors } from '../../utils/colors';

const MessageViewer = ({ messages, limit }) => {
  //console.log('In MessageViewer');
  const participants = Array.from(
    new Set(messages.map(({ author }) => author)),
  ).filter(author => author !== 'System');
  var activeUserIndex = 1;
  if (participants.length > 2) {
    var min = 1;
    var max = participants.length - 1;
    activeUserIndex =  Math.floor(Math.random() * (max - min + 1) + min);
  }
  //console.log('activeUserIndex: '+ activeUserIndex + '  |  participants.length: ' + participants.length);
  const activeUser = participants[activeUserIndex];
  const colorMap = participants.reduce((obj, participant, i) => {
    return { ...obj, [participant]: authorColors[i % authorColors.length] };
  }, {});
  const renderedMessages = messages.slice(0, limit);
  const isLimited = renderedMessages.length !== messages.length;

  return (
    <S.Container>
      {messages.length > 0 && (
        <S.P>
          <S.Info>
            Showing {isLimited ? 'first' : 'all'} {renderedMessages.length}{' '}
            messages {isLimited && <span>(out of {messages.length})</span>}
          </S.Info>
        </S.P>
      )}

      <S.List>
        {renderedMessages.map((message, i, arr) => {
          const prevMessage = arr[i - 1];

          return (
            <Message
              key={i} // eslint-disable-line react/no-array-index-key
              message={message}
              date={message.date}
              color={colorMap[message.author]}
              isActiveUser={activeUser === message.author}
              isQuestion={message.isQuestion}
              hasAttachment={message.hasAttachment}
              sameAuthorAsPrevious={
                prevMessage && prevMessage.author === message.author
              }
            />
          );
        })}
      </S.List>
    </S.Container>
  );
};

MessageViewer.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      author: PropTypes.string,
      message: PropTypes.string,
      isQuestion: PropTypes.bool,
      hasAttachment: PropTypes.bool
    }),
  ).isRequired,
  limit: PropTypes.number,
};

MessageViewer.defaultProps = {
  limit: Infinity,
};

export default React.memo(MessageViewer);
