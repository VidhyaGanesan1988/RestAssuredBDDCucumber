$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Skills.feature");
formatter.feature({
  "name": "SkillsAPI-Get-All, Get-Single, Post, Put \u0026 Delete",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SkillsAPI"
    },
    {
      "name": "@RunAll"
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can send get request to retrieve all skills data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SkillsAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@GetSkills"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for Skills API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_sets_request_with_authorization_for_Skills_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request for Skills API",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_sends_GET_request_for_Skills_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful Skills-GET request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_Skills_GET_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that user can send get request to retrieve single user skills data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetSingleUserSkills"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for Skills API",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends GET request for single Userid Skills from \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful Skills-GET request for Single User",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "getsingleskills",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can send get request to retrieve single user skills data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SkillsAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@GetSingleUserSkills"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for Skills API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_sets_request_with_authorization_for_Skills_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request for single Userid Skills from \"getsingleskills\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_sends_GET_request_for_single_Userid_Skills_from_and(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful Skills-GET request for Single User",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_Skills_GET_request_for_Single_User(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that user can send post request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PostSkills"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for Skills API",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends POST request for Skills with data from \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code \"201\",valid response body and json schema validated for successful Skills-POST request",
  "keyword": "Then "
});
formatter.step({
  "name": "User should get Skills database validation done",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "postskills",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can send post request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SkillsAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@PostSkills"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for Skills API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_sets_request_with_authorization_for_Skills_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends POST request for Skills with data from \"postskills\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_sends_POST_request_for_Skills_with_data_from_and(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"201\",valid response body and json schema validated for successful Skills-POST request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_Skills_POST_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get Skills database validation done",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_should_get_Skills_database_validation_done()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected header \"Content-Type\" was not \"application/json\", was \"text/html; charset\u003dutf-8\". Headers are:\nConnection\u003dkeep-alive\nServer\u003dCowboy\nDate\u003dSun, 08 Jan 2023 20:01:36 GMT\nContent-Length\u003d506\nContent-Type\u003dtext/html; charset\u003dutf-8\nCache-Control\u003dno-cache, no-store\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:139)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:182)\r\n\tat io.restassured.specification.ResponseSpecification$header$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:194)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:189)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.header(ValidatableResponseOptionsImpl.java:124)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$header(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy:184)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy)\r\n\tat stepDefinitions.SkillsStepDefinitions.user_should_get_Skills_database_validation_done(SkillsStepDefinitions.java:206)\r\n\tat ✽.User should get Skills database validation done(file:///C:/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/Features/Skills.feature:43)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Verify that User can send put request to update a user skill data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PutSkills"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for Skills API",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends PUT request to modify existing record with new skills data from \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code \"201\",valid response body and json schema validated for successful Skills-PUT request",
  "keyword": "Then "
});
formatter.step({
  "name": "User should get Skills database validation done",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "putskills",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that User can send put request to update a user skill data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SkillsAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@PutSkills"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for Skills API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_sets_request_with_authorization_for_Skills_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends PUT request to modify existing record with new skills data from \"putskills\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_sends_PUT_request_to_modify_existing_record_with_new_skills_data_from_and(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"201\",valid response body and json schema validated for successful Skills-PUT request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_Skills_PUT_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get Skills database validation done",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_should_get_Skills_database_validation_done()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected header \"Content-Type\" was not \"application/json\", was \"text/html; charset\u003dutf-8\". Headers are:\nConnection\u003dkeep-alive\nServer\u003dCowboy\nDate\u003dSun, 08 Jan 2023 20:01:39 GMT\nContent-Length\u003d506\nContent-Type\u003dtext/html; charset\u003dutf-8\nCache-Control\u003dno-cache, no-store\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:182)\r\n\tat io.restassured.specification.ResponseSpecification$header$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:189)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.header(ValidatableResponseOptionsImpl.java:124)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$header(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy:184)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy)\r\n\tat stepDefinitions.SkillsStepDefinitions.user_should_get_Skills_database_validation_done(SkillsStepDefinitions.java:206)\r\n\tat ✽.User should get Skills database validation done(file:///C:/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/Features/Skills.feature:54)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Verify that User can delete user skills record",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteSkills"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for Skills API",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends DELETE request to delete existing Userid skills \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful Skills-DELETE request",
  "keyword": "Then "
});
formatter.step({
  "name": "User should get Skills database validation done",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "deleteskills",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that User can delete user skills record",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SkillsAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@DeleteSkills"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for Skills API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_sets_request_with_authorization_for_Skills_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends DELETE request to delete existing Userid skills \"deleteskills\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_sends_DELETE_request_to_delete_existing_Userid_skills_and(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful Skills-DELETE request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_Skills_DELETE_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get Skills database validation done",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillsStepDefinitions.user_should_get_Skills_database_validation_done()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected header \"Content-Type\" was not \"application/json\", was \"text/html; charset\u003dutf-8\". Headers are:\nConnection\u003dkeep-alive\nServer\u003dCowboy\nDate\u003dSun, 08 Jan 2023 20:01:41 GMT\nContent-Length\u003d506\nContent-Type\u003dtext/html; charset\u003dutf-8\nCache-Control\u003dno-cache, no-store\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:182)\r\n\tat io.restassured.specification.ResponseSpecification$header$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:189)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.header(ValidatableResponseOptionsImpl.java:124)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$header(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy:184)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy)\r\n\tat stepDefinitions.SkillsStepDefinitions.user_should_get_Skills_database_validation_done(SkillsStepDefinitions.java:206)\r\n\tat ✽.User should get Skills database validation done(file:///C:/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/Features/Skills.feature:65)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/Features/UserSkillMapGet.feature");
formatter.feature({
  "name": "SkillMapGETAPI-Get All Skill details using various parameters",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SkillMapGetAPI"
    },
    {
      "name": "@RunAll"
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can send get request to retrieve all SkillMapGET data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SkillMapGetAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@GetSkillsMapGET"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for SkillMapGET API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.SkillMapGetStepDefinitions.user_sets_request_with_authorization_for_SkillMapGET_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request for SkillMapGET API",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.SkillMapGetStepDefinitions.user_sends_GET_request_for_SkillMapGET_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful SkillMapGET-GET request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillMapGetStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMapGET_GET_request(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c503\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$1.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat stepDefinitions.SkillMapGetStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMapGET_GET_request(SkillMapGetStepDefinitions.java:48)\r\n\tat ✽.User should get status code \"200\",valid response body and json schema validated for successful SkillMapGET-GET request(file:///C:/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/Features/UserSkillMapGet.feature:26)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Verify that user can send get request to retrieve all SkillMapGET data setting UserID as parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetSkillsMapGETUserID"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for SkillMapGET API",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends GET request for SkillMapGET API using User ID from \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful SkillMapGET-GET request using User ID",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "getskillMapUSERID",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can send get request to retrieve all SkillMapGET data setting UserID as parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SkillMapGetAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@GetSkillsMapGETUserID"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for SkillMapGET API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.SkillMapGetStepDefinitions.user_sets_request_with_authorization_for_SkillMapGET_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request for SkillMapGET API using User ID from \"getskillMapUSERID\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.SkillMapGetStepDefinitions.user_sends_GET_request_for_SkillMapGET_API_using_User_ID_from_and(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful SkillMapGET-GET request using User ID",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillMapGetStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMapGET_GET_request_using_User_ID(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c503\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$1.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat stepDefinitions.SkillMapGetStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMapGET_GET_request_using_User_ID(SkillMapGetStepDefinitions.java:68)\r\n\tat ✽.User should get status code \"200\",valid response body and json schema validated for successful SkillMapGET-GET request using User ID(file:///C:/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/Features/UserSkillMapGet.feature:32)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Verify that user can send get request to retrieve all SkillMapGET data setting SkillID as parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetSkillsMapGETSkillID"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for SkillMapGET API",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends GET request for SkillMapGET API using Skill ID from \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful SkillMapGET-GET request using Skill ID",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "getskillMapSKILLID",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can send get request to retrieve all SkillMapGET data setting SkillID as parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SkillMapGetAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@GetSkillsMapGETSkillID"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for SkillMapGET API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.SkillMapGetStepDefinitions.user_sets_request_with_authorization_for_SkillMapGET_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request for SkillMapGET API using Skill ID from \"getskillMapSKILLID\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.SkillMapGetStepDefinitions.user_sends_GET_request_for_SkillMapGET_API_using_Skill_ID_from_and(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful SkillMapGET-GET request using Skill ID",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillMapGetStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMapGET_GET_request_using_Skill_ID(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c503\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$1.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat stepDefinitions.SkillMapGetStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMapGET_GET_request_using_Skill_ID(SkillMapGetStepDefinitions.java:93)\r\n\tat ✽.User should get status code \"200\",valid response body and json schema validated for successful SkillMapGET-GET request using Skill ID(file:///C:/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/Features/UserSkillMapGet.feature:42)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/Features/Users.feature");
formatter.feature({
  "name": "UserAPI-Get-All, Get-Single, Post, Put \u0026 Delete",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UserAPI"
    },
    {
      "name": "@RunAll"
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can send get request to retrieve all user data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UserAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@GetUser"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_sets_request_with_authorization()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_sends_GET_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"200\", valid response body and json schema validated for successful GET request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_GET_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that user can send get request to retrieve single user data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetSingleUser"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends GET request for single Userid data from \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code \"200\", valid response body and json schema validated for successful single user GET request",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "getsingledata",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can send get request to retrieve single user data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@GetSingleUser"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_sets_request_with_authorization()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request for single Userid data from \"getsingledata\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_sends_GET_request_for_single_Userid_data_from_and(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"200\", valid response body and json schema validated for successful single user GET request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_single_user_GET_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that user can send post request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PostUser"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends POST request with data from \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code \"201\", valid response body and json schema validated for successful POST request",
  "keyword": "Then "
});
formatter.step({
  "name": "User should get database validation done",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "postdata",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can send post request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@PostUser"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_sets_request_with_authorization()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends POST request with data from \"postdata\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_sends_POST_request_with_data_from_and(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"201\", valid response body and json schema validated for successful POST request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_POST_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get database validation done",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_should_get_database_validation_done()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected header \"Content-Type\" was not \"application/json\", was \"text/html; charset\u003dutf-8\". Headers are:\nConnection\u003dkeep-alive\nServer\u003dCowboy\nDate\u003dSun, 08 Jan 2023 20:01:45 GMT\nContent-Length\u003d506\nContent-Type\u003dtext/html; charset\u003dutf-8\nCache-Control\u003dno-cache, no-store\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:182)\r\n\tat io.restassured.specification.ResponseSpecification$header$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:189)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.header(ValidatableResponseOptionsImpl.java:124)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$header(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy:184)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy)\r\n\tat stepDefinitions.UserStepDefinitions.user_should_get_database_validation_done(UserStepDefinitions.java:267)\r\n\tat ✽.User should get database validation done(file:///C:/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/Features/Users.feature:45)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Verify that User send put request to update a user data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PutUser"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends PUT request to modify existing record with new data from \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code \"201\", valid response body and json schema validated for successful PUT request",
  "keyword": "Then "
});
formatter.step({
  "name": "User should get database validation done",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "putdata",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that User send put request to update a user data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@PutUser"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_sets_request_with_authorization()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends PUT request to modify existing record with new data from \"putdata\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_sends_PUT_request_to_modify_existing_record_with_new_data_from_and(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"201\", valid response body and json schema validated for successful PUT request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_PUT_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get database validation done",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_should_get_database_validation_done()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected header \"Content-Type\" was not \"application/json\", was \"text/html; charset\u003dutf-8\". Headers are:\nConnection\u003dkeep-alive\nServer\u003dCowboy\nDate\u003dSun, 08 Jan 2023 20:01:47 GMT\nContent-Length\u003d506\nContent-Type\u003dtext/html; charset\u003dutf-8\nCache-Control\u003dno-cache, no-store\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:182)\r\n\tat io.restassured.specification.ResponseSpecification$header$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:189)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.header(ValidatableResponseOptionsImpl.java:124)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$header(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy:184)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy)\r\n\tat stepDefinitions.UserStepDefinitions.user_should_get_database_validation_done(UserStepDefinitions.java:267)\r\n\tat ✽.User should get database validation done(file:///C:/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/Features/Users.feature:56)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Verify that User can delete user record",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteUser"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends DELETE request to delete existing Userid \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful DELETE request",
  "keyword": "Then "
});
formatter.step({
  "name": "User should get database validation done",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "deletedata",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that User can delete user record",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@DeleteUser"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_sets_request_with_authorization()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends DELETE request to delete existing Userid \"deletedata\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_sends_DELETE_request_to_delete_existing_Userid_and(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful DELETE request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_DELETE_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get database validation done",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UserStepDefinitions.user_should_get_database_validation_done()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected header \"Content-Type\" was not \"application/json\", was \"text/html; charset\u003dutf-8\". Headers are:\nConnection\u003dkeep-alive\nServer\u003dCowboy\nDate\u003dSun, 08 Jan 2023 20:01:48 GMT\nContent-Length\u003d506\nContent-Type\u003dtext/html; charset\u003dutf-8\nCache-Control\u003dno-cache, no-store\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:182)\r\n\tat io.restassured.specification.ResponseSpecification$header$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:189)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.header(ValidatableResponseOptionsImpl.java:124)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$header(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy:184)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy)\r\n\tat stepDefinitions.UserStepDefinitions.user_should_get_database_validation_done(UserStepDefinitions.java:267)\r\n\tat ✽.User should get database validation done(file:///C:/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/Features/Users.feature:67)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/Features/UsersSkillMap.feature");
formatter.feature({
  "name": "SkillMapAPI-Get-All, Get-Single, Post, Put \u0026 Delete",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SkillMapAPI"
    },
    {
      "name": "@RunAll"
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can send get request to retrieve all SkillMap data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SkillMapAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@GetSkillMap"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for SkillMap API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_sets_request_with_authorization_for_SkillMap_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request for SkillMap API",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_sends_GET_request_for_SkillMap_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful SkillMap-GET request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMap_GET_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that user can send get request to retrieve single SkillMap data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetSingleSkillMap"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for SkillMap API",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends GET request for single Userid SkillMap from \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful single SkillMap-GET request",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "getsingleskillMap",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can send get request to retrieve single SkillMap data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SkillMapAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@GetSingleSkillMap"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for SkillMap API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_sets_request_with_authorization_for_SkillMap_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request for single Userid SkillMap from \"getsingleskillMap\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_sends_GET_request_for_single_Userid_SkillMap_from_and(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful single SkillMap-GET request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_single_SkillMap_GET_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that user can send post request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PostSkillMap"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for SkillMap API",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends POST request for SkillMap with data from \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code \"201\",valid response body and json schema validated for successful SkillMap-POST request",
  "keyword": "Then "
});
formatter.step({
  "name": "User should get SkillMap database validation done",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "postskillMap",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can send post request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SkillMapAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@PostSkillMap"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for SkillMap API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_sets_request_with_authorization_for_SkillMap_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends POST request for SkillMap with data from \"postskillMap\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_sends_POST_request_for_SkillMap_with_data_from_and(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"201\",valid response body and json schema validated for successful SkillMap-POST request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMap_POST_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get SkillMap database validation done",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_should_get_SkillMap_database_validation_done()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected header \"Content-Type\" was not \"application/json\", was \"text/html; charset\u003dutf-8\". Headers are:\nConnection\u003dkeep-alive\nServer\u003dCowboy\nDate\u003dSun, 08 Jan 2023 20:01:51 GMT\nContent-Length\u003d506\nContent-Type\u003dtext/html; charset\u003dutf-8\nCache-Control\u003dno-cache, no-store\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:182)\r\n\tat io.restassured.specification.ResponseSpecification$header$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:189)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.header(ValidatableResponseOptionsImpl.java:124)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$header(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy:184)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy)\r\n\tat stepDefinitions.SkillMapStepDefinitions.user_should_get_SkillMap_database_validation_done(SkillMapStepDefinitions.java:215)\r\n\tat ✽.User should get SkillMap database validation done(file:///C:/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/Features/UsersSkillMap.feature:43)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Verify that user can send put request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PutSkillMap"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for SkillMap API",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends PUT request to modify existing record with new skillMap data from \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code \"201\",valid response body and json schema validated for successful SkillMap-PUT request",
  "keyword": "Then "
});
formatter.step({
  "name": "User should get SkillMap database validation done",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "putskillMap",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can send put request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SkillMapAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@PutSkillMap"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for SkillMap API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_sets_request_with_authorization_for_SkillMap_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends PUT request to modify existing record with new skillMap data from \"putskillMap\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_sends_PUT_request_to_modify_existing_record_with_new_skillMap_data_from_and(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"201\",valid response body and json schema validated for successful SkillMap-PUT request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMap_PUT_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get SkillMap database validation done",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_should_get_SkillMap_database_validation_done()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected header \"Content-Type\" was not \"application/json\", was \"text/html; charset\u003dutf-8\". Headers are:\nConnection\u003dkeep-alive\nServer\u003dCowboy\nDate\u003dSun, 08 Jan 2023 20:01:52 GMT\nContent-Length\u003d506\nContent-Type\u003dtext/html; charset\u003dutf-8\nCache-Control\u003dno-cache, no-store\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:182)\r\n\tat io.restassured.specification.ResponseSpecification$header$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:189)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.header(ValidatableResponseOptionsImpl.java:124)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$header(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy:184)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy)\r\n\tat stepDefinitions.SkillMapStepDefinitions.user_should_get_SkillMap_database_validation_done(SkillMapStepDefinitions.java:215)\r\n\tat ✽.User should get SkillMap database validation done(file:///C:/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/Features/UsersSkillMap.feature:54)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Verify that user can send delete request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteSkillMap"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for SkillMap API",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends DELETE request to delete existing Userid skillMap \"\u003cSheetName\u003e\" and \u003cRownumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful SkillMap-DELETE request",
  "keyword": "Then "
});
formatter.step({
  "name": "User should get SkillMap database validation done",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "Rownumber"
      ]
    },
    {
      "cells": [
        "deleteskillMap",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can send delete request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SkillMapAPI"
    },
    {
      "name": "@RunAll"
    },
    {
      "name": "@DeleteSkillMap"
    }
  ]
});
formatter.step({
  "name": "User sets request with authorization for SkillMap API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_sets_request_with_authorization_for_SkillMap_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends DELETE request to delete existing Userid skillMap \"deleteskillMap\" and 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_sends_DELETE_request_to_delete_existing_Userid_skillMap_and(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code \"200\",valid response body and json schema validated for successful SkillMap-DELETE request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_SkillMap_DELETE_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get SkillMap database validation done",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SkillMapStepDefinitions.user_should_get_SkillMap_database_validation_done()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected header \"Content-Type\" was not \"application/json\", was \"text/html; charset\u003dutf-8\". Headers are:\nConnection\u003dkeep-alive\nServer\u003dCowboy\nDate\u003dSun, 08 Jan 2023 20:01:53 GMT\nContent-Length\u003d506\nContent-Type\u003dtext/html; charset\u003dutf-8\nCache-Control\u003dno-cache, no-store\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:182)\r\n\tat io.restassured.specification.ResponseSpecification$header$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.header(ResponseSpecificationImpl.groovy:189)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.header(ValidatableResponseOptionsImpl.java:124)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$header(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy:184)\r\n\tat io.restassured.internal.ValidatableResponseImpl.header(ValidatableResponseImpl.groovy)\r\n\tat stepDefinitions.SkillMapStepDefinitions.user_should_get_SkillMap_database_validation_done(SkillMapStepDefinitions.java:215)\r\n\tat ✽.User should get SkillMap database validation done(file:///C:/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/Features/UsersSkillMap.feature:65)\r\n",
  "status": "failed"
});
});