import React from 'react';
import TextField from 'material-ui/lib/text-field';

// define and export our Layout component
export const Layout = ({content}) => (
    <div>
        <h1>My App</h1>
        <hr />
        <div>{content}</div>
    </div>
);

// define and export our Welcome component
export const Welcome = ({name}) => (
    <div>
        Hello, <TextField defaultValue={name} />
    </div>
);
