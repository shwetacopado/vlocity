let definition = 
                {"GlobalKey__c":"Policy Story LWC/Vlocity/2/1580726174696","dataSource":{"type":null},"enableLwc":true,"filter":{"['objAPIName']":"vlocity_cmt__Policy__c"},"states":[{"blankStateCheck":false,"collapse":true,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"},{"field":"['onGoing']","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}]},"definedActions":{"actions":[]},"disableAddCondition":false,"fields":[{"collapse":true,"editing":false,"fieldType":"standard","label":"Policy Status","name":"['subtitle']","type":"string"},{"collapse":true,"editing":false,"fieldType":"standard","label":"Policy Number","name":"['highlight']","type":"string"}],"filter":"$scope.data.status === 'active' && $scope.obj['onGoing'] == true","flyout":{"lwc":{"DeveloperName":"storyEditStateFlyout","Id":"0Rb5Y000000G9fGCAI","MasterLabel":"storyEditStateFlyout","name":"storyEditStateFlyout"}},"flyoutAttributes":[{"name":"parent","val":"$scope.obj"}],"lwc":{"DeveloperName":"storyOngoingState","Id":"0Rb5Y000000G9fHCAY","MasterLabel":"storyOngoingState","name":"storyOngoingState"},"name":"Policy Ongoing","sObjectType":"vlocity_cmt__Policy__c","templateUrl":"story-card"},{"blankStateCheck":false,"collapse":true,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"},{"field":"['onGoing']","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}]},"definedActions":{"actions":[]},"disableAddCondition":false,"fields":[{"collapse":true,"editing":false,"fieldType":"standard","label":"Policy Status","name":"['subtitle']","type":"string"},{"collapse":true,"editing":false,"fieldType":"standard","label":"Policy Number","name":"['highlight']","type":"string"}],"filter":"$scope.data.status === 'active' && $scope.obj['onGoing'] == false","flyout":{"lwc":{"DeveloperName":"storyEditStateFlyout","Id":"0Rb5Y000000G9fGCAI","MasterLabel":"storyEditStateFlyout","name":"storyEditStateFlyout"}},"flyoutAttributes":[{"name":"parent","val":"$scope.obj"}],"lwc":{"DeveloperName":"storyNormalState","Id":"0Rb5Y000000G9fICAI","MasterLabel":"storyNormalState","name":"storyNormalState"},"name":"Policy","sObjectType":"vlocity_cmt__Policy__c","templateUrl":"story-card"}],"title":"Policies"}; 
            export default definition