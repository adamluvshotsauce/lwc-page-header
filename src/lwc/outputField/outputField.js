import { LightningElement, api } from 'lwc';

export default class OutputField extends LightningElement {

    @api fieldName;
    @api fieldValue;
    @api fieldLink;
    @api truncate = false;

    /******************
     * 
     * Getters
     * 
     *****************/

    get fieldClasses() {
        return this.truncate  ? 'slds-truncate' : '';
    }

    get linkify() {
        return this.fieldLink;
    }
}