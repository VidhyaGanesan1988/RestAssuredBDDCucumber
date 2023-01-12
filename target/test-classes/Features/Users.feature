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
@UserAPI @RunAll
Feature: UserAPI-Get-All, Get-Single, Post, Put & Delete 
  

  @GetUser
  Scenario: Verify that user can send get request to retrieve all user data
    Given User sets request with authorization
    When User sends GET request
    Then User should get status code "200", valid response body and json schema validated for successful GET request
    

   @GetSingleUser
  Scenario Outline: Verify that user can send get request to retrieve single user data
    Given User sets request with authorization
    When User sends GET request for single Userid data from "<SheetName>" and <Rownumber>
    Then User should get status code "200", valid response body and json schema validated for successful single user GET request
    
    Examples: 
      | SheetName        | Rownumber |
      | getsingledata    |         0 |
    
    @PostUser
  Scenario Outline: Verify that user can send post request
    Given User sets request with authorization
    When User sends POST request with data from "<SheetName>" and <Rownumber>
    Then User should get status code "201", valid response body and json schema validated for successful POST request
    Then User should get database validation done

    Examples: 
      | SheetName   | Rownumber |
      | postdata    |         0 |
      
     @PutUser
  Scenario Outline: Verify that User send put request to update a user data
    Given User sets request with authorization
    When User sends PUT request to modify existing record with new data from "<SheetName>" and <Rownumber>
    Then User should get status code "201", valid response body and json schema validated for successful PUT request
    Then User should get database validation done
    
    Examples: 
      | SheetName   | Rownumber |
      | putdata     |         0 |

     @DeleteUser
  Scenario Outline: Verify that User can delete user record
    Given User sets request with authorization
    When User sends DELETE request to delete existing Userid "<SheetName>" and <Rownumber>
    Then User should get status code "200",valid response body and json schema validated for successful DELETE request
    Then User should get database validation done
    
      Examples: 
      | SheetName     | Rownumber |
      | deletedata    |         0 |

    
  