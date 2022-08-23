import { LightningElement, wire, api } from 'lwc';
import getAccounts from '@salesforce/apex/DisplayCars.getAccounts';
export default class ParentComponent extends LightningElement {

    @wire(getAccounts) 
    accountsInfo;

    }

    //console.log("account Info" +accountsInfo.data);
