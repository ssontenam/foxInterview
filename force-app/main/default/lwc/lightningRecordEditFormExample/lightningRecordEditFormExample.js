import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class createRecordForm extends LightningElement {
accountId;
handleSuccess(event) {
    this.accountId = event.detail.id;
    console.log('line 7');
    const toastEvent = new ShowToastEvent({
        title: 'Success!',
        message: 'Account record created!',
        messageData: [
            'Salesforce',
            {
                url: 'http://www.salesforce.com/',
                label: 'here',
            },
        ],
    });
    this.dispatchEvent(toastEvent); 
    console.log('line 20');
}
}