package stepDefinitions;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.json.simple.JSONObject;
import org.junit.Assert;

import com.google.gson.JsonObject;

import Utilities.ApiConfig;
import Utilities.ExcelReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.module.jsv.JsonSchemaValidator;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class UserStepDefinitions {
	
	String uri;
	public RequestSpecification request;
	int status;
	JsonObject jsonObject;
	String basePath = "/Users";
	Response response;
	String jsonAsString;
	
	//GET ALL THE USERS
	@Given("User sets request with authorization")
	public void user_sets_request_with_authorization()  { //Using base URL and adding "Users" path//
		this.uri = ApiConfig.BASE_URL + this.basePath; 
		this.request = RestAssured.given().auth().preemptive().basic(ApiConfig.USERNAME, ApiConfig.PASSWORD)
				.header("Content-Type", "application/json");
	}

	@When("User sends GET request")
	public void user_sends_GET_request()  { //Sending request with basic authorization(Check apiconfig file)//
		response = this.request.get(this.uri);	
		response.then().log().all();
	}

	@Then("User should get status code {string}, valid response body and json schema validated for successful GET request")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_GET_request(String statuscode) {
		
		int StatusCodeUser = response.getStatusCode();
		if (StatusCodeUser == 200) {
		response.then().statusCode(Integer.parseInt(statuscode));
		System.out.println("Successful Status Code" + StatusCodeUser );
		jsonAsString = response.asString();	
		response.then().assertThat().body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaUser/getuserschema.json")));
		}
		else {
			System.out.println("Response received successfully: " + StatusCodeUser);
		}
		}	
		
	//GET SINGLE USER DATA
	@SuppressWarnings("unchecked")
	@When("User sends GET request for single Userid data from {string} and {int}")
	public void user_sends_GET_request_for_single_Userid_data_from_and(String sheetName, Integer rowNumber) throws InvalidFormatException, IOException {
		ExcelReader excelReader = new ExcelReader();
		List<Map<String,String>> getData = 
				excelReader.getData(ApiConfig.EXCEL, sheetName);
		
		String user_id = getData.get(rowNumber).get("user_id");
		
		JSONObject body = new JSONObject();
		body.put("user_id", user_id);
		
		        response  = this.request
				.when()
				.body(body.toJSONString())
				.get(this.uri + "/" + user_id)
				.then()
				.log().all().extract().response();
		        
			
	}

	@Then("User should get status code {string}, valid response body and json schema validated for successful single user GET request")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_single_user_GET_request(String statusCode) {
		int StatusCodeUser = response.getStatusCode();
		if (StatusCodeUser == 200) {
			response.then().statusCode(Integer.parseInt(statusCode));
			System.out.println("Successful Status Code: " + StatusCodeUser);
		response.then().assertThat().body(JsonSchemaValidator
				.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaUser/getsingleuserschema.json")));		
		}
		 else {
				System.out.println("Response received successfully: " + StatusCodeUser);
			}
	}

	//POST FOR SINGLE USER DATA
	@SuppressWarnings("unchecked")
	@When("User sends POST request with data from {string} and {int}")
	public void user_sends_POST_request_with_data_from_and(String sheetName, Integer rowNumber) throws InvalidFormatException, IOException { 
		ExcelReader excelReader = new ExcelReader();
		List<Map<String,String>> postData = 
				excelReader.getData(ApiConfig.EXCEL, sheetName);
		
		String name = postData.get(rowNumber).get("name");
		String phone_number = postData.get(rowNumber).get("phone_number");
		String location = postData.get(rowNumber).get("location");
		String time_zone = postData.get(rowNumber).get("time_zone");
		String linkedin_url = postData.get(rowNumber).get("linkedin_url");
		String education_ug = postData.get(rowNumber).get("education_ug");
		String education_pg = postData.get(rowNumber).get("education_pg");
		String visa_status = postData.get(rowNumber).get("visa_status");
		String comments = postData.get(rowNumber).get("comments");
		
		JSONObject body = new JSONObject();
		body.put("name", name);
		body.put("phone_number", phone_number);
		body.put("location", location);
		body.put("time_zone", time_zone);
		body.put("linkedin_url", linkedin_url);
		body.put("education_ug", education_ug);
		body.put("education_pg", education_pg);
		body.put("visa_status", visa_status);
		body.put("comments", comments);
		
		response = this.request
				.body(body.toJSONString())
				.when()
				.post(this.uri)
				.then()
				.log().all().extract().response();
	}
	
	@Then("User should get status code {string}, valid response body and json schema validated for successful POST request")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_POST_request(String statuscode) {
	
	int StatusCodeUser = response.getStatusCode();
	if (StatusCodeUser == 201) {
		response.then().statusCode(Integer.parseInt(statuscode));
		System.out.println("Successful Status Code: " + StatusCodeUser);
		Assert.assertEquals(statuscode, "201");
		jsonAsString = response.asString();
		Assert.assertEquals(jsonAsString.contains( "Successfully Created !!"), true);
		response.then().assertThat().body(JsonSchemaValidator
				.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaUser/postuserschema.json")));
	}
	else if (StatusCodeUser == 404) {
		System.out.println("Response received successfully: " + StatusCodeUser);
		response.then().assertThat().body(JsonSchemaValidator
				.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaUser/getuser404schema.json")));
	}
	 else {
			System.out.println("Response received successfully:" + StatusCodeUser);
		}
	}
	
	//PUT FOR MODIFYING SINGLE USER DATA

	@SuppressWarnings("unchecked")
	@When("User sends PUT request to modify existing record with new data from {string} and {int}")
	public void user_sends_PUT_request_to_modify_existing_record_with_new_data_from_and(String sheetName, Integer rowNumber) throws InvalidFormatException, IOException {
		
		ExcelReader excelReader = new ExcelReader();
		List<Map<String,String>> putData = 
				excelReader.getData(ApiConfig.EXCEL, sheetName);
		
		String user_id = putData.get(rowNumber).get("user_id");
		String name = putData.get(rowNumber).get("name");
		String phone_number = putData.get(rowNumber).get("phone_number");
		String location = putData.get(rowNumber).get("location");
		String time_zone = putData.get(rowNumber).get("time_zone");
		String linkedin_url = putData.get(rowNumber).get("linkedin_url");
		String education_ug = putData.get(rowNumber).get("education_ug");
		String education_pg = putData.get(rowNumber).get("education_pg");
		String visa_status = putData.get(rowNumber).get("visa_status");
		String comments = putData.get(rowNumber).get("comments");
		
		JSONObject body = new JSONObject();
		body.put("user_id", user_id);
		body.put("name", name);
		body.put("phone_number", phone_number);
		body.put("location", location);
		body.put("time_zone", time_zone);
		body.put("linkedin_url", linkedin_url);
		body.put("education_ug", education_ug);
		body.put("education_pg", education_pg);
		body.put("visa_status", visa_status);
		body.put("comments", comments);
		
		response = this.request
				.body(body.toJSONString())
				.when()
				.put(this.uri + "/" + user_id)
				.then()
				.log().all().extract().response();
	
	   
	}

	@Then("User should get status code {string}, valid response body and json schema validated for successful PUT request")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_PUT_request(String statuscode) {
		int StatusCodeUser = response.getStatusCode();
		if (StatusCodeUser == 201) {
		response.then().statusCode(Integer.parseInt(statuscode));
		System.out.println("Successful Status Code: " + StatusCodeUser);
		jsonAsString = response.asString();
		Assert.assertEquals(jsonAsString.contains( "Successfully Updated !!"), true);
		response.then().assertThat()
		.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaUser/putuserschema.json")));
		}
		else if (StatusCodeUser == 400) {
			System.out.println("Response received successfully: " + StatusCodeUser);
			response.then().assertThat()
			.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaSkills/putskill400error.json")));
		}
		else {
			System.out.println("Response received successfully:" + StatusCodeUser);
		}
		}

	@When("User sends DELETE request to delete existing Userid {string} and {int}")
	public void user_sends_DELETE_request_to_delete_existing_Userid_and(String sheetName, Integer rowNumber) throws InvalidFormatException, IOException {
		ExcelReader excelReader = new ExcelReader();
		List<Map<String,String>> delData = 
				excelReader.getData(ApiConfig.EXCEL, sheetName);
		
        String user_id = delData.get(rowNumber).get("user_id");
		
		response = this.request
				.when()
				.delete(this.uri + "/" + user_id)
				.then()
				.log().all().extract().response();
	}


	@Then("User should get status code {string},valid response body and json schema validated for successful DELETE request")
	public void user_should_get_status_code_valid_response_body_and_json_schema_validated_for_successful_DELETE_request(String statuscode) {
		int StatusCodeUser = response.getStatusCode();
		if (StatusCodeUser == 200) {
		response.then().statusCode(Integer.parseInt(statuscode));
		System.out.println("Successful Status Code: " + StatusCodeUser);
		jsonAsString = response.asString();
		Assert.assertEquals(jsonAsString.contains( "The record has been deleted !!"), true);
		response.then().assertThat()
		.body(JsonSchemaValidator.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaUser/deleteuserschema.json")));
	}
		else if (StatusCodeUser == 404) {
			System.out.println("Response received successfully: " + StatusCodeUser);
			response.then().assertThat().body(JsonSchemaValidator
					.matchesJsonSchema(new File("/Users/admin/eclipse-workspace/RestAssuredBDDCucumber/src/test/resources/JsonSchemaUser/deleteuser404schema.json")));
		}
		else {
			System.out.println("Response received successfully:" + StatusCodeUser);
		}
	}
	
	//VALIDATING DATABASE AFTER POST REQUEST
	@Then("User should get database validation done")
	public void user_should_get_database_validation_done() {
		RestAssured.given()
		.get(this.uri)
		.then()
		.header("Content-Type", "application/json")
		.log().all()
		.extract().response();	
		System.out.println("Database Validated Successfully!!");
	}

}
