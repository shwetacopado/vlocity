export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"schadha-4703674665@vlocityapps.com","userId":"0055Y00000FUGijQAH","userCurrencyCode":"USD","timeStamp":"2021-03-19T05:20:54.755Z","sOmniScriptId":"a295Y000001glNPQAY","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"elementTypeToLwcTemplateMapping":{},"stepChartPlacement":"right","stylesheet":{"lightningRtl":"","lightning":"","newportRtl":"","newport":""},"disableUnloadWarn":false,"errorMessage":{"custom":[]},"consoleTabIcon":"custom:custom18","consoleTabTitle":null,"rtpSeed":false,"showInputWidth":false,"currencyCode":"","autoFocus":false,"pubsub":false,"message":{},"ssm":false,"wpm":false,"consoleTabLabel":"New","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","cancelSource":"%ContextId%","allowCancel":true,"cancelType":"SObject","visualforcePagesAvailableInPreview":{},"hideStepChart":true,"timeTracking":false,"knowledgeArticleTypeQueryFieldsMap":{},"lkObjName":null,"bLK":false,"enableKnowledge":false,"trackingCustomData":{},"seedDataJSON":{},"elementTypeToHTMLTemplateMapping":{},"autoSaveOnStepNext":false,"saveURLPatterns":{},"saveObjectId":"%ContextId%","saveContentEncoded":false,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveNameTemplate":null,"allowSaveForLater":true,"persistentComponent":[{"modalConfigurationSetting":{"modalSize":"lg","modalController":"ModalProductCtrl","modalHTMLTemplateId":"vlcProductConfig.html"},"itemsKey":"cartItems","id":"vlcCart","responseJSONNode":"","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","preTransformBundle":"","remoteOptions":{"postTransformBundle":"","preTransformBundle":""},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","label":"","render":false},{"modalConfigurationSetting":{"modalSize":"lg","modalController":"","modalHTMLTemplateId":""},"itemsKey":"knowledgeItems","id":"vlcKnowledge","postTransformBundle":"","preTransformBundle":"","remoteOptions":{"postTransformBundle":"","preTransformBundle":""},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","label":"","render":false}]},"prefillJSON":"{}","lwcId":"0ee2cbca-8492-b395-f055-315d7b1c628c","labelMap":{"TextBlock1":"orderSummary:TextBlock1","summary":"orderSummary:summary","termsConditions":"ReviewOrder:termsConditions","ReviewOrderLWC":"ReviewOrder:ReviewOrderLWC","BraintreepaymentLWC":"Payment:BraintreepaymentLWC","dcUpdateBillingAddressLWC":"UpdateBillingAddress:dcUpdateBillingAddressLWC","orderSummary":"orderSummary","SubmitOrderVIP":"SubmitOrderVIP","saveCartVIP":"saveCartVIP","ReviewOrder":"ReviewOrder","Payment":"Payment","updateAddressVIP":"updateAddressVIP","UpdateBillingAddress":"UpdateBillingAddress","setValues":"setValues","FetchAccountDetails":"FetchAccountDetails"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Integration Procedure Action","propSetMap":{"disOnTplt":false,"enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"label":"FetchAccountDetails","svgIcon":"","svgSprite":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[false,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"Step","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","extraPayload":{"AccountRecordType":"Consumer","AccountStatus":"Active"},"responseJSONNode":"accountInfo","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","preTransformBundle":"","remoteTimeout":30000,"remoteOptions":{"chainable":false,"useFuture":false,"postTransformBundle":"","preTransformBundle":""},"useContinuation":false,"integrationProcedureKey":"dc_createAccount","controlWidth":12,"aggElements":{}},"offSet":0,"name":"FetchAccountDetails","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"FetchAccountDetails","lwcId":"lwc0"},{"type":"Set Values","propSetMap":{"disOnTplt":false,"label":null,"pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[false,false],"elementValueMap":{"userName":"%accountInfo:Phone%"},"controlWidth":12,"aggElements":{}},"offSet":0,"name":"setValues","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"setValues","lwcId":"lwc1"},{"type":"Step","propSetMap":{"disOnTplt":false,"errorMessage":{"default":null,"custom":[]},"allowSaveForLater":false,"label":"Step 4: Update Addresses","chartLabel":"Step 4: Update Addresses","instructionKey":"","HTMLTemplateId":"","conditionType":"Hide if False","show":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"dataCategoryCriteria":"","keyword":"","publishStatus":"Online","language":"English"},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[false,false],"instruction":"","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":3,"nextLabel":"Next","previousWidth":0,"previousLabel":"Previous","validationRequired":true,"uiElements":{"UpdateBillingAddress":""},"aggElements":{"dcUpdateBillingAddressLWC":""}},"offSet":0,"name":"UpdateBillingAddress","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":2,"response":null,"propSetMap":{"disOnTplt":false,"label":null,"customAttributes":[],"bStandalone":false,"lwcName":"vlocity_cmt__dcUpdateBillingAddress","hide":false,"conditionType":"Hide if False","show":null,"controlWidth":12},"name":"dcUpdateBillingAddressLWC","level":1,"JSONPath":"UpdateBillingAddress:dcUpdateBillingAddressLWC","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent1":true,"lwcId":"lwc20-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"UpdateBillingAddress","lwcId":"lwc2"},{"type":"Integration Procedure Action","propSetMap":{"disOnTplt":false,"enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"label":"updateAddressVIP","svgIcon":"","svgSprite":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":{"group":{"rules":[{"data":"yes","field":"ShoppingCart:dcShoppingCart:saveCart","condition":"<>"}],"operator":"AND"}},"showPersistentComponent":[false,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"Step","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","extraPayload":{"ShippingZipCode":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:shipping:zip%","ShippingAddress":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:shipping:address%","ShippingState":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:shipping:state%","ShippingCity":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:shipping:city%","BillingZipCode":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:billing:zip%","BillingAddress":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:billing:address%","BillingState":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:billing:state%","BillingCity":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:billing:city%","AccountId":"%accountInfo:AccountId%"},"responseJSONNode":"","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","preTransformBundle":"","remoteTimeout":30000,"remoteOptions":{"chainable":false,"useFuture":false,"postTransformBundle":"","preTransformBundle":""},"useContinuation":false,"integrationProcedureKey":"dc_updateBillingDetails","controlWidth":12,"aggElements":{}},"offSet":0,"name":"updateAddressVIP","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"updateAddressVIP","lwcId":"lwc3"},{"type":"Step","propSetMap":{"disOnTplt":false,"errorMessage":{"default":null,"custom":[]},"allowSaveForLater":false,"label":"Step 5: Enter Payment Information","chartLabel":"Step 5: Enter Payment Information","instructionKey":"","HTMLTemplateId":"","conditionType":"Hide if False","show":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"dataCategoryCriteria":"","keyword":"","publishStatus":"Online","language":"English"},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[false,false],"instruction":"","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":0,"nextLabel":"Next","previousWidth":0,"previousLabel":"Previous","validationRequired":true,"uiElements":{"Payment":""},"aggElements":{"BraintreepaymentLWC":""}},"offSet":0,"name":"Payment","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":4,"response":null,"propSetMap":{"disOnTplt":false,"label":null,"customAttributes":[{"source":"%brainTreePaymentUrl%","name":"checkout-payment-url"},{"source":"%ShoppingCart:dcShoppingCart:dueToday%","name":"total"}],"bStandalone":false,"lwcName":"vlocity_cmt__dcCheckoutPayment","hide":false,"conditionType":"Hide if False","show":null,"controlWidth":12},"name":"BraintreepaymentLWC","level":1,"JSONPath":"Payment:BraintreepaymentLWC","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent2":true,"lwcId":"lwc40-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"Payment","lwcId":"lwc4"},{"type":"Step","propSetMap":{"disOnTplt":false,"message":{},"pubsub":false,"ssm":false,"wpm":false,"errorMessage":{"default":null,"custom":[]},"allowSaveForLater":false,"label":"Step 6: Review Order","chartLabel":"Step 6: Review Order","instructionKey":"","HTMLTemplateId":"","conditionType":"Hide if False","show":{"group":{"rules":[{"data":"yes","field":"ShoppingCart:dcShoppingCart:saveCart","condition":"<>"}],"operator":"AND"}},"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"dataCategoryCriteria":"","keyword":"","publishStatus":"Online","language":"English"},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[false,false],"instruction":"","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":3,"nextLabel":"Next","previousWidth":0,"previousLabel":"Previous","validationRequired":false,"uiElements":{"ReviewOrder":"","termsConditions":""},"aggElements":{"ReviewOrderLWC":""}},"offSet":0,"name":"ReviewOrder","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":5,"response":null,"propSetMap":{"disOnTplt":false,"label":null,"customAttributes":[{"source":"%accountInfo%","name":"user-info"},{"source":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:billing%","name":"billing-address"},{"source":"%UpdateBillingAddress:dcUpdateBillingAddressLWC:shipping%","name":"shipping-address"},{"source":"%Payment:BraintreepaymentLWC:transactionDetails%","name":"transaction-details"}],"bStandalone":false,"lwcName":"vlocity_cmt__dcReviewOrder","hide":false,"conditionType":"Hide if False","show":{"group":{"rules":[{"data":"yes","field":"ShoppingCart:dcShoppingCart:saveCart","condition":"<>"}],"operator":"AND"}},"controlWidth":12},"name":"ReviewOrderLWC","level":1,"JSONPath":"ReviewOrder:ReviewOrderLWC","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent3":true,"lwcId":"lwc50-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Checkbox","rootIndex":5,"response":null,"propSetMap":{"label":null,"disOnTplt":false,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"checkLabel":"By checking this box I agree to Vlocity's Terms and Conditions and Privacy Statement.","helpText":"","help":false,"defaultValue":true,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"controlWidth":12},"name":"termsConditions","level":1,"JSONPath":"ReviewOrder:termsConditions","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bCheckbox":true,"lwcId":"lwc51-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"ReviewOrder","lwcId":"lwc5"},{"type":"Integration Procedure Action","propSetMap":{"disOnTplt":false,"enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"label":null,"svgIcon":"","svgSprite":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":{"group":{"rules":[{"data":"yes","field":"ShoppingCart:dcShoppingCart:saveCart","condition":"="}],"operator":"AND"}},"showPersistentComponent":[false,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"Step","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","extraPayload":{"cartContextKey":"%ShoppingCart:dcShoppingCart:cartContextKey%","accountId":"%accountInfo:AccountId%","catalogCode":"%SelectOffer:dcChildCatalog:catalogCode%"},"responseJSONNode":"","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","preTransformBundle":"","remoteTimeout":30000,"remoteOptions":{"chainable":false,"useFuture":false,"postTransformBundle":"","preTransformBundle":""},"useContinuation":false,"integrationProcedureKey":"dc_CreateOrder","controlWidth":12,"aggElements":{}},"offSet":0,"name":"saveCartVIP","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"saveCartVIP","lwcId":"lwc6"},{"type":"Integration Procedure Action","propSetMap":{"disOnTplt":false,"enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"label":"SubmitOrderVIP","svgIcon":"","svgSprite":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":{"group":{"rules":[{"data":"yes","field":"ShoppingCart:dcShoppingCart:saveCart","condition":"<>"}],"operator":"AND"}},"showPersistentComponent":[false,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"Step","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","extraPayload":{"cartContextKey":"%ShoppingCart:dcShoppingCart:cartContextKey%","accountId":"%accountInfo:AccountId%","catalogCode":"%SelectOffer:dcChildCatalog:catalogCode%"},"responseJSONNode":"","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","preTransformBundle":"","remoteTimeout":30000,"remoteOptions":{"chainable":false,"useFuture":false,"postTransformBundle":"","preTransformBundle":""},"useContinuation":false,"integrationProcedureKey":"dc_SubmitOrder","controlWidth":12,"aggElements":{}},"offSet":0,"name":"SubmitOrderVIP","level":0,"indexInParent":7,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"SubmitOrderVIP","lwcId":"lwc7"},{"type":"Step","propSetMap":{"disOnTplt":false,"errorMessage":{"default":null,"custom":[]},"allowSaveForLater":false,"label":"Step 7: Order Submitted","chartLabel":"Step 7: Order Submitted","instructionKey":"","HTMLTemplateId":"","conditionType":"Hide if False","show":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"dataCategoryCriteria":"","keyword":"","publishStatus":"Online","language":"English"},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[false,false],"instruction":"<h1>&nbsp;</h1>","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":"3","nextLabel":"Next","previousWidth":0,"previousLabel":"Previous","validationRequired":true,"uiElements":{"orderSummary":""},"aggElements":{}},"offSet":0,"name":"orderSummary","level":0,"indexInParent":8,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text Block","rootIndex":8,"response":null,"propSetMap":{"disOnTplt":false,"sanitize":false,"label":"summary","textKey":"","HTMLTemplateId":"","dataJSON":false,"show":{"group":{"rules":[{"field":"ShoppingCart:dcShoppingCart:saveCart","condition":"<>","data":"yes"}],"operator":"AND"}},"text":"<blockquote>\n<h1><strong><span style=\"color: #000080; font-size: 20px;\">Order <code style=\"color: pink;\">%orderId%</code> submitted successully.</span></strong></h1>\n</blockquote>","controlWidth":12},"name":"summary","level":1,"JSONPath":"orderSummary:summary","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc80-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Text Block","rootIndex":8,"response":null,"propSetMap":{"controlWidth":12,"text":"<blockquote>\n<h1><strong><span style=\"color: #000080; font-size: 20px;\">Order <code style=\"color: pink;\">%orderId%</code> created and saved successully.</span></strong></h1>\n</blockquote>","show":{"group":{"rules":[{"field":"ShoppingCart:dcShoppingCart:saveCart","condition":"=","data":"yes"}],"operator":"AND"}},"dataJSON":false,"HTMLTemplateId":"","textKey":"","label":"summary","sanitize":false,"disOnTplt":false},"name":"TextBlock1","level":1,"JSONPath":"orderSummary:TextBlock1","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc81-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"orderSummary","lwcId":"lwc8"}],"bReusable":true,"bpVersion":2,"bpType":"dc","bpSubType":"lwccheckout","bpLang":"English","bHasAttachment":false,"lwcVarMap":{"brainTreePaymentUrl":null,"ShoppingCart":{"dcShoppingCart":{"dueToday":null}},"accountInfo":null,"UpdateBillingAddress":{"dcUpdateBillingAddressLWC":{"billing":null,"shipping":null}},"Payment":{"BraintreepaymentLWC":{"transactionDetails":null}}}};