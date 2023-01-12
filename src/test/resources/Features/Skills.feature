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
@SkillsAPI @RunAll
Feature: SkillsAPI-Get-All, Get-Single, Post, Put & Delete 
  
  @GetSkills
  Scenario: Verify that user can send get request to retrieve all skills data
    Given User sets request with authorization for Skills API
    When User sends GET request for Skills API
    Then User should get status code "200",valid response body and json schema validated for successful Skills-GET request 

  @GetSingleUserSkills
  Scenario Outline: Verify that user can send get request to retrieve single user skills data
    Given User sets request with authorization for Skills API
    When User sends GET request for single Userid Skills from "<SheetName>" and <Rownumber>
    Then User should get status code "200",valid response body and json schema validated for successful Skills-GET request for Single User

    Examples: 
      | SheetName       | Rownumber |
      | getsingleskills |     0     |
      
   @PostSkills
  Scenario Outline: Verify that user can send post request
    Given User sets request with authorization for Skills API
    When User sends POST request for Skills with data from "<SheetName>" and <Rownumber>
    Then User should get status code "201",valid response body and json schema validated for successful Skills-POST request
    Then User should get Skills database validation done

    Examples: 
      | SheetName   | Rownumber |
      | postskills    |         0 |
      
     @PutSkills
  Scenario Outline: Verify that User can send put request to update a user skill data
    Given User sets request with authorization for Skills API
    When User sends PUT request to modify existing record with new skills data from "<SheetName>" and <Rownumber>
    Then User should get status code "201",valid response body and json schema validated for successful Skills-PUT request
    Then User should get Skills database validation done
    
    Examples: 
      | SheetName     | Rownumber |
      | putskills     |         0 |

     @DeleteSkills
  Scenario Outline: Verify that User can delete user skills record
    Given User sets request with authorization for Skills API
    When User sends DELETE request to delete existing Userid skills "<SheetName>" and <Rownumber>
    Then User should get status code "200",valid response body and json schema validated for successful Skills-DELETE request
    Then User should get Skills database validation done
    
      Examples: 
      | SheetName       | Rownumber |
      | deleteskills    |         0 |

    
      
