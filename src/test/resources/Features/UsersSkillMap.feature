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
@SkillMapAPI @RunAll
Feature: SkillMapAPI-Get-All, Get-Single, Post, Put & Delete 

  @GetSkillMap
    Scenario: Verify that user can send get request to retrieve all SkillMap data
    Given User sets request with authorization for SkillMap API
    When User sends GET request for SkillMap API
    Then User should get status code "200",valid response body and json schema validated for successful SkillMap-GET request 
    
  @GetSingleSkillMap
    Scenario Outline: Verify that user can send get request to retrieve single SkillMap data
    Given User sets request with authorization for SkillMap API
    When User sends GET request for single Userid SkillMap from "<SheetName>" and <Rownumber>
    Then User should get status code "200",valid response body and json schema validated for successful single SkillMap-GET request  
         
    Examples: 
      | SheetName         | Rownumber |
      | getsingleskillMap |     0     |

  @PostSkillMap
    Scenario Outline: Verify that user can send post request
    Given User sets request with authorization for SkillMap API
    When User sends POST request for SkillMap with data from "<SheetName>" and <Rownumber>
    Then User should get status code "201",valid response body and json schema validated for successful SkillMap-POST request 
    Then User should get SkillMap database validation done
         
    Examples: 
      | SheetName       | Rownumber |
      | postskillMap    |     0     |
  
  @PutSkillMap
     Scenario Outline: Verify that user can send put request 
    Given User sets request with authorization for SkillMap API
    When User sends PUT request to modify existing record with new skillMap data from "<SheetName>" and <Rownumber>
    Then User should get status code "201",valid response body and json schema validated for successful SkillMap-PUT request 
    Then User should get SkillMap database validation done
         
    Examples: 
      | SheetName    | Rownumber |
      | putskillMap  |     0     |
      
    @DeleteSkillMap
     Scenario Outline: Verify that user can send delete request 
    Given User sets request with authorization for SkillMap API
    When User sends DELETE request to delete existing Userid skillMap "<SheetName>" and <Rownumber>
    Then User should get status code "200",valid response body and json schema validated for successful SkillMap-DELETE request 
    Then User should get SkillMap database validation done
         
    Examples: 
      | SheetName       | Rownumber |
      | deleteskillMap  |     0     |   