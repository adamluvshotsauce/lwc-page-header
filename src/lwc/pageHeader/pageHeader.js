import { LightningElement, api } from 'lwc';

export default class PageHeader extends LightningElement {

    @api title;
    @api subtitle;
    @api iconName;
    @api iconSize;
    @api fields;
}