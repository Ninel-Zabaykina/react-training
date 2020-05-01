import React from 'react';
import { action } from '@storybook/addon-actions';
import Message from './Message';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    title: 'Message',
    component: Message,
    decorators: [withKnobs]
};

export const ShowText = () => {
    const message = {
        nick: text("Nickname", "Nobody"),
        message: text("Message", "Hello everybody!")
    };
    return <Message message={message}/>;
};