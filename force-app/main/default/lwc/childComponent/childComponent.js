import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {

    @api name;
    @api type;
    @api trim;
    @api model;
}