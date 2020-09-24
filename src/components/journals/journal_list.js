import React, { Component, component } from 'react';
import { JournalEntry } from './journal_entry';

const rawJournalData = [
    {title: 'Post One', content: 'Post content', status: 'draft'},
    {title: 'Post Two', content: 'Post content', status: 'Published'},
    {title: 'Post Three', content: 'Post content', status: 'Published'},
    {title: 'Post Four', content: 'Post content', status: 'published'},
];

// Class component
export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawJournalData,
            greeting: 'Hi there',
            isOpen: true
        };
    }

    render() {
        const journalEntries = this.state.journalData.map(journalEntry => {
            return(
                <div key={journalEntry.title}>
                    <JournalEntry
                        title={journalEntry.title}
                        content={journalEntry.content}
                        status={journalEntry.status}
                    />
                </div>
            );
        });

    return(
        <div>
            <h1>{this.props.heading}</h1>
            {journalEntries}
        </div>
    );   
    };
}