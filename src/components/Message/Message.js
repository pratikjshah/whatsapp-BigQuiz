import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

function parseDate(sDate) {
    var event = new Date(sDate);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour:'numeric', minute:'numeric', hour12: true };
    return event.toLocaleDateString('en-IN',options);
    //return event;
    //return event.toUTCString();
  }

function renderMessage(message) {
  var msg = message.message;
  if(message.hasAttachment) {
    var fileName = msg.split(" (file attached)")[0];
    var restOfMessage = msg.split(" (file attached)")[1];
    var attachment = '<img class="media" src="./media/' + fileName + '" />';
    if(fileName.indexOf("VID") === 0) {
      attachment = '<video width="auto" class="media" controls><source src="./media/' + fileName + '" type="video/mp4">Your browser does not support HTML5 video.</video>';
    }
    msg = attachment + restOfMessage;
  }
  return msg;
}

const Message = ({ message, color, isActiveUser, sameAuthorAsPrevious, isQuestion, hasAttachment }) => {
  const isSystem = message.author === 'System';
  const dateTime = parseDate(message.date);

  return (
    <S.Item
      isSystem={isSystem}
      isActiveUser={isActiveUser}
      sameAuthorAsPrevious={sameAuthorAsPrevious}
    >
      <S.Bubble isSystem={isSystem} isActiveUser={isActiveUser} isQuestion={isQuestion} hasAttachment={hasAttachment}>
        <S.Wrapper>
          {!isSystem && (
            <S.Author color={color}>{message.author}</S.Author>
          )}
          <S.Message>
            <div dangerouslySetInnerHTML={{__html: renderMessage(message)}} />
          </S.Message>
        </S.Wrapper>
        {!isSystem && (
          <S.Date dateTime={dateTime}>
            {parseDate(message.date)}
          </S.Date>
        )}
      </S.Bubble>
    </S.Item>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    date: PropTypes.string,
    author: PropTypes.string,
    message: PropTypes.string,
    isQuestion: PropTypes.bool,
    hasAttachment: PropTypes.bool
  }).isRequired,
  color: PropTypes.string,
  isActiveUser: PropTypes.bool,
  sameAuthorAsPrevious: PropTypes.bool,
};

Message.defaultProps = {
  color: 'black',
  isActiveUser: false,
  sameAuthorAsPrevious: false,
};

export default Message;
