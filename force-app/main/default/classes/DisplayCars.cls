/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 08-08-2022
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public class DisplayCars {
    @AuraEnabled (cacheable=true)
    public static List<Account> getAccounts(){
        try {
            List<Account> filteredList=[select id, name, trim__c, model__c, type__c, Active__c from Account where trim__c!='' and createdDate=Today ];
             System.debug('filteredList'+filteredList);
            return filteredList;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
