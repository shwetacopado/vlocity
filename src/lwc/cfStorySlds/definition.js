let definition = 
                {"Cards":["Campaign Story LWC","Case Story LWC","Claim Story LWC","Customer Interaction Story LWC","Event Story LWC","Non Held Policy Story LWC","Note Story LWC","Opportunity Story LWC","Policy Story LWC","Saved OmniScript Story LWC","Task Story LWC","Order Story LWC"],"GlobalKey__c":"story-slds/5/Vlocity/1576740040205","componentName":"cfStorySlds","dataSource":{"contextVariables":[{"name":"params.id","val":"0015Y00002iV7KXQAT"}],"orderBy":{"isReverse":"true","name":"onGoing"},"type":"ApexRemote","value":{"apexRemoteResultVar":"Stories","apexRestResultVar":"Stories","body":"{}","endpoint":"/services/apexrest/vlocity_cmt/v1/story/{{params.id}}?pageSize=10","inputMap":{"pageSize":"10","storyId":"{{params.id}}"},"interval":null,"methodType":"GET","optionsMap":{"vlcClass":"vlocity_cmt.StoryListHandler"},"remoteClass":"StoryListHandler","remoteMethod":"getStories","remoteNSPrefix":"vlocity_cmt","resultVar":"Stories","subType":"Web"}},"enableLwc":true,"lwc":{"DeveloperName":"storyCardCanvas","Id":"0Rb5Y000000G9f7CAY","MasterLabel":"storyCardCanvas","name":"storyCardCanvas"},"previewType":"runTime","repeatCards":true,"sessionVars":[{"name":"title","val":"Customer Story"},{"name":"actions","val":"Case:Case,Task:Task,Order:Order,Note:Note,Campaign:Campaign,Event:Event,Opportunity:Opportunity"}],"templates":{"0":{"templateUrl":"story-card-canvas"}},"workspace":["Campaign Story LWC/Vlocity/2/1580725964438","Case Story LWC/Vlocity/2/1580726018293","Claim Story LWC/Vlocity/2/1580726061137","Customer Interaction Story LWC/Vlocity/2/1580726130174","Event Story LWC/Vlocity/2/1580726144391","Non Held Policy Story LWC/Vlocity/2/1580726148889","Note Story LWC/Vlocity/2/1580726157622","Opportunity Story LWC/Vlocity/2/1580726167009","Policy Story LWC/Vlocity/2/1580726174696","Saved OmniScript Story LWC/Vlocity/2/1567493573669","Task Story LWC/Vlocity/2/1580726190622","Order Story LWC/Vlocity/2/1580726197883"],"xmlObject":{"apiVersion":46,"isExposed":true,"masterLabel":"Vlocity Story Component","runtimeNamespace":"vlocity_cmt","targetConfigs":"CiAgICAgICAgICAgICAgICA8dGFyZ2V0Q29uZmlnIHRhcmdldHM9ImxpZ2h0bmluZ19fQXBwUGFnZSI+CiAgICAgICAgICAgICAgICA8cHJvcGVydHkgbmFtZT0icmVjb3JkSWQiIHR5cGU9IlN0cmluZyIgIC8+CiAgICAgICAgICAgICAgICAgIDwvdGFyZ2V0Q29uZmlnPgogICAgICAgICAgICAgIA==","targets":{"target":["lightning__RecordPage","lightning__AppPage","lightning__HomePage"]}}}; 
            export default definition