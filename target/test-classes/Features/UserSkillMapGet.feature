#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@SkillMapGetAPI @RunAll
Feature: SkillMapGETAPI-Get All Skill details using various parameters
 
  @GetSkillsMapGET
    Scenario: Verify that user can send get request to retrieve all SkillMapGET data
    Given User sets request with authorization for SkillMapGET API
    When User sends GET request for SkillMapGET API
    Then User should get status code "200",valid response body and json schema validated for successful SkillMapGET-GET request 
    
  @GetSkillsMapGETUserID
   Scenario Outline: Verify that user can send get request to retrieve all SkillMapGET data setting UserID as parameter
    Given User sets request with authorization for SkillMapGET API
    When User sends GET request for SkillMapGET API using User ID from "<SheetName>" and <Rownumber>
    Then User should get status code "200",valid response body and json schema validated for successful SkillMapGET-GET request using User ID
    
     Examples: 
      | SheetName         | Rownumber |
      | getskillMapUSERID |     0     |
      
   @GetSkillsMapGETSkillID
    Scenario Outline: Verify that user can send get request to retrieve all SkillMapGET data setting SkillID as parameter
    Given User sets request with authorization for SkillMapGET API
    When User sends GET request for SkillMapGET API using Skill ID from "<SheetName>" and <Rownumber>
    Then User should get status code "200",valid response body and json schema validated for successful SkillMapGET-GET request using Skill ID
    
     Examples: 
      | SheetName          | Rownumber |
      | getskillMapSKILLID |     0     |
      
    
    
    
    
    